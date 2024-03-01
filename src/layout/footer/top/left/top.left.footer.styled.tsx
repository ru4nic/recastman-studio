import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Column = styled.div`
  /* max-width: 16.75rem; */
`;

export const Desc = styled.p`
  font-size: 0.9rem;
  color: #999999;
  margin: 1rem 0 0 0;

  @media (max-width: 600px) {
    margin: 0.5rem 0 0 0;
  }
`;
export const TargetLink = styled(Link)`
  text-decoration: transparent;
  line-height: 1.55;
  color: #999999;
  font-size: 0.9rem;
  display: block;
  transition: color 0.3s ease-in-out, text-decoration 0.3s ease-in-out;
  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;
