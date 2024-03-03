type Texts = {
  [key: string]: {
    head: string;
    // description: string;
    title: string;
    paragraph: string;
    portfolio: string;
  };
};
export const texts: Texts = {
  en: {
    head: 'Video clip shooting',
    // description:
    //   'By complementing their music with visual accompaniment, an artist or music group gets additional opportunities for promotion',
    title: 'Order a turnkey song and video shoot',
    paragraph:
      'The guys from Recastman studio will shoot you a high quality video that will attract the attention of viewers and help in promotion. It can be a video for your own song, or a cover.',
    portfolio: 'Recent work from the portfolio:',
  },
  ru: {
    head: 'Съемка видеоклипа',
    // description:
    //   'Дополняя свою музыку визуальным сопровождением артист или  музыкальный коллектив получает дополнительные возможности для продвижения',
    title: 'Закажите песню и съемку клипа под ключ',
    paragraph:
      'Ребята из Recastman studio снимут Вам качественный клип, который привлечет внимание зрителей и поможет в продвижении. Это может быть видео под свою авторскую песню, или же под кавер.',
    portfolio: 'Последние работы из портфолио:',
  },
};
