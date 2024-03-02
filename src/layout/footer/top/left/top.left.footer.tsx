import { useSelector } from 'react-redux';

import { Column, TargetLink, Desc } from './top.left.footer.styled';
import LogoImg from '../../../../components/logo-img';

import { selectLanguage } from '../../../../redusers/langSlice';

import { textsFooter } from '../../footer.texts';

import logo from '../../../../assets/images/recastman_logo.png';

const TopLeftFooter = () => {
  const language = useSelector(selectLanguage);
  return (
    <Column>
      <TargetLink to="/recastman-studio/">
        <LogoImg $component="footer" src={logo} alt="recastman_logo" />
      </TargetLink>
      <Desc>{textsFooter[language].description}</Desc>
    </Column>
  );
};

export default TopLeftFooter;
