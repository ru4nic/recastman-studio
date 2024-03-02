import { useRef, useState } from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';

import { releases } from '../data';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';

import { FaPlay, FaPause } from 'react-icons/fa6';

import 'react-h5-audio-player/lib/styles.css';
import {
  AlbumImage,
  Author,
  CurrentPausedTrackIcon,
  CurrentPlayTrackIcon,
  IconWrapper,
  Item,
  PlayerList,
  Separator,
  Song,
  StyledAudioPlayer,
  Wrapper,
} from './player.styled';

export default function Player() {
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
