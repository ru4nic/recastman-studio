import { styled } from 'styled-components';

import soldano from '../assets/images/soldano.jpg';
import blackBknd from '../assets/images/blackmamba.webp';

import overlay from '../assets/images/overlay.png';

import theme from '../theme';

export const Page = styled.div`
  position: relative;
  z-index: 1;
  box-shadow: 0 0.0625rem 0.1875rem rgba(255, 255, 255, 0.292),
    rgba(255, 255, 255, 0.069) 0 0.625rem 0.9375rem -0.3125rem,
    rgba(255, 255, 255, 0.092) 0 0.4375rem 0.4375rem -0.3125rem;
`;
export const MainDesc = styled.p`
  font-size: 0.5em;
  text-align: right;
  font-weight: 400;
  padding-top: 1em;
  border-top: 2px ${theme.colors.line} solid;
`;

export const Section = styled.section<{
  $releases?: boolean;
  $page?: boolean;
  $filterGray?: boolean;
}>`
  font-family: 'Open Sans';
  background: ${(props) =>
    props.$releases
      ? `linear-gradient(180deg,rgba(215, 215, 215, 0.99) 2%,rgba(237, 237, 237, 0.946) 50%,rgba(155, 155, 155, 0.935))`
      : props.$page
      ? 'rgba(255, 255, 255, 0.843)'
      : `rgba(30, 29, 26, 0.7)`};
  background-size: auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${(props) =>
      props.$releases ? `url(${soldano})` : `url(${blackBknd})`};
    background-repeat: ${(props) =>
      props.$releases ? 'no - repeat' : 'repeat'};
    background-position: center;
    background-size: ${(props) => (props.$releases ? 'cover' : 'auto')};
    filter: ${(props) => (props.$filterGray ? 'grayscale(1)' : 'unset')};

    z-index: -1;
  }
`;
export const Wrapper = styled.div<{ $footer?: boolean }>`
  padding: ${(props) => (props.$footer ? '7rem 0' : '9rem 0 7rem 0')};

  @media (max-width: 1000px) {
    padding: 7rem 0 4rem 0;
  }
  @media (max-width: 600px) {
    padding: 5rem 0 3rem 0;
  }
  @media (max-height: 375px) {
    padding: 2rem 0 4rem 0;
  }
`;
export const Container = styled.div`
  margin: 0 auto;
  max-width: 70%;
  @media (max-width: 750px) {
    max-width: 80%;
  }
`;
export const HeadContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const Heading = styled.header<{ $page?: boolean }>`
  margin: 0 auto 5rem auto;
  position: ${(props) => (props.$page ? 'absolute' : 'static')};
  top: ${(props) => (props.$page ? '50%' : 'unset')};
  left: ${(props) => (props.$page ? '50%' : 'unset')};
  transform: ${(props) => (props.$page ? 'translate(-50%, -50%)' : 'unset')};
  @media (max-width: 600px) {
    margin: 0 auto 5rem auto;
  }
`;
export const SectionTitle = styled.h2<{
  $h3?: boolean;
  $dark?: boolean;
  $page?: boolean;
}>`
  font-size: ${(props) =>
    props.$h3 ? '1.8rem' : props.$page ? '1.5rem' : '2.5rem'};
  color: ${(props) => (props.$dark ? theme.colors.darkText : '#ffffff')};
  text-align: ${(props) => (props.$page ? 'left' : 'center')};
  font-weight: 700;
  text-transform: ${(props) => (props.$page ? '' : 'uppercase')};
  margin: ${(props) => (props.$h3 ? '6rem 0' : '')};
  margin-bottom: ${(props) => (props.$page ? '2rem' : 0)};
  @media (max-width: 1000px) {
    font-size: 2.3rem;
  }
  @media (max-width: 600px) {
    font-size: 2.1rem;
    text-align: left;
  }
  @media (max-width: 450px) {
    font-size: 2rem;
    overflow-wrap: break-word;
  }
`;
export const SectionDesc = styled.p<{
  $dark?: boolean;
  $paragraph?: boolean;
  $list?: boolean;
}>`
  color: ${(props) =>
    props.$dark ? theme.colors.darkText : theme.colors.primaryText};
  display: ${(props) => props.$list && 'list-item'};
  margin: ${(props) => props.$list && '0.5rem 0'};
  font-weight: 400;
  text-align: ${(props) => (props.$paragraph ? 'unset' : 'center')};
  line-height: 1.7;
  font-size: 1.2em;
  background-color: ${(props) => props.$list && '#ffffff50 '};
  border-radius: ${(props) => props.$list && theme.borderRadius};
  border: ${(props) => props.$list && '1px solid #00000020'};
  padding: ${(props) => props.$list && '0.4rem 1.1992rem'};

  @media (max-width: 1000px) {
  }
  @media (max-width: 600px) {
    font-size: 1.1em;
    line-height: 1.8rem;
    text-align: left;
  }
  @media (max-width: 450px) {
    font-size: 1rem;
    text-align: left;
  }
`;

export const SectionImageWrapper = styled.div<{
  $light?: boolean;
  $recording?: boolean;
  $reamping?: boolean;
}>`
  display: block;
  margin: 0;
  width: 100%;
  position: relative;
  &::before {
    content: '';
    height: 100%;
    left: 0;
    background-color: ${(props) =>
      props.$light ? 'rgba(26, 26, 26, 0.93)' : 'rgba(26, 26, 26, 0.97)'};
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0;
  }
  &::after {
    content: '';
    position: absolute;
    background-image: url(${overlay});
    top: 0;
    left: 0;
    opacity: ${(props) =>
      props.$recording ? 0.7 : props.$reamping ? 0.3 : 0.7};
    height: 100%;
    width: 100%;
    z-index: 0;
  }
`;
export const SectionImage = styled.img<{
  $mixing?: boolean;
  $recording?: boolean;
}>`
  display: block;
  height: 50rem;
  max-height: 70vmin;
  width: 100%;
  object-fit: cover;
  object-position: ${(props) =>
    props.$mixing
      ? 'center 20%'
      : props.$recording
      ? 'center 100%'
      : 'center 100%'};
  @media (max-height: 375px) {
    max-height: 100vh;
  }
`;
