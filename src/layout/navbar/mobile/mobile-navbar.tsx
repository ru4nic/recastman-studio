import { MouseEvent, ChangeEvent } from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { links } from '../../../data/links';

interface MobileNavbarProps {
  anchorEl: null | HTMLElement;
  checked: boolean;
  handleMenuOpen: (event: MouseEvent<HTMLElement>) => void;
  handleMenuClose: () => void;
  toggleSwitch: (event: ChangeEvent<HTMLInputElement>) => void;
  ruLanguage: boolean;
  enLanguage: boolean;
  open: boolean;
}
const MobileNavbar = ({
  anchorEl,
  checked,
  handleMenuOpen,
  handleMenuClose,
  toggleSwitch,
  open,
  ruLanguage,
  enLanguage,
}: MobileNavbarProps) => {
  return (
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
            <MenuItem component={Link} to={links.pages.home} dense divider>
              Home
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MobileNavbar;
