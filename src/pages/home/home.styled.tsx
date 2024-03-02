import styled from 'styled-components';

export const LogoWrapp = styled.div`
  position: absolute;
  color: #fff;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Open Sans';
  font-size: 2.5rem;
  background-color: #0000004d;
  border-radius: 3.2em;
  box-shadow: 0 0 2em 0.5em #0000007a;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
  @media (max-width: 450px) {
    font-size: 1.7rem;
  }
`;
