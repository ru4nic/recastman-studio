import styled from 'styled-components';

import theme from '../../../theme';

export const Title = styled.h1`
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
export const RedCircle = styled.span`
  display: block;
  background-color: red;
  color: white;
  border-radius: 50%;
  line-height: 1.7;
  border: 0.08em red solid;
  height: 1.7em;
`;
export const GreyText = styled.span`
  display: inline;
  background-color: ${theme.colors.primaryText};
  line-height: 1;
  margin-left: -1em;
  padding-left: 1em;
  z-index: -1;
`;
export const Desc = styled.span`
  background-color: transparent;
  font-size: 0.5em;
  letter-spacing: 0.8em;
  color: ${theme.colors.primaryText};
  position: absolute;
  bottom: 0;
  right: -0.5em;
  font-weight: 300;
`;
