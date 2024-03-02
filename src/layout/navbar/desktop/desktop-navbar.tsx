import { AppBar, Container, Toolbar } from '@mui/material';
import { MouseEvent, ChangeEvent } from 'react';
import LogoImg from '../../../components/logo-img';
import BasicMenu from '../basic-menu';
import HideOnScroll from '../hide-on-scroll';
import logo from '../../../assets/images/recastman_logo.png';

interface DesktopNavbarProps {
  anchorEl: null | HTMLElement;
  checked: boolean;
  handleMenuOpen: (event: MouseEvent<HTMLElement>) => void;
  handleMenuClose: () => void;
  toggleSwitch: (event: ChangeEvent<HTMLInputElement>) => void;
  ruLanguage: boolean;
  enLanguage: boolean;
  open: boolean;
}
const DesktopNavbar = ({
  anchorEl,
  checked,
  handleMenuOpen,
  handleMenuClose,
  toggleSwitch,
  open,
  ruLanguage,
  enLanguage,
}: DesktopNavbarProps) => {
  return (
    <HideOnScroll>
      <AppBar color="secondary">
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <LogoImg $component="navbar" src={logo} alt="recastman_logo" />
            <BasicMenu
              anchorEl={anchorEl}
              open={open}
              checked={checked}
              ruLanguage={ruLanguage}
              enLanguage={enLanguage}
              handleMenuOpen={handleMenuOpen}
              handleMenuClose={handleMenuClose}
              toggleSwitch={toggleSwitch}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default DesktopNavbar;
