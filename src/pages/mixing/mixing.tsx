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
import mixing from '../../assets/images/mixing_bknd.jpg';

import { texts } from './texts';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import Button from '@mui/material/Button';

const Mixing = () => {
  const language = useSelector((state: RootState) => state.language.value);
  return (
    <Page>
      <Section $page>
        <SectionImageWrapper $light>
          <SectionImage $mixing src={mixing} alt="editing" />
          <HeadContent>
            <Heading $page>
              <SectionTitle>{texts[language].head}</SectionTitle>
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
          </Container>
        </Wrapper>
      </Section>
    </Page>
  );
};

export default Mixing;
