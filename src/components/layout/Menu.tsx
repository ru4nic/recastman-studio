import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { services } from '../pages/home/data';
import { FaAngleDown } from 'react-icons/fa6';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { textsNav } from './content';
import { RootState } from '../store/store';

const StyledIcon = styled(FaAngleDown)`
  height: 0.6em;
  width: 0.6em;
  bottom: 0;
`;
const LeftMenu = styled('div')`
  display: flex;
`;

type BasicMenuProps = {
  handleMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  handleMenuClose: (event: React.MouseEvent<HTMLElement>) => void;
  toggleSwitch: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
  const language = useSelector((state: RootState) => state.language.value);

  // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  // const open = Boolean(anchorEl);

  // const [checked, setChecked] = useState(language !== 'ru');
  // const ruLanguage = language === 'ru';
  // const enLanguage = language === 'en';

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const newLanguage = event.target.checked ? 'en' : 'ru';
  //   setChecked(event.target.checked);
  //   dispatch(newLanguage === 'en' ? en() : ru());
  // };
  // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };//заменить
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };//заменить

  return (
    <LeftMenu>
      <Button
        variant="text"
        size="large"
        component={Link}
        to="/recastman-studio/"
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
        {services.map((service) => {
          if (service.id === 116) {
            return;
          }
          return (
            <MenuItem
              component={Link}
              to={service.link}
              key={service.id}
              onClick={handleMenuClose}
            >
              {service.title[language]}
            </MenuItem>
          );
        })}
      </Menu>
      <Button
        component={Link}
        to="/recastman-studio/video-clip"
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
