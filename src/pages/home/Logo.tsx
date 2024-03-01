import { styled } from 'styled-components';
import { colorText } from '../../layout/vars';

export const LogoInner = styled.div`
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

const Title = styled.h1`
  font-weight: 300;
  text-transform: uppercase;
  height: 2.3em;
  display: flex;
  align-items: center;
  position: relative;
  color: black;
  letter-spacing: 0.05em;
  margin: 0.25em 0;
`;
const RedLogo = styled.span`
  display: block;
  background-color: red;
  color: white;
  border-radius: 50%;
  line-height: 1.7;
  border: 0.08em red solid;
  height: 1.7em;
`;
const GreyLogo = styled.span`
  display: inline;
  background-color: ${colorText};
  line-height: 1;
  margin-left: -1em;
  padding-left: 1em;
  z-index: -1;
`;
const DescLogo = styled.span`
  background-color: transparent;
  font-size: 0.5em;
  letter-spacing: 0.8em;
  color: ${colorText};
  position: absolute;
  bottom: 0;
  right: -0.5em;
  font-weight: 300;
`;

const Logo = () => {
  return (
    <Title>
      <RedLogo>Rec</RedLogo>
      <GreyLogo>astman</GreyLogo>
      <DescLogo>Studio</DescLogo>
    </Title>
  );
};

export default Logo;
