import { useSelector } from 'react-redux';
import { selectLanguage } from '../../redusers/langSlice';

import * as L from '../../layout/main_styles'; // L - layout
import { ReleasesSwiper, Swiper, SwiperSlide } from './carousel/carousel';
import { LogoWrapp } from './home.styled';
import { Img, Title, TitleWrapp, Wrapp } from './carousel/carousel.styled';
import Logo from './logo';
import Player from './player';

import { releases, walpapers } from './data';
import { texts } from './texts';

const Home = () => {
  const language = useSelector(selectLanguage);

  return (
    <L.Page>
      <Swiper>
        {walpapers.map((walpaper) => {
          return (
            <SwiperSlide key={walpaper.id}>
              <Img $src={walpaper.src} />
            </SwiperSlide>
          );
        })}

        <LogoWrapp>
          <Logo />
          <L.MainDesc>{texts[language].mainDesc}</L.MainDesc>
        </LogoWrapp>
      </Swiper>
      <L.Section>
        <L.Wrapper>
          <L.Container>
            <L.Heading>
              <L.SectionTitle>{texts[language].titleFirst}</L.SectionTitle>
              <L.SectionDesc>{texts[language].description}</L.SectionDesc>
            </L.Heading>
          </L.Container>
        </L.Wrapper>
      </L.Section>
      <L.Section $releases $filterGray>
        <L.Wrapper>
          <L.Container>
            <L.Heading>
              <L.SectionTitle $dark>
                {texts[language].titleReleases}
              </L.SectionTitle>
            </L.Heading>
            <Wrapp>
              <ReleasesSwiper $releases>
                {releases.map((release) => {
                  const { id, author, release: song, img: src } = release;
                  return (
                    <SwiperSlide key={id}>
                      <Img $releases $src={src} />
                      <TitleWrapp>
                        <Title>
                          {author} - {song}
                        </Title>
                      </TitleWrapp>
                    </SwiperSlide>
                  );
                })}
              </ReleasesSwiper>
            </Wrapp>
            <Player />
          </L.Container>
        </L.Wrapper>
      </L.Section>
    </L.Page>
  );
};
export default Home;
