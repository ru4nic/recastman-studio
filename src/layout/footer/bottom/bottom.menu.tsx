import {
  Copyrights,
  IconLink,
  Item,
  SimpleLink,
  Socials,
  Wrapp,
} from './bottom.menu.styled';
import textsFooter from '../footer.texts';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../redusers/langSlice';
import { links } from '../../../data/links';

const BottomMenu = () => {
  const language = useSelector(selectLanguage);

  return (
    <Wrapp>
      <Copyrights>
        {textsFooter[language].copyright}
        <SimpleLink href="jfds">Ru4nic</SimpleLink>
      </Copyrights>
      <Socials>
        {links.socials.map((link) => {
          return (
            <Item key={link.href}>
              <IconLink href={link.href} target="_blank" rel="norefferer">
                {link.icon}
              </IconLink>
            </Item>
          );
        })}
      </Socials>
    </Wrapp>
  );
};

export default BottomMenu;
