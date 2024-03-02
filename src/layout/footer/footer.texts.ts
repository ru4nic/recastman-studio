import { texts } from '../../pages/home/texts';

type TextsFooter = {
  [key: string]: {
    description: string;
    services: string;
    partners: string;
    copyright: string;
  };
};
export const textsFooter: TextsFooter = {
  en: {
    description: texts.en.mainDesc,
    services: 'Services',
    partners: 'Partners',
    copyright: 'Developed & designed by ',
  },
  ru: {
    description: texts.ru.mainDesc,
    services: 'Услуги',
    partners: 'Партнеры',
    copyright: 'Разработка и дизайн ',
  },
};
