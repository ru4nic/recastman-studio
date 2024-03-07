import styled from 'styled-components';
import theme from '../../theme';

export const MusiciansContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 4rem 0 0 0;
  gap: 2rem;
  justify-content: center;
`;
export const Card = styled.div`
  display: flex;
  flex-basis: 50%;
  border-radius: ${theme.borderRadius};
  background-color: #fff;
  overflow: hidden;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: 1000px) {
    flex-basis: 100%;
  }
`;
export const CardTitle = styled.h3`
  font-size: 1.3em;
`;
export const CardContent = styled.section`
  padding: 1rem 2rem;
  color: ${theme.colors.darkText};
  flex-grow: 1;
`;
export const Skills = styled.ul`
  padding: 0;
  list-style-position: inside;
  line-height: 1.7;
`;
export const SkillItem = styled.li``;
export const Avatar = styled.img`
  width: 37%;
  object-position: top;
  object-fit: cover;
`;
