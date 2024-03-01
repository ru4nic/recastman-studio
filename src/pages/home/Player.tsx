import { useRef, useState } from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from 'styled-components';
import { releases } from './data';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import { FaPlay, FaPause } from 'react-icons/fa6';

import 'react-h5-audio-player/lib/styles.css';
import { borderRadius } from '../../layout/vars';

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 40%;
  /* width: fit-content; */
  margin: 5rem auto 0;
  color: #fff;
  /* padding: 0.8em; */
  border-radius: ${borderRadius};
  backdrop-filter: blur(10px);

  @media (max-width: 750px) {
    width: 100%;
  }
`;
const StyledAudioPlayer = styled(AudioPlayer)`
  background-color: unset;
  box-shadow: unset;
  margin-bottom: 0.5em;
  .rhap_button-clear {
    color: #fff;
  }
  .rhap_progress-section {
    order: 2;
    margin-top: 0.5em;
  }
  .rhap_progress-filled {
    background-color: #fff;
  }
  .rhap_progress-bar {
    background-color: rgba(255, 255, 255, 0.15);
  }
  .rhap_download-progress {
    background-color: rgba(255, 255, 255, 0.28);
  }
  .rhap_progress-indicator {
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 8px;
  }
  .rhap_volume-indicator {
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 12px 0px;
  }
  .rhap_volume-bar {
    background-color: rgba(255, 255, 255, 0.28);
  }
  .rhap_time {
    color: rgba(255, 255, 255, 0.28);
  }
  .rhap_play-pause-button {
    font-size: 35px;
    width: 35px;
    height: 35px;
  }
  .rhap_volume-filled {
    background-color: #fff;
  }
`;
const Separator = styled.div`
  margin: 0 0.5em;
`;
const PlayerList = styled.ol`
  padding: 0;
  margin: 0;
`;

const IconWrapper = styled.div<{ $currentPlay?: boolean; $isPlaying: boolean }>`
  display: block;
  visibility: ${(props) => (props.$currentPlay ? 'visible' : 'hidden')};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 1.8em;
  width: 1.8em;
  border-radius: 50%;
  background-color: #ff0000c8;
  &::after,
  &::before {
    content: ${(props) =>
      props.$isPlaying && props.$currentPlay
        ? ''
        : !props.$currentPlay
        ? ''
        : "''"};
    position: absolute;
    border: 6px solid #ff2323c7;
    left: -0.8em;
    opacity: 0;
    right: -0.8em;
    top: -0.8em;
    bottom: -0.8em;
    border-radius: 50%;
    animation: pulse 2.5s linear infinite;
  }
  &::after {
    animation-delay: 1.25s;
  }
  @keyframes pulse {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }
`;
const Item = styled.li<{ $currentPlay: boolean }>`
  list-style: none;
  padding: 1em;
  border-top: 1px solid rgba(233, 233, 233, 0.069);

  transition: background-color 0.2s ease;
  background-color: ${(props) =>
    props.$currentPlay && 'rgba(42, 42, 42, 0.814)'};
  display: grid;
  grid-template-areas: 'img author' 'img song';
  align-items: center;
  justify-content: flex-start;
  row-gap: 0.3em;
  column-gap: 1em;

  cursor: pointer;
  &:nth-last-child() {
    border-radius: 0 0 0.8em 0.8em;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.073);
    ${IconWrapper} {
      visibility: visible;
    }
  }
`;
const AlbumImage = styled.div<{ $img: string }>`
  background-image: ${(props) => `url(${props.$img})`};
  background-position: center;
  position: relative;
  background-size: cover;
  height: 4em;
  width: 4em;
  grid-area: img;
  border-radius: ${borderRadius};
  box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 8px;
`;
const CurrentPlayTrackIcon = styled(FaPause)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const CurrentPausedTrackIcon = styled(FaPlay)`
  position: absolute;
  top: 50%;
  left: 65%;
  transform: translate(-65%, -50%);
`;
const Author = styled.span`
  font-weight: 400;
  align-self: self-end;
  grid-area: author;
`;
const Song = styled.span`
  color: #aeaeae;
  font-size: 0.9em;
  align-self: self-start;
  font-weight: 300;
  grid-area: song;
`;

export default function Player() {
  //Получение ссылки на текущ. песню в плеере
  const [srcSong, setSrcSong] = useState<string>('');
  const [currentPlayingSong, setCurrentPlayingSong] = useState<string | number>(
    ''
  );
  const audioPlayerRef = useRef<null | AudioPlayer>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const togglePlayPause = (mp3: string, id: number) => {
    if (audioPlayerRef.current) {
      const audioEl = audioPlayerRef.current.audio.current;

      setSrcSong(mp3);
      setCurrentPlayingSong(id);

      if (currentPlayingSong === id && audioEl) {
        if (isPlaying) {
          audioEl.play();
        } else {
          audioEl.pause();
        }
      }
    }
  };
  const emptySrc = () => {
    if (currentPlayingSong === '') {
      setSrcSong(releases[0].mp3);
      setCurrentPlayingSong(releases[0].id);
    }
    // if (isPlaying === false) {
    //   setIsPlaying(!isPlaying);
    // }
  };
  const mobileScreen = useMediaQuery('(max-width:1000px)');
  return (
    <Wrapper>
      <StyledAudioPlayer
        ref={audioPlayerRef}
        src={srcSong}
        customIcons={{
          play: <FaPlay onClick={emptySrc} />,
          pause: <FaPause />,
        }}
        layout="stacked"
        onPause={() => setIsPlaying(!isPlaying)}
        onPlay={() => setIsPlaying(false)}
        showJumpControls={false}
        showSkipControls={false}
        showFilledVolume={true}
        customVolumeControls={mobileScreen ? [] : undefined}
        customAdditionalControls={[]}
        customProgressBarSection={[
          RHAP_UI.PROGRESS_BAR,
          RHAP_UI.CURRENT_TIME,
          <Separator>/</Separator>,
          RHAP_UI.DURATION,
        ]}
      />
      <PlayerList>
        {releases.map((release) => {
          const { id, author, song, mp3, img } = release;
          return (
            <Item
              $currentPlay={id === currentPlayingSong}
              key={id}
              onClick={() => togglePlayPause(mp3, id)}
            >
              <AlbumImage $img={img}>
                <IconWrapper
                  $currentPlay={id === currentPlayingSong}
                  $isPlaying={isPlaying}
                >
                  {currentPlayingSong === id && isPlaying ? (
                    <CurrentPausedTrackIcon />
                  ) : currentPlayingSong !== id ? (
                    <CurrentPausedTrackIcon />
                  ) : (
                    <CurrentPlayTrackIcon />
                  )}
                </IconWrapper>
              </AlbumImage>
              <Author>{author}</Author>
              <Song>{song}</Song>
            </Item>
          );
        })}
      </PlayerList>
    </Wrapper>
  );
}
