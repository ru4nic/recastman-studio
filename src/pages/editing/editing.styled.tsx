import styled from 'styled-components';
import theme from '../../theme';

export const List = styled.ul`
  list-style-position: inside;
  margin: 3.5rem 0;
  color: ${theme.colors.darkText};
  @media (max-width: 736px) {
    padding: 0;
  }
`;
export const Image = styled.img`
  width: 50vmin;
  margin: 5rem auto;
  object-fit: cover;
  object-position: center;
  display: block;
  filter: grayscale(0.5);
`;
