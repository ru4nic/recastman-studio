import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../redusers/langSlice';

import { Item, List, RightMenu } from './top.right.footer.styled';
import { SimpleLink } from '../../bottom/bottom.menu.styled';
import { partnersLinks } from '../../footer.data';
import { textsFooter } from '../../footer.texts';

const TopRightFooter = () => {
  const language = useSelector(selectLanguage);
  return (
    <RightMenu>
      <List>
        <Item>{textsFooter[language].services}</Item>
        {/* Services */}
      </List>
      <List>
        <Item>{textsFooter[language].partners}</Item>
        {partnersLinks.map((link) => (
          <SimpleLink $topMenu key={link.href} href={link.href}>
            {link.name}
          </SimpleLink>
        ))}
      </List>
    </RightMenu>
  );
};

export default TopRightFooter;
