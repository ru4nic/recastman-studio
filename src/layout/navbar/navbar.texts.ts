type TextsNav = {
  [key: string]: {
    firstButton: string;
    secondButton: string;
    thirdButton: string;
    menu: string[];
  };
};

export const textsNav: TextsNav = {
  en: {
    firstButton: 'Home',
    secondButton: 'Sound',
    thirdButton: 'Video',
    menu: ['Mixing'],
  },
  ru: {
    firstButton: 'Главная',
    secondButton: 'Звук',
    thirdButton: 'Видео',
    menu: ['Сведение'],
  },
};
