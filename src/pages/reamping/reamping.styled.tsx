import styled from 'styled-components';
import theme from '../../theme';

export const ListWrapp = styled.div`
  margin: 3rem 0;
`;
export const List = styled.ul`
  list-style: none;
  margin: 0 0 2em 0;
  padding-left: 1.5rem;
  color: ${theme.colors.darkText};
  @media (max-width: 480px) {
    padding: 0;
  }
`;
export const Item = styled.li`
  border-radius: ${theme.borderRadius};
  padding: 0.4em 1em;
  background-color: transparent;
  &:first-child {
    font-weight: 700;
    margin-bottom: 0.5em;
    background-color: #00000015;
  }
`;
