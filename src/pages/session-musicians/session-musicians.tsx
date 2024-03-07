import { useSelector } from 'react-redux';
import { selectLanguage } from '../../redusers/langSlice';

import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';

import {
  Container,
  HeadContent,
  Section,
  SectionDesc,
  SectionImage,
  SectionImageWrapper,
  SectionTitle,
  Heading,
  Wrapper,
  Page,
} from '../../layout/main_styles';

import {
  Avatar,
  Card,
  CardContent,
  CardTitle,
  MusiciansContainer,
  SkillItem,
  Skills,
} from './session-musicians.styled';

import musiciansImg from '../../assets/images/sessions.jpg';

import textsSessionMusicians from './session-musicians.texts';

const SessionMusicians = () => {
  const language = useSelector(selectLanguage);
  const isMobile = useMediaQuery('(max-width:736px)');
  return (
    <Page>
      <Section $page>
        <SectionImageWrapper $light>
          <SectionImage $mixing src={musiciansImg} alt="editing" />
          <HeadContent>
            <Heading $page>
              <SectionTitle>
                {textsSessionMusicians[language].head}
              </SectionTitle>
            </Heading>
          </HeadContent>
        </SectionImageWrapper>
        <Wrapper>
          <Container>
            <SectionTitle $page $dark>
              {textsSessionMusicians[language].title}
            </SectionTitle>
            {textsSessionMusicians[language].paragraph.map((text, index) => {
              return (
                <SectionDesc key={index} $paragraph $dark>
                  {text}
                </SectionDesc>
              );
            })}
            <MusiciansContainer>
              {textsSessionMusicians[language].musicians.map(
                (musician, index) => {
                  return (
                    <Card key={index}>
                      <Avatar src={musician.img} alt={musician.name} />
                      <CardContent>
                        <CardTitle>{musician.name}</CardTitle>
                        <Skills>
                          {musician.skills.map((skill, index) => {
                            return <SkillItem key={index}>{skill}</SkillItem>;
                          })}
                        </Skills>
                        <Button
                          color="error"
                          variant="contained"
                          fullWidth={isMobile ? true : false}
                          href={musician.link}
                        >
                          {language === 'ru' ? 'Видео' : 'Video'}
                        </Button>
                      </CardContent>
                    </Card>
                  );
                }
              )}
            </MusiciansContainer>
          </Container>
        </Wrapper>
      </Section>
    </Page>
  );
};

export default SessionMusicians;
