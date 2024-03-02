import styled from 'styled-components';

import overlay from '../../../assets/images/overlay.png';
import theme from '../../../theme';

export const injectStyles = `.swiper-button-next,
.swiper-button-prev {
  background-color: #ffffff;
  padding: 1em 1em;
  border-radius: 100%;
  border: 1px solid #c0c0c089;
  --swiper-navigation-size: 3em;
}
@media (max-width: 750px){
  .swiper-button-next,
.swiper-button-prev{
  --swiper-navigation-size: 2em;
  }
}
@media (max-width: 450px){
  .swiper-button-next,
.swiper-button-prev{
  --swiper-navigation-size: 1em;
  }
}
`;

export const Container = styled.div<{ $releases?: boolean }>`
  width: ${(props) => (props.$releases ? '100%' : '100%')};
  height: 100%;

  --swiper-pagination-color: ${theme.colors.line};
  --swiper-pagination-bullet-inactive-color: #000;
  --swiper-pagination-bullet-size: 1em;

  position: relative;
  .swiper-slide-active > div {
    transform: scale(1);
    opacity: 1;
  }
  --swiper-navigation-color: red;
`;

export const Img = styled.div<{
  $src?: string;
  $releases?: boolean;
}>`
  background-image: ${(props) => `url(${props.$src})`};
  position: relative;
  width: 100%;
  height: ${(props) => (props.$releases ? '' : '75vh')};
  min-height: ${(props) => (props.$releases ? '5vh' : '40rem')};
  background-position: top center;
  aspect-ratio: 1;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: ${(props) => props.$releases && theme.borderRadius};
  box-shadow: ${(props) =>
    props.$releases &&
    'rgba(0,0,0,0.14) 0px 2px 2px 0px, rgba(0,0,0,0.2) 0px 3px 1px -2px, rgba(0,0,0,0.12) 0px 1px 5px 0px'};

  &::after {
    content: ${(props) => (props.$releases ? '' : `''`)};
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url(${overlay});
    background-size: 128px 128px, cover;
    background-color: rgba(0, 0, 0, 0.623);
    border-radius: ${(props) => props.$releases && theme.borderRadius};
  }
  @media (max-width: 750px) {
    width: ${(props) => (props.$releases ? '50%' : '100%')};
    margin: 0 auto;
  }
  @media (max-width: 480px) {
    width: ${(props) => (props.$releases ? '97%' : '100%')};
  }
`;
export const Wrapp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const TitleWrapp = styled.div`
  text-align: center;
  opacity: 0;
  color: #444;
  transform: scale(0.3);
  transition: opacity 0.4s ease-in-out, transform 0.5s ease-in-out;
  margin-top: 1.5em;
  padding: 0.5em 1em;
  border: 1px solid #00000020;
  background-color: #ffffff90;

  border-radius: ${theme.borderRadius};
  @media (max-width: 480px) {
    margin-top: 1em;
  }
`;
export const Title = styled.h4`
  font-size: 1.2em;
  font-weight: 700;

  margin: 0;
  line-height: 1.3;
  @media (max-width: 1190px) {
    font-size: 1em;
  }
  @media (max-width: 600px) {
    font-weight: 400;
    font-size: 0.9em;
  }
  @media (max-width: 450px) {
    font-weight: 400;
    font-size: 1em;
    padding: 0.5em;
  }
`;
