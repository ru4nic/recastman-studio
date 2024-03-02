import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { en, ru, selectLanguage } from '../../redusers/langSlice';

import useMediaQuery from '@mui/material/useMediaQuery';

import DesktopNavbar from './desktop';
import MobileNavbar from './mobile';

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const language = useSelector(selectLanguage);
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
        <MobileNavbar
          anchorEl={anchorEl}
          checked={checked}
          handleMenuClose={handleMenuClose}
          handleMenuOpen={handleMenuOpen}
          ruLanguage={ruLanguage}
          enLanguage={enLanguage}
          open={open}
          toggleSwitch={toggleSwitch}
        />
      ) : (
        //Desktop NavBar
        <DesktopNavbar
          anchorEl={anchorEl}
          checked={checked}
          handleMenuClose={handleMenuClose}
          handleMenuOpen={handleMenuOpen}
          ruLanguage={ruLanguage}
          enLanguage={enLanguage}
          open={open}
          toggleSwitch={toggleSwitch}
        />
      )}
    </>
  );
}
