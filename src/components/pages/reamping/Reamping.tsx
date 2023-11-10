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
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Button from '@mui/material/Button';

//images
import reampingImg from '../../../assets/images/reamping_bknd.jpg';
import stacks from '../../../assets/images/stacks.jpg';
import soldano from '../../../assets/images/soldano.jpg';
import stack from '../../../assets/images/mesa_stack.jpg';

import { texts } from './content';
import { borderRadius, darkText } from '../../layout/Vars';
import ImageGallery from '../recording/ImageGallery';
import PageBottom from '../../layout/PageBottom';
import { pageBottomData } from '../../data/main_data';

const ListWrapp = styled.div`
  margin: 3rem 0;
`;
const List = styled.ul`
  list-style: none;
  margin: 0 0 2em 0;
  padding-left: 1.5rem;
  color: ${darkText};
  @media (max-width: 480px) {
    padding: 0;
  }
`;
const Item = styled.li`
  border-radius: ${borderRadius};
  padding: 0.4em 1em;
  background-color: transparent;
  &:first-child {
    font-weight: 700;
    margin-bottom: 0.5em;
    background-color: #00000015;
  }
`;
const Reamping = () => {
  // const { reamping } = cardsPrices;
  const selectLanguage = (state: RootState) => state.language.value;
  const language = useSelector(selectLanguage);

  return (
    <Page>
      <Section $page>
        <SectionImageWrapper $reamping $light>
          <SectionImage $recording src={reampingImg} alt="reamping" />
          <Heading $page>
            <SectionTitle>{texts[language].head}</SectionTitle>
            {/* <SectionDesc>{texts[language].description}</SectionDesc> */}
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
            <ImageGallery img1={soldano} img2={stacks} imgLarge={stack} />
            <PageBottom
              leftButton={pageBottomData[language].mixing}
              rightButton={pageBottomData[language].sessionMusicians}
            />
          </Container>
        </Wrapper>
      </Section>
    </Page>
  );
};

export default Reamping;
