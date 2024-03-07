import { MouseEvent, ChangeEvent } from 'react';

import { styled } from '@mui/material/styles';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectLanguage } from '../../redusers/langSlice';

import { FaAngleDown } from 'react-icons/fa6';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';

import textsNav from './navbar.texts';
import { links } from '../../data/links';

const StyledIcon = styled(FaAngleDown)`
  height: 0.6em;
  width: 0.6em;
  bottom: 0;
`;
const LeftMenu = styled('div')`
  display: flex;
`;

type BasicMenuProps = {
  handleMenuOpen: (event: MouseEvent<HTMLElement>) => void;
  handleMenuClose: (event: MouseEvent<HTMLElement>) => void;
  toggleSwitch: (event: ChangeEvent<HTMLInputElement>) => void;
  open: boolean;
  checked: boolean;
  ruLanguage: boolean;
  enLanguage: boolean;
  anchorEl: null | HTMLElement;
};
export default function BasicMenu({
  handleMenuOpen,
  handleMenuClose,
  toggleSwitch,
  open,
  checked,
  anchorEl,
  ruLanguage,
  enLanguage,
}: BasicMenuProps) {
  const language = useSelector(selectLanguage);

  const { mixing, recording, reamping, editing, sessionMusicians } =
    links.pages;

  const soundPages = [mixing, recording, reamping, editing, sessionMusicians];

  return (
    <LeftMenu>
      <Button
        variant="text"
        size="large"
        component={Link}
        to={links.pages.home}
      >
        {textsNav[language].firstButton}
      </Button>
      <Button
        variant="text"
        onClick={handleMenuOpen}
        size="large"
        endIcon={<StyledIcon />}
      >
        {textsNav[language].secondButton}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
        {soundPages.map((page, idx) => {
          return (
            <MenuItem
              key={idx}
              component={Link}
              to={page}
              onClick={handleMenuClose}
            >
              {textsNav[language].menu[idx]}
            </MenuItem>
          );
        })}
      </Menu>
      <Button
        component={Link}
        to={links.pages.video}
        variant="text"
        size="large"
      >
        {textsNav[language].thirdButton}
      </Button>
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
    </LeftMenu>
  );
}
