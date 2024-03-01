/*
Components
*/

// import {
//   ReleasesSwiper,
//   StyledSwiperImage,
//   Swiper,
//   SwiperReleaseTitle,
//   SwiperReleaseTitleDiv,
//   SwiperSlide,
//   SwiperWrapper,
// } from '../../UI/SwiperComponents';

// import Logo from './Logo';
// import Spotlight from './Spotlight';
// import { SwiperWrapper } from '../../UI/SwiperComponents';
import {
  Section,
  SectionTitle,
  SectionDesc,
  // MainDesc,
  Container,
  Heading,
  Wrapper,
  Page,
} from '../../layout/main_styles';
// import { LogoInner } from './Logo';

// import { releases, walpapers } from './data';
import { useSelector } from 'react-redux';
import { texts } from './content';
import Player from './Player';
import { RootState } from '../../store/store';

const Home = () => {
  const language = useSelector((state: RootState) => state.language.value);
  return (
    <Page>
      {/* <Swiper>
        {walpapers.map((walpaper) => {
          return (
            <SwiperSlide key={walpaper.id}>
              <StyledSwiperImage $src={walpaper.src} />
            </SwiperSlide>
          );
        })}
        <LogoInner>
          <Logo />
          <MainDesc>{texts[language].mainDesc}</MainDesc>
        </LogoInner>
      </Swiper> */}
      <Section>
        <Wrapper>
          <Container>
            <Heading>
              <SectionTitle>{texts[language].titleFirst}</SectionTitle>
              <SectionDesc>{texts[language].description}</SectionDesc>
            </Heading>
          </Container>
          {/* <Container>
            <Spotlight />
          </Container> */}
        </Wrapper>
      </Section>
      <Section $releases $filterGray>
        <Wrapper>
          <Container>
            <Heading>
              <SectionTitle $dark>{texts[language].titleReleases}</SectionTitle>
            </Heading>
            {/* <SwiperWrapper>
              <ReleasesSwiper $releases>
                {releases.map((release) => {
                  const { id, author, release: song, img: src } = release;
                  return (
                    <SwiperSlide key={id}>
                      <StyledSwiperImage $releases $src={src} />
                      <SwiperReleaseTitleDiv>
                        <SwiperReleaseTitle>
                          {author} - {song}
                        </SwiperReleaseTitle>
                      </SwiperReleaseTitleDiv>
                    </SwiperSlide>
                  );
                })}
              </ReleasesSwiper>
            </SwiperWrapper> */}
            <Player />
          </Container>
        </Wrapper>
      </Section>
    </Page>
  );
};
export default Home;
