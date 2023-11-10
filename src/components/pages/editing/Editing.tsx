import {
  Section,
  Container,
  Heading,
  SectionTitle,
  SectionDesc,
  SectionImageWrapper,
  SectionImage,
  Wrapper,
  HeadContent,
  Page,
} from '../../layout/main_styles';
import styled from 'styled-components';

// import { cardsPrices } from '../home/data';
// import Card from '../../UI/Card';
import editingImg from '../../../assets/images/editing2.jpg';
import editingImg2 from '../../../assets/images/editing.jpg';
import editing3 from '../../../assets/images/editing3.jpg';
import editingImg3 from '../../../assets/images/editing4.jpg';
import { texts } from './content';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import { Fragment } from 'react';
import { borderRadius, darkText } from '../../layout/Vars';
import PageBottom from '../../layout/PageBottom';
import { pageBottomData } from '../../data/main_data';
import ImageGallery from '../recording/ImageGallery';

const List = styled.ul`
  list-style-position: inside;
  /* padding: 0; */
  margin: 3.5rem 0;
  color: ${darkText};
  @media (max-width: 736px) {
    padding: 0;
  }
`;
export const Image = styled.img`
  width: 50vmin;
  /* height: 25vmin; */

  margin: 5rem auto;
  object-fit: cover;
  object-position: center;
  display: block;
  filter: grayscale(0.5);
  /* border-radius: ${borderRadius}; */
`;

const Editing = () => {
  const language = useSelector((state: RootState) => state.language.value);
  // const { editing } = cardsPrices;

  return (
    <Page>
      <Section $page>
        <SectionImageWrapper $recording>
          <SectionImage $recording src={editingImg} alt="editing" />
          <HeadContent>
            <Heading $page>
              <SectionTitle>{texts[language].head}</SectionTitle>
              {/* <SectionDesc>{texts[language].description}</SectionDesc> */}
            </Heading>
          </HeadContent>
        </SectionImageWrapper>
        <Wrapper>
          <Container>
            <SectionTitle $dark $page>
              {texts[language].title}
            </SectionTitle>

            {texts[language].paragraph.map((text, index) => {
              if (index === 1) {
                return (
                  <Fragment key={index}>
                    <List>
                      {texts[language].operations.item.map((i, index) => {
                        return (
                          <SectionDesc key={index} $list $dark $paragraph>
                            {i}
                          </SectionDesc>
                        );
                      })}
                    </List>
                    <SectionDesc $paragraph $dark>
                      {text}
                    </SectionDesc>
                  </Fragment>
                );
              }
              return (
                <SectionDesc $paragraph $dark key={index}>
                  {text}
                </SectionDesc>
              );
            })}
            {/* <Image src={editingImg2} /> */}
            <ImageGallery
              img1={editingImg2}
              img2={editing3}
              imgLarge={editingImg3}
            />
            <PageBottom
              leftButton={pageBottomData[language].sessionMusicians}
              rightButton={pageBottomData[language].videoClip}
            />
          </Container>
        </Wrapper>
      </Section>
    </Page>
  );
};

export default Editing;
