import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../redusers/langSlice';

import { Item, List, RightMenu } from './top.right.footer.styled';
import { SimpleLink } from '../../bottom/bottom.menu.styled';
import { textsFooter } from '../../footer.texts';
import { links } from '../../../../data/links';

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
        {links.partners.map((link) => (
          <SimpleLink $topMenu key={link.href} href={link.href}>
            {link.name}
          </SimpleLink>
        ))}
      </List>
    </RightMenu>
  );
};

export default TopRightFooter;
