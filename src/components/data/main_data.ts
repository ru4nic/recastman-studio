type PageBottomData = {
  [key: string]: {
    [key: string]: {
      name: string;
      link: string;
    };
  };
};

export const pageBottomData: PageBottomData = {
  ru: {
    mixing: {
      name: 'Сведение и мастеринг',
      link: '../mixing',
    },
    sessionMusicians: {
      name: 'Сессионные музыканты',
      link: '../session-musicians',
    },
    recording: {
      name: 'Запись',
      link: '../recording',
    },
    reamping: {
      name: 'Реампинг',
      link: '../reamping',
    },
    editing: {
      name: 'Редактирование',
      link: '../editing',
    },
    videoClip: {
      name: 'Съемка клипа',
      link: '../video-clip',
    },
    home: {
      name: 'Главная',
      link: '.',
    },
  },
  en: {
    mixing: {
      name: 'Mixing & mastering',
      link: '../mixing',
    },
    sessionMusicians: {
      name: 'Session musicians',
      link: '../session-musicians',
    },
    recording: {
      name: 'Recording',
      link: '../recording',
    },
    reamping: {
      name: 'Ramping',
      link: '../reamping',
    },
    editing: {
      name: 'Editing',
      link: '../editing',
    },
    videoClip: {
      name: 'Video clip',
      link: '../video-clip',
    },
    home: {
      name: 'Home',
      link: '.',
    },
  },
};
