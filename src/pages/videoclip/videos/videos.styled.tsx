import styled from 'styled-components';
import { styled as muiStyled } from '@mui/material/styles';

import Dialog from '@mui/material/Dialog';

import playIcon from '../../../assets/images/icons/icon-youtube-play.svg';
import theme from '../../../theme';

export const Wrapper = styled.div`
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
export const IconPlay = styled.div`
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
export const DescBlock = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;

  margin: auto 0;
  background-color: #ffffffda;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  color: ${theme.colors.darkText};
  z-index: 1;
  transition: height 0.25s ease-in-out;
`;
export const Desc = styled.div`
  display: block;
  padding: 0.5em 1em;
  font-weight: 500;
  font-size: 1em;
`;
export const Preview = styled.div<{ $src: string }>`
  background-image: ${(props) => `url(${props.$src})`};
  flex-basis: 30%;
  overflow: hidden;
  background-size: cover;
  border-radius: ${theme.borderRadius};
  aspect-ratio: 16/9;
  position: relative;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.28);
  &:hover {
    cursor: pointer;

    ${IconPlay} {
      opacity: 1;
    }
    ${DescBlock} {
      height: 0;
    }
    ${Desc} {
    }
  }
  @media (max-width: 1000px) {
    flex-basis: 45%;
  }
  @media (max-width: 600px) {
    flex-basis: 90%;
  }
`;

export const Iframe = styled.iframe`
  display: block;
  width: 100%;
  aspect-ratio: 16/9;
  background-color: #ff0000c1;
`;

export const StyledDialog = muiStyled(Dialog)`
& .MuiBackdrop-root {
  background-color: rgba(0,0,0,0.87);
}
& .MuiPaper-root {
  background-color: transparent;
  
}
`;
