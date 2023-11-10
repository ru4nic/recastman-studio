import { styled } from 'styled-components';

import blackBknd from '../../assets/images/blackmamba.webp';
import { Container } from './main_styles';
import { FaTelegram, FaVk, FaYoutube } from 'react-icons/fa6';
import { fontFamily } from './Vars';
import logo from '../../assets/images/recastman_logo.png';
import { Link } from 'react-router-dom';
import { services } from '../pages/home/data';
import { useSelector } from 'react-redux';
import { textsFooter } from './content';
import { RootState } from '../store/store';

const FooterWrapper = styled.div`
  min-height: 25rem;
  position: relative;
  z-index: 0;
  /* @media (max-width: 1000px) {
    min-height: 20rem;
  } */
  @media (max-width: 600px) {
    min-height: 30rem;
  }
`;
const FixedEl = styled.div`
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
  /* @media (max-width: 1000px) {
    min-height: 20rem;
  } */
  @media (max-width: 600px) {
    min-height: 30rem;
  }
`;
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: ${fontFamily};
  padding: 3rem 0;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 2em;
  }
`;
const LeftMenu = styled.div`
  /* max-width: 16.75rem; */
`;
const Logo = styled.img`
  width: 16.75rem;
  object-fit: contain;
  @media (max-width: 1000px) {
    max-width: 10rem;
  }
  @media (max-width: 600px) {
    max-width: 8em;
  }
`;
const Desc = styled.p`
  font-size: 0.9rem;
  color: #999999;
  margin: 1rem 0 0 0;
  /* @media (max-width: 1000px) {
    max-width: 14rem;
  } */
  @media (max-width: 600px) {
    margin: 0.5rem 0 0 0;
  }
`;
const RightMenu = styled.div`
  display: flex;
  gap: 3.7rem;
  @media (max-width: 600px) {
    justify-content: space-between;
  }
`;

const List = styled.div``;
const ListName = styled.div`
  font-size: 1.1rem;
  color: #fff;
  font-weight: 700;
  margin-bottom: 0.5rem;
  line-height: 1;
`;
const TargetLink = styled(Link)`
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
const BottomMenu = styled.div`
  border-top: 1px solid rgba(233, 236, 239, 0.025);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
`;
const IconsList = styled.ul`
  cursor: default;
  list-style: none;
  /* margin-bottom: 0;
  padding-left: 0; */
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
const IconItem = styled.li`
  display: inline-block;
  /* padding: 0 3rem 3rem 0; */
`;
const IconLink = styled.a`
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
const Copyrights = styled.div`
  text-align: left;
  font-family: ${fontFamily};
  color: rgba(227, 227, 227, 0.6);
  font-size: 0.9rem;
`;
const SimpleLink = styled.a<{ $topMenu?: boolean }>`
  /* text-transform: uppercase; */
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
const socialsLinks = [
  { href: 'https://vk.com/recastman_studio', icon: <FaVk /> },
  { href: 'https://t.me/Recastman', icon: <FaTelegram /> },
  { href: 'https://www.youtube.com/@recastmanstudio4824', icon: <FaYoutube /> },
];
const partnersLinks = [
  {
    href: 'http://white_studio.tilda.ws/',
    name: 'White Room',
  },
  { href: 'https://dedovdrums.ru/', name: 'Dedov Drums' },
];
const Footer = () => {
  const language = useSelector((state: RootState) => state.language.value);
  return (
    <>
      <FooterWrapper id="footer" />
      <FixedEl>
        {/* <Wrapper $footer> */}
        <Container>
          <Menu>
            <LeftMenu>
              <TargetLink to="/recastman-studio/">
                <Logo src={logo} alt="recastman_logo" />
              </TargetLink>
              <Desc>{textsFooter[language].description}</Desc>
            </LeftMenu>
            <RightMenu>
              <List>
                <ListName>{textsFooter[language].services}</ListName>
                {services.map((service) => (
                  <TargetLink key={service.id} to={service.link}>
                    {service.title[language]}
                  </TargetLink>
                ))}
              </List>
              <List>
                <ListName>{textsFooter[language].partners}</ListName>
                {partnersLinks.map((link) => (
                  <SimpleLink $topMenu key={link.href} href={link.href}>
                    {link.name}
                  </SimpleLink>
                ))}
              </List>
            </RightMenu>
          </Menu>
          <BottomMenu>
            <Copyrights>
              {textsFooter[language].copyright}
              <SimpleLink href="jfds">Ru4nic</SimpleLink>
            </Copyrights>
            <IconsList>
              {socialsLinks.map((link) => {
                return (
                  <IconItem key={link.href}>
                    <IconLink href={link.href} target="_blank" rel="norefferer">
                      {link.icon}
                    </IconLink>
                  </IconItem>
                );
              })}
            </IconsList>
          </BottomMenu>
        </Container>
        {/* </Wrapper> */}
      </FixedEl>
    </>
  );
};

export default Footer;
