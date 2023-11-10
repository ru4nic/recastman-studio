import {
  Section,
  Wrapper,
  Container,
  Heading,
  SectionTitle,
  SectionDesc,
  SectionImageWrapper,
  SectionImage,
  HeadContent,
  Page,
} from '../../layout/main_styles';
import mixing from '../../../assets/images/mixing_bknd.jpg';
import mixingImg from '../../../assets/images/editing2.jpg';
import drummer from '../../../assets/images/drummer1.jpg';
import stuff from '../../../assets/images/stuff.jpg';
// import { cardsPrices } from '../home/data';
// import Card from '../../UI/Card';
import { texts } from './content';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import PageBottom from '../../layout/PageBottom';

import { pageBottomData } from '../../data/main_data';
import ImageGallery from '../recording/ImageGallery';
import Button from '@mui/material/Button';

const Mixing = () => {
  // const { mixingAndMastering } = cardsPrices;
  const language = useSelector((state: RootState) => state.language.value);
  return (
    <Page>
      <Section $page>
        <SectionImageWrapper $light>
          <SectionImage $mixing src={mixing} alt="editing" />
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
              {texts[language].titleMixing}
            </SectionTitle>
            {texts[language].paragraphMixing.map((text, index) => {
              return (
                <SectionDesc key={index} $paragraph $dark>
                  {text}
                </SectionDesc>
              );
            })}

            <SectionTitle $page $dark>
              {texts[language].titleMastering}
            </SectionTitle>
            <SectionDesc $paragraph $dark>
              {texts[language].paragraphMastering}
            </SectionDesc>
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
            <ImageGallery img1={mixingImg} img2={stuff} imgLarge={drummer} />
            <PageBottom
              leftButton={pageBottomData[language].recording}
              rightButton={pageBottomData[language].reamping}
            />
          </Container>
          {/* <Wrapper>
            <Container>
              <Card
                title={mixingAndMastering[language].title}
                price={mixingAndMastering[language].price}
                features={mixingAndMastering[language].features}
              />
            </Container>
          </Wrapper> */}
        </Wrapper>
      </Section>
    </Page>
  );
};

export default Mixing;
