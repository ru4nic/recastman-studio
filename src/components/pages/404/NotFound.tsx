import {
  Container,
  Section,
  SectionDesc,
  SectionTitle,
} from '../../layout/main_styles';

const NotFound = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>Sorry, Prage Not Found</SectionTitle>
        <SectionDesc>The page you requested not be found</SectionDesc>
      </Container>
    </Section>
  );
};

export default NotFound;
