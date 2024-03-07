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

import recordingImg from '../../assets/images/editing_bknd.jpg';

import { HeadContent } from '../../layout/main_styles';
import { useSelector } from 'react-redux';
import textsRecording from './recording.texts';
import { selectLanguage } from '../../redusers/langSlice';

const Recording = () => {
  const language = useSelector(selectLanguage);
  return (
    <Page>
      <Section $page>
        <SectionImageWrapper $recording>
          <SectionImage $recording src={recordingImg} alt="recording" />
          <HeadContent>
            <Heading $page>
              <SectionTitle>{textsRecording[language].head}</SectionTitle>
            </Heading>
          </HeadContent>
        </SectionImageWrapper>
        <Wrapper>
          <Container>
            <SectionTitle $page $dark>
              {textsRecording[language].title}
            </SectionTitle>
            {textsRecording[language].paragraph.map((text, index) => {
              return (
                <SectionDesc key={index} $paragraph $dark>
                  {text}
                </SectionDesc>
              );
            })}
            <Button
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

export default Recording;
