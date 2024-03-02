import styled from 'styled-components';
import theme from '../../../theme';

export const Wrapp = styled.div`
  border-top: 1px solid rgba(233, 236, 239, 0.025);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
`;

export const Copyrights = styled.div`
  text-align: left;
  font-family: ${theme.font.openSans};
  color: rgba(227, 227, 227, 0.6);
  font-size: 0.9rem;
`;

export const SimpleLink = styled.a<{ $topMenu?: boolean }>`
  color: rgba(227, 227, 227, 0.6);
  transition: color 0.3s ease-in-out;
  display: ${(props) => props.$topMenu && 'block'};
  line-height: ${(props) => props.$topMenu && '1.55'};
  font-size: ${(props) => props.$topMenu && '0.9em'};
  text-decoration: ${(props) => props.$topMenu && 'transparent'};
  transition: text-decoration 0.2s ease-in-out;
  &:hover {
    text-decoration: ${(props) => props.$topMenu && 'underline'};
    color: rgba(227, 227, 227, 1);
  }
`;

export const Socials = styled.ul`
  cursor: default;
  list-style: none;
  display: flex;
  line-height: 1;
  padding: 0;
  gap: 3rem;
  position: relative;
  z-index: 4;
  @media (max-width: 1000px) {
    gap: 1em;
  }
  @media (max-width: 600px) {
    gap: 0.5em;
  }
`;

export const Item = styled.li`
  display: inline-block;
`;

export const IconLink = styled.a`
  font-size: 2.7rem;
  color: rgba(227, 227, 227, 0.6);
  transition: color 0.3s ease-in-out;
  &:hover {
    color: rgba(227, 227, 227, 1);
  }
  @media (max-width: 1000px) {
    font-size: 2em;
  }
`;
