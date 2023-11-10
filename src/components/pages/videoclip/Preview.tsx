import { useState, Fragment } from 'react';
import { styled } from 'styled-components';
import { styled as muiStyled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import previewContra from '../../../assets/images/preview_contra.jpg';
import previewBdd from '../../../assets/images/preview_bdd.jpg';
import previewSevenSphere from '../../../assets/images/preview_7sphere.jpg';
import previewRomanuke from '../../../assets/images/preview_romanuke.jpg';
import previewNewWorld from '../../../assets/images/preview_newworld.jpg';
import previewPeriphery from '../../../assets/images/preview_periphery.jpg';
import previewNla from '../../../assets/images/previewNLA.jpg';
import playIcon from '../../../assets/images/icons/icon-youtube-play.svg';
import Dialog from '@mui/material/Dialog';
import { borderRadius, darkText } from '../../layout/Vars';
// import { MdClose } from 'react-icons/md';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  gap: 2rem;
  @media (max-width: 1000px) {
    gap: 0.6em;
  }
  @media (max-width: 1000px) {
    gap: 2em;
  }
`;
const IconPlay = styled.div`
  background: url(${playIcon}) no-repeat 50% / cover;
  height: 25%;
  left: 50%;
  position: absolute;
  top: 50%;
  width: 20%;
  transform: translate(-50%, -50%);
  opacity: 0.4;
  transition: width 0.25s ease, height 0.25s ease, opacity 0.25s ease-in-out;
  z-index: 0;
`;
const PreviewInner = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;

  margin: auto 0;
  background-color: #ffffffda;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  color: ${darkText};
  z-index: 1;
  transition: height 0.25s ease-in-out;
`;
const InnerText = styled.div`
  display: block;
  padding: 0.5em 1em;
  font-weight: 500;
  /* letter-spacing: 1px; */
  font-size: 1em;
`;
const StyledPreview = styled.div<{ $src: string }>`
  background-image: ${(props) => `url(${props.$src})`};
  flex-basis: 30%;
  /* height: 30vh;
  width: 30%; */
  overflow: hidden;
  background-size: cover;
  border-radius: ${borderRadius};
  aspect-ratio: 16/9;
  position: relative;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.28);
  &:hover {
    cursor: pointer;

    ${IconPlay} {
      /* width: 30%;
      height: 38%; */
      opacity: 1;
    }
    ${PreviewInner} {
      height: 0;
    }
    ${InnerText} {
      /* font-size: 0.9em; */
    }
  }
  @media (max-width: 1000px) {
    flex-basis: 45%;
  }
  @media (max-width: 600px) {
    flex-basis: 90%;
  }
`;

const StyledFrame = styled.iframe`
  display: block;
  /* max-width: 90vw;
  max-height: 85vh; */
  width: 100%;

  aspect-ratio: 16/9;
  background-color: #ff0000c1;
  /* @media (max-width: 600px) {
    width: 100%;
  } */
`;
// const DialogContainer = styled.div`
//   display: block;
//   position: relative;
// `;
// const CloseIcon = styled(MdClose)`
//   font-size: 2.5em;
//   position: absolute;
//   top: 0.3em;
//   right: 0.2em;
//   color: rgba(255, 255, 255, 0.48);
//   transition: color 0.2s ease-in-out;
//   cursor: pointer;
//   &:hover {
//     color: #fff;
//   }
// `;

const StyledDialog = muiStyled(Dialog)`
& .MuiBackdrop-root {
  background-color: rgba(0,0,0,0.87);
}
& .MuiPaper-root {
  background-color: transparent;
  
}
`;
const Previews = () => {
  const [videoIndex, setVideoIndex] = useState<null | number>(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = (index: number) => {
    setOpen(true);
    setVideoIndex(index);
  };

  const handleClose = () => {
    setOpen(false);
  };
  type Videos = {
    link: string;
    src: string;
    name: string;
    id: number;
  }[];
  const videos: Videos = [
    {
      link: 'https://www.youtube.com/embed/XRB2aP7Xc1A?si=AoNOKBAtkvbJgzwX',
      src: previewBdd,
      name: 'Battletoads & Double Dragon Nes (cover)',
      id: 133,
    },
    {
      link: 'https://www.youtube.com/embed/krwxxxF-wSQ?si=UMLgKHgfVaruycHS',
      src: previewContra,
      name: 'Contra OST Nes (cover): Boss, Waterfall, Snow',
      id: 142,
    },
    {
      link: 'https://www.youtube.com/embed/gz7gA2EaG0U?si=Tw-nmwL5KsvpgBBV',
      src: previewNewWorld,
      name: 'Deadheaven - Новый мир',
      id: 156,
    },
    {
      link: 'https://www.youtube.com/embed/WsDHb8Hdf4U?si=kPMkpUocSaYoKc9v',
      src: previewSevenSphere,
      name: '7th Sphere - Крылья Drum playthrough',
      id: 345,
    },
    {
      link: 'https://www.youtube.com/embed/GTJDlX3Sdvs?si=DQCobF7ZuThF3vn2',
      src: previewRomanuke,
      name: 'Romanuke - Brillos Live drum playthrough',
      id: 332,
    },
    {
      link: 'https://www.youtube.com/embed/WS2rriFLvss?si=itCLpKj-JkkG0tDV',
      src: previewPeriphery,
      name: 'Periphery / drum (cover) by Sergey Dedov',
      id: 124,
    },
    {
      link: 'https://www.youtube.com/embed/SG8PL8NLb4g?si=SxlzKEZ2rZPsPS36',
      src: previewNla,
      name: 'Nothing Like Art - How Are You?',
      id: 453,
    },
  ];
  const mobileScreen = useMediaQuery('(max-width:600px)');
  const mobileScreenHorizontal = useMediaQuery('(max-height:420px)');
  return (
    <Wrapper>
      {videos.map((video, index) => {
        return (
          <Fragment key={video.id}>
            <StyledPreview
              $src={video.src}
              onClick={() => handleClickOpen(index)}
            >
              <PreviewInner>
                <InnerText>{video.name}</InnerText>
              </PreviewInner>
              <IconPlay />
            </StyledPreview>
            {videoIndex === index && (
              <StyledDialog
                open={open}
                onClose={handleClose}
                maxWidth={mobileScreenHorizontal ? 'xs' : 'lg'}
                fullWidth={
                  mobileScreen ? false : mobileScreenHorizontal ? true : true
                }
                // fullWidth
                // PaperProps={{ elevation: 3 }}
              >
                {/* <DialogContainer> */}
                {/* <CloseIcon onClick={handleClose} /> */}
                <StyledFrame src={video.link} frameBorder="0" allowFullScreen />
                {/* </DialogContainer> */}
              </StyledDialog>
            )}
          </Fragment>
        );
      })}
    </Wrapper>
  );
};
export default Previews;
