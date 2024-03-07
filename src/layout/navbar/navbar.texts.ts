type TextsNav = {
  [key: string]: {
    firstButton: string;
    secondButton: string;
    thirdButton: string;
    menu: string[];
  };
};

const textsNav: TextsNav = {
  en: {
    firstButton: 'Home',
    secondButton: 'Sound',
    thirdButton: 'Video',
    menu: ['Mixing', 'Recording', 'Reamping', 'Editing', 'Session musicians'],
  },
  ru: {
    firstButton: 'Главная',
    secondButton: 'Звук',
    thirdButton: 'Видео',
    menu: [
      'Сведение',
      'Запись',
      'Реампинг',
      'Редактирование',
      'Сессионные музыканты',
    ],
  },
};

export default textsNav;
