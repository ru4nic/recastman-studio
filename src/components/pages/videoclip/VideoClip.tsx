import {
  Container,
  Heading,
  Section,
  SectionDesc,
  SectionImage,
  SectionImageWrapper,
  SectionTitle,
  Wrapper,
  Page,
} from '../../layout/main_styles';
import Previews from './Preview';
import { texts } from './content';
import { useSelector } from 'react-redux';
// import Card from '../../UI/Card';
// import { cardsPrices } from '../home/data';
import video from '../../../assets/images/video_bknd.jpg';
import { RootState } from '../../store/store';
import PageBottom from '../../layout/PageBottom';
import { pageBottomData } from '../../data/main_data';

const VideoClip = () => {
  // const { videoclip } = cardsPrices;
  const language = useSelector((state: RootState) => state.language.value);

  return (
    <Page>
      <Section $page>
        <SectionImageWrapper>
          <Heading $page>
            <SectionTitle>{texts[language].head}</SectionTitle>
            {/* <SectionDesc>{texts[language].description}</SectionDesc> */}
          </Heading>
          <SectionImage src={video} alt="video" />
        </SectionImageWrapper>
        <Wrapper>
          <Container>
            <SectionTitle $dark $page>
              {texts[language].title}
            </SectionTitle>

            <SectionDesc $paragraph $dark>
              {texts[language].paragraph}
            </SectionDesc>
            <SectionTitle $page $dark $h3>
              {texts[language].portfolio}
            </SectionTitle>
            <Previews />
            <PageBottom leftButton={pageBottomData[language].editing} />
          </Container>

          {/* <Wrapper>
            <Container>
              <Card
                title={videoclip[language].title}
                price={videoclip[language].price}
                features={videoclip[language].features}
              />
            </Container>
          </Wrapper> */}
        </Wrapper>
      </Section>
    </Page>
  );
};

export default VideoClip;
