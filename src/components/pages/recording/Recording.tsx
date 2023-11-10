import {
  Section,
  SectionTitle,
  SectionDesc,
  SectionImageWrapper,
  SectionImage,
  Wrapper,
  Container,
  Heading,
  Page,
} from '../../layout/main_styles';
import Button from '@mui/material/Button';

// import { cardsPrices } from '../home/data';
import recordingImg from '../../../assets/images/editing_bknd.jpg';
import vocalist1 from '../../../assets/images/vocalist1.jpg';
import micros from '../../../assets/images/micros.jpg';
import vocalist from '../../../assets/images/recording2.jpg';

import { HeadContent } from '../../layout/main_styles';
import { useSelector } from 'react-redux';
import { texts } from './content';
import ImageGallery from './ImageGallery';
import { RootState } from '../../store/store';
import PageBottom from '../../layout/PageBottom';
import { pageBottomData } from '../../data/main_data';

const Recording = () => {
  const language = useSelector((state: RootState) => state.language.value);
  return (
    <Page>
      <Section $page>
        <SectionImageWrapper $recording>
          <SectionImage $recording src={recordingImg} alt="recording" />
          <HeadContent>
            <Heading $page>
              <SectionTitle>{texts[language].head}</SectionTitle>
              {/* <SectionDesc>{texts[language].description}</SectionDesc> */}
            </Heading>
          </HeadContent>
        </SectionImageWrapper>
        <Wrapper>
          <Container>
            <SectionTitle $page $dark>
              {texts[language].title}
            </SectionTitle>
            {texts[language].paragraph.map((text, index) => {
              return (
                <SectionDesc key={index} $paragraph $dark>
                  {text}
                </SectionDesc>
              );
            })}
            <Button
              // component="a"
              variant="contained"
              color="secondary"
              href="./rekomendacii_k_ishodnikam_metalstudio.pdf"
              size="large"
              sx={{
                margin: '6rem auto',
                display: 'block',
                width: 'fit-content',
              }}
              download="/rekomendacii_k_ishodnikam_metalstudio.pdf"
            >
              {language === 'ru'
                ? 'Требования к исходникам'
                : 'Source requirements'}
            </Button>
            <ImageGallery img1={vocalist} img2={vocalist1} imgLarge={micros} />
            <PageBottom
              leftButton={pageBottomData[language].home}
              rightButton={pageBottomData[language].mixing}
            />
          </Container>
          {/* <Wrapper>
            <Container>
              <Card
                title={recording[language].title}
                price={recording[language].price}
                features={recording[language].features}
              />
            </Container>
          </Wrapper> */}
        </Wrapper>
        {/* <NavBottom recording /> */}
      </Section>
    </Page>
  );
};

export default Recording;
