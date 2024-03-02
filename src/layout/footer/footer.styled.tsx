import styled from 'styled-components';

import blackBknd from '../../assets/images/blackmamba.webp';
import theme from '../../theme';

export const Wrapper = styled.div`
  min-height: 25rem;
  position: relative;
  z-index: 0;
  @media (max-width: 600px) {
    min-height: 30rem;
  }
`;
export const FixedDiv = styled.div`
  background: linear-gradient(
      180deg,
      rgba(23, 23, 23, 0.821),
      rgba(27, 30, 31, 0.766) 50%,
      rgba(19, 23, 26, 0.6)
    ),
    url(${blackBknd});
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  min-height: 25rem;

  @media (max-width: 600px) {
    min-height: 30rem;
  }
`;
export const TopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: ${theme.font.openSans};
  padding: 3rem 0;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 2em;
  }
`;
