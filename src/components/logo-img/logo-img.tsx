import styled from 'styled-components';

const LogoImg = styled.img<{ $component: 'navbar' | 'footer' }>`
  max-width: ${(props) => (props.$component === 'navbar' ? '7em' : '16.75em')};
  /* width: ${(props) => props.$component === 'footer' && '16.75rem'}; */
  object-fit: ${(props) => props.$component === 'footer' && 'contain'};
  @media (max-width: 1000px) {
    max-width: ${(props) => props.$component === 'footer' && '10em'};
  }
  @media (max-width: 600px) {
    max-width: ${(props) => props.$component === 'footer' && '8em'};
  }
`;

export default LogoImg;
