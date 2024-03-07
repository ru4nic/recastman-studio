type TextsVideoclip = {
  [key: string]: {
    head: string;
    title: string;
    paragraph: string;
    portfolio: string;
  };
};
const textsVideoclip: TextsVideoclip = {
  en: {
    head: 'Video clip shooting',
    title: 'Order a turnkey song and video shoot',
    paragraph:
      'The guys from Recastman studio will shoot you a high quality video that will attract the attention of viewers and help in promotion. It can be a video for your own song, or a cover.',
    portfolio: 'Recent work from the portfolio:',
  },
  ru: {
    head: 'Съемка видеоклипа',
    title: 'Закажите песню и съемку клипа под ключ',
    paragraph:
      'Ребята из Recastman studio снимут Вам качественный клип, который привлечет внимание зрителей и поможет в продвижении. Это может быть видео под свою авторскую песню, или же под кавер.',
    portfolio: 'Последние работы из портфолио:',
  },
};

export default textsVideoclip;
