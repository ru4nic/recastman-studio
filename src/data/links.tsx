import { ReactNode } from 'react';
import { FaTelegram, FaVk, FaYoutube } from 'react-icons/fa6';

const PATH = 'recastman-studio';

interface Partners {
  href: string;
  name: string;
}
interface Socials {
  href: string;
  icon: ReactNode;
}
interface Links {
  pages: {
    home: string;
    video: string;
    mixing: string;
  };
  partners: Partners[];
  socials: Socials[];
}
export const links: Links = {
  pages: {
    home: `/${PATH}/`,
    video: `/${PATH}/video-clip`,
    mixing: `/${PATH}/mixing`,
  },
  partners: [
    {
      href: 'http://white_studio.tilda.ws/',
      name: 'White Room',
    },
    { href: 'https://dedovdrums.ru/', name: 'Dedov Drums' },
  ],
  socials: [
    { href: 'https://vk.com/recastman_studio', icon: <FaVk /> },
    { href: 'https://t.me/Recastman', icon: <FaTelegram /> },
    {
      href: 'https://www.youtube.com/@recastmanstudio4824',
      icon: <FaYoutube />,
    },
  ],
};
