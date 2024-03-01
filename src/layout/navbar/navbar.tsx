import { useEffect, useState } from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useSelector, useDispatch } from 'react-redux';
import { en, ru } from '../../redusers/langSlice';

import AppBar from '@mui/material/AppBar';

import useMediaQuery from '@mui/material/useMediaQuery';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';

import BasicMenu from './Menu';
import logo from '../../assets/images/recastman_logo.png';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';

import { RootState } from '../../store/store';
import LogoImg from '../../components/logo';

type HideOnScrollProps = {
  children: React.ReactElement;
  window?: () => Window;
};
function HideOnScroll(props: HideOnScrollProps) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const language = useSelector((state: RootState) => state.language.value);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const ruLanguage = language === 'ru';
  const enLanguage = language === 'en';

  useEffect(() => {
    const initialLanguage = localStorage.getItem('language');
    if (initialLanguage === null) {
      return;
    }
    if (initialLanguage === 'ru') {
      setChecked(false);
      dispatch(ru());
    }
    if (initialLanguage === 'en') {
      setChecked(true);
      dispatch(en());
    }
  }, [dispatch]);

  const toggleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLanguage = event.target.checked ? 'en' : 'ru';
    setChecked(event.target.checked);
    dispatch(newLanguage === 'en' ? en() : ru());
    newLanguage === 'en'
      ? localStorage.setItem('language', 'en')
      : localStorage.setItem('language', 'ru');
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    //Закрытие меню
    setAnchorEl(null);
  };
  const mobileScreen = useMediaQuery('(max-width: 800px)');
  return (
    <>
      {mobileScreen ? (
        <AppBar color="secondary">
          <Container>
            <Toolbar
              disableGutters
              variant="dense"
              sx={{ justifyContent: 'space-between' }}
            >
              <Stack
                direction="row"
                spacing={0}
                alignItems="center"
                sx={{ marginLeft: '2rem' }}
              >
                <Typography
                  fontSize="0.9375rem"
                  fontWeight={500}
                  color={ruLanguage ? '' : 'primary'}
                  textTransform="uppercase"
                >
                  Ru
                </Typography>
                <Switch
                  checked={checked}
                  onChange={toggleSwitch}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#000',
                    },
                    '& .MuiSwitch-thumb': {
                      backgroundColor: '#fff',
                    },
                  }}
                />
                <Typography
                  fontSize="0.9375rem"
                  fontWeight={500}
                  textTransform="uppercase"
                  color={enLanguage ? '' : 'primary'}
                >
                  Eng
                </Typography>
              </Stack>
              <IconButton onClick={handleMenuOpen} color="inherit" size="large">
                <RxHamburgerMenu />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                variant="selectedMenu"
              >
                <MenuItem
                  component={Link}
                  to="/recastman-studio/"
                  dense
                  divider
                >
                  Home
                </MenuItem>
              </Menu>
            </Toolbar>
          </Container>
        </AppBar>
      ) : (
        //Desktop NavBar
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
      )}
    </>
  );
}
