import { styled } from 'styled-components';

import StyledButton from '../../UI/Button';
import { services } from './data';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { borderRadius } from '../../layout/Vars';

const StyledSpotlight = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 5rem;
  column-gap: 2rem;

  @media (max-width: 1300px) {
    row-gap: 4rem;
  }
  @media (max-width: 1000px) {
    row-gap: 3rem;
  }
  /* @media (max-width: 600px) {
    row-gap: 5rem;
  } */
  /* @media (max-width: 480px) {
    row-gap: 3rem;
  } */
`;
const paddingCard = '1.5em';
const marginImg = '2em';
const CardImage = styled.img`
  object-fit: cover;
  aspect-ratio: 16/9;
  width: 100%;
  display: block;
  border: none;
  border-radius: ${borderRadius};
  margin: calc(-${marginImg} - ${paddingCard}) 0 ${marginImg};
  box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
    rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
`;
const CardContent = styled.div`
  margin-top: ${marginImg};
  padding: ${paddingCard};
  border-radius: ${borderRadius};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02),
    0 2px 4px rgba(0, 0, 0, 0.02);
  background: #e7e7e7;
  flex-basis: calc(100% / 3);
  min-width: 0;
  flex-shrink: 0;
  flex-grow: 1;
  ${CardImage} {
  }
  @media (max-width: 600px) {
    flex-basis: 100%;
    flex-grow: 0;
    flex-shrink: 1;
    padding: 0.8em;
  }
`;
const CardTitle = styled.h3`
  font-size: 1.3em;
  color: #454545;
  line-height: 1.5;
  margin: 0 0 0.5em 0;
  font-weight: 700;
  @media (max-width: 600px) {
    text-align: center;
  }
`;
const CardDesc = styled.p`
  color: #555555;
  margin: 0 0 2rem 0;
  padding: 0.1em 0;
  font-size: 1em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media (max-width: 600px) {
    text-align: center;
  }
`;

const Spotlight = () => {
  const language = useSelector((state: RootState) => state.language.value);
  return (
    <StyledSpotlight>
      {services.map((service) => (
        <CardContent key={service.id}>
          <CardImage src={service.src} alt={service.title[language]} />
          <CardTitle>{service.title[language]}</CardTitle>
          <CardDesc>{service.desc[language]}</CardDesc>
          <StyledButton link={service.link}>
            {language === 'en' ? 'Learn more' : 'Подробнее'}
          </StyledButton>
        </CardContent>
      ))}
    </StyledSpotlight>
  );
};
export default Spotlight;
