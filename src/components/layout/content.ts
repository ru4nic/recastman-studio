import { texts } from '../pages/home/content';

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
type TextsNav = {
  [key: string]: {
    firstButton: string;
    secondButton: string;
    thirdButton: string;
  };
};
export const textsNav: TextsNav = {
  en: {
    firstButton: 'Home',
    secondButton: 'Sound',
    thirdButton: 'Video',
  },
  ru: {
    firstButton: 'Главная',
    secondButton: 'Звук',
    thirdButton: 'Видео',
  },
};
