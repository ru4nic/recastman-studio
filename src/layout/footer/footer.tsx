import { Container } from '../main_styles';

import TopLeftFooter from './top/left';
import TopRightFooter from './top/right';
import BottomMenu from './bottom';
import { FixedDiv, TopMenu, Wrapper } from './footer.styled';

const Footer = () => {
  return (
    <>
      <Wrapper id="footer" />
      <FixedDiv>
        <Container>
          <TopMenu>
            <TopLeftFooter />
            <TopRightFooter />
          </TopMenu>
          <BottomMenu />
        </Container>
      </FixedDiv>
    </>
  );
};

export default Footer;
