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
import musiciansImg from '../../../assets/images/sessions.jpg';
// import { cardsPrices } from '../home/data';
// import Card from '../../UI/Card';
import { useSelector } from 'react-redux';
import { texts } from './content';
import { RootState } from '../../store/store';
import PageBottom from '../../layout/PageBottom';
import { pageBottomData } from '../../data/main_data';
import styled from 'styled-components';
import { borderRadius, darkText } from '../../layout/Vars';
import { Button, useMediaQuery } from '@mui/material';

const MusiciansContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 4rem 0 0 0;
  gap: 2rem;
  justify-content: center;
`;
const Card = styled.div`
  display: flex;
  flex-basis: 50%;
  border-radius: ${borderRadius};
  background-color: #fff;
  overflow: hidden;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: 1000px) {
    flex-basis: 100%;
  }
`;
const CardTitle = styled.h3`
  font-size: 1.3em;
`;
const CardContent = styled.section`
  padding: 1rem 2rem;
  color: ${darkText};
  flex-grow: 1;
`;
const Skills = styled.ul`
  padding: 0;
  list-style-position: inside;
  line-height: 1.7;
`;
const SkillItem = styled.li``;
const Avatar = styled.img`
  width: 37%;
  /* height: 50%; */
  object-position: top;
  object-fit: cover;
`;
const SessionMusicians = () => {
  // const { musicians } = cardsPrices;
  const language = useSelector((state: RootState) => state.language.value);
  const isMobile = useMediaQuery('(max-width:736px)');
  return (
    <Page>
      <Section $page>
        <SectionImageWrapper $light>
          <SectionImage $mixing src={musiciansImg} alt="editing" />
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
            <MusiciansContainer>
              {texts[language].musicians.map((musician, index) => {
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
              })}
            </MusiciansContainer>
            <PageBottom
              leftButton={pageBottomData[language].reamping}
              rightButton={pageBottomData[language].editing}
            />
          </Container>
          {/* <Wrapper>
            <Container>
              <Card
                title={musicians[language].title}
                price={musicians[language].price}
                features={musicians[language].features}
              />
            </Container>
          </Wrapper> */}
        </Wrapper>
      </Section>
    </Page>
  );
};

export default SessionMusicians;
