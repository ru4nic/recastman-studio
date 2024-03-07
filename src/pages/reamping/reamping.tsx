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

import { useSelector } from 'react-redux';
import { selectLanguage } from '../../redusers/langSlice';

import Button from '@mui/material/Button';

import reampingImg from '../../assets/images/reamping_bknd.jpg';

import { texts } from './reamping.texts';

import { Item, List, ListWrapp } from './reamping.styled';

const Reamping = () => {
  const language = useSelector(selectLanguage);

  return (
    <Page>
      <Section $page>
        <SectionImageWrapper $reamping $light>
          <SectionImage $recording src={reampingImg} alt="reamping" />
          <Heading $page>
            <SectionTitle>{texts[language].head}</SectionTitle>
          </Heading>
        </SectionImageWrapper>
        <Wrapper>
          <Container>
            <SectionTitle $page $dark>
              {texts[language].title}
            </SectionTitle>
            <SectionDesc $paragraph $dark>
              {texts[language].paragraph}
            </SectionDesc>
            <ListWrapp>
              {texts[language].hardware.map((item, index) => {
                return (
                  <List key={index}>
                    <Item>{item.title}</Item>
                    {item.item.map((i, index) => {
                      return <Item key={index}>{i}</Item>;
                    })}
                  </List>
                );
              })}
            </ListWrapp>
            <Button
              variant="contained"
              color="secondary"
              href="./rekomendacii_k_ishodnikam_metalstudio.pdf"
              download="./rekomendacii_k_ishodnikam_metalstudio.pdf"
              size="large"
              sx={{
                margin: '6rem auto',
                display: 'block',
                width: 'fit-content',
              }}
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

export default Reamping;
