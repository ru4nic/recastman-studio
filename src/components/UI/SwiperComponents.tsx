import { useEffect, useRef } from 'react';
import { register } from 'swiper/element';
import {
  Autoplay,
  EffectCoverflow,
  EffectFade,
  Navigation,
  Pagination,
} from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { styled } from 'styled-components';
import overlay from '../../assets/images/overlay.png';
import { borderRadius, colorLine } from '../layout/Vars';

const StyledSwiperContainer = styled.div<{ $releases?: boolean }>`
  width: ${(props) => (props.$releases ? '100%' : '100%')};
  height: 100%;

  --swiper-pagination-color: ${colorLine};
  --swiper-pagination-bullet-inactive-color: #000;
  --swiper-pagination-bullet-size: 1em;

  position: relative;
  /* background: ${(props) =>
    props.$releases
      ? `url(${overlay}), rgba(255, 255, 255, 0.547)`
      : 'transparent'}; */
  /* padding: ${(props) => (props.$releases ? '2em' : 'none')}; */
  .swiper-slide-active > div {
    transform: scale(1);
    opacity: 1;
  }
  --swiper-navigation-color: red;

  /* @media (max-width: 1400px) {
    width: ${(props) => props.$releases && '90%'};
  }
  @media (max-width: 1000px) {
    --swiper-navigation-size: 12px;
  }
  @media (max-width: 450px) {
    width: ${(props) => props.$releases && '90%'};
  } */
`;

export const StyledSwiperImage = styled.div<{
  $src?: string;
  $releases?: boolean;
}>`
  /* display: flex; */
  background-image: ${(props) => `url(${props.$src})`};
  position: relative;
  width: 100%;
  height: ${(props) => (props.$releases ? '' : '75vh')};
  min-height: ${(props) => (props.$releases ? '5vh' : '40rem')};
  background-position: top center;
  aspect-ratio: 1;
  background-size: cover;
  background-repeat: no-repeat;
  /* border: ${(props) =>
    props.$releases ? '1px rgba(0, 0, 0, 0.161) solid' : ''}; */
  border-radius: ${(props) => props.$releases && borderRadius};
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
    border-radius: ${(props) => props.$releases && borderRadius};
    /* z-index: 1; */
  }
  @media (max-width: 750px) {
    width: ${(props) => (props.$releases ? '50%' : '100%')};
    margin: 0 auto;
  }
  @media (max-width: 480px) {
    width: ${(props) => (props.$releases ? '97%' : '100%')};
  }
`;
export const SwiperWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const SwiperReleaseTitleDiv = styled.div`
  text-align: center;
  /* display: none; */
  opacity: 0;
  color: #444;
  transform: scale(0.3);
  transition: opacity 0.4s ease-in-out, transform 0.5s ease-in-out;
  margin-top: 1.5em;
  padding: 0.5em 1em;
  border: 1px solid #00000020;
  background-color: #ffffff90;

  border-radius: ${borderRadius};
  @media (max-width: 480px) {
    margin-top: 1em;
  }
`;
export const SwiperReleaseTitle = styled.h4`
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
type SwiperProps = {
  children: React.ReactNode;
};
export const Swiper = ({ children }: SwiperProps) => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    register();
    const params: SwiperOptions = {
      modules: [Pagination, Autoplay, EffectFade],
      // injectStyles: [
      //   `swiper-container::part(bullet-active) {
      //     background-color: red;
      //   }
      //   `,
      // ],
      injectStylesUrls: [
        './pagination-element.min.css',
        './autoplay-element.min.css',
        './effect-fade-element.min.css',
      ],
    };
    if (swiperElRef.current) {
      Object.assign(swiperElRef.current, params);
      //@ts-ignore
      swiperElRef.current.initialize();
    }
  }, []);

  return (
    <StyledSwiperContainer>
      <swiper-container
        ref={swiperElRef}
        pagination={true}
        autoplay={true}
        effect="fade"
        // fade-effect-cross-fade="true"
        autoplay-delay="3000"
        init={false}
      >
        {children}
      </swiper-container>
    </StyledSwiperContainer>
  );
};

type ReleasesSwiperProps = {
  children: React.ReactNode;
  [key: string]: any;
};
export const ReleasesSwiper = ({ children, ...rest }: ReleasesSwiperProps) => {
  const swiperElRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    register();
    const params = {
      modules: [EffectCoverflow, Navigation],
      injectStyles: [
        `.swiper-button-next,
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
        `,
      ],
      injectStylesUrls: [
        './effect-coverflow-element.min.css',
        './navigation-element.min.css',
      ],
      breakpoints: {
        751: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
    };
    if (swiperElRef.current) {
      Object.assign(swiperElRef.current, params);
      //@ts-ignore
      swiperElRef.current?.initialize();
    }
  }, []);

  return (
    <StyledSwiperContainer {...rest}>
      <swiper-container
        ref={swiperElRef}
        navigation={true}
        centered-slides="true"
        loop={true}
        coverflow-effect-slide-shadows="false"
        effect="coverflow"
        grab-cursor="true"
        init={false}
      >
        {children}
      </swiper-container>
    </StyledSwiperContainer>
  );
};

type SwiperSlideProps = {
  children: React.ReactNode;
};
export const SwiperSlide = ({ children, ...rest }: SwiperSlideProps) => {
  return <swiper-slide {...rest}>{children}</swiper-slide>;
};
