import textsHome from '../../pages/home/home.texts';

type TextsFooter = {
  [key: string]: {
    description: string;
    services: string;
    partners: string;
    copyright: string;
  };
};
const textsFooter: TextsFooter = {
  en: {
    description: textsHome.en.mainDesc,
    services: 'Services',
    partners: 'Partners',
    copyright: 'Developed & designed by ',
  },
  ru: {
    description: textsHome.ru.mainDesc,
    services: 'Услуги',
    partners: 'Партнеры',
    copyright: 'Разработка и дизайн ',
  },
};

export default textsFooter;
