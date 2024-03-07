import { Fragment } from 'react';

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

import editingImg from '../../assets/images/editing2.jpg';
import textsEditing from './editing.texts';

import { useSelector } from 'react-redux';
import { selectLanguage } from '../../redusers/langSlice';

import { List } from './editing.styled';

const Editing = () => {
  const language = useSelector(selectLanguage);

  return (
    <Page>
      <Section $page>
        <SectionImageWrapper $recording>
          <SectionImage $recording src={editingImg} alt="editing" />
          <HeadContent>
            <Heading $page>
              <SectionTitle>{textsEditing[language].head}</SectionTitle>
            </Heading>
          </HeadContent>
        </SectionImageWrapper>
        <Wrapper>
          <Container>
            <SectionTitle $dark $page>
              {textsEditing[language].title}
            </SectionTitle>

            {textsEditing[language].paragraph.map((text, index) => {
              if (index === 1) {
                return (
                  <Fragment key={index}>
                    <List>
                      {textsEditing[language].operations.item.map(
                        (i, index) => {
                          return (
                            <SectionDesc key={index} $list $dark $paragraph>
                              {i}
                            </SectionDesc>
                          );
                        }
                      )}
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
          </Container>
        </Wrapper>
      </Section>
    </Page>
  );
};

export default Editing;
