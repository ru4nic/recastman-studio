import { useEffect, useRef } from 'react';

import { register } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import {
  Autoplay,
  EffectCoverflow,
  EffectFade,
  Navigation,
  Pagination,
} from 'swiper/modules';

import { Container, injectStyles } from './carousel.styled';

type SwiperProps = {
  children: React.ReactNode;
};
export const Swiper = ({ children }: SwiperProps) => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    register();
    const params: SwiperOptions = {
      modules: [Pagination, Autoplay, EffectFade],
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
    <Container>
      <swiper-container
        ref={swiperElRef}
        pagination={true}
        autoplay={true}
        effect="fade"
        autoplay-delay="3000"
        init={false}
      >
        {children}
      </swiper-container>
    </Container>
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
      injectStyles: [injectStyles],
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
    <Container {...rest}>
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
    </Container>
  );
};

type SwiperSlideProps = {
  children: React.ReactNode;
};
export const SwiperSlide = ({ children, ...rest }: SwiperSlideProps) => {
  return <swiper-slide {...rest}>{children}</swiper-slide>;
};
