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
