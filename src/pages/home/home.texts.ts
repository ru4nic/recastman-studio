type TextsHome = {
  [key: string]: {
    mainDesc: string;
    description: string;
    titleReleases: string;
    titleFirst: string;
  };
};
const textsHome: TextsHome = {
  en: {
    titleFirst: 'Recording Studio in Moscow',
    mainDesc: 'Recording and video production studio',
    description:
      'Recastman studio is a professional audio and video production studio that provides full-cycle production. We have been working in the recording industry for more than 15 years.',
    titleReleases: 'Releases',
  },
  ru: {
    titleFirst: 'Cтудия звукозаписи в Москве',
    mainDesc: 'Студия звукозаписи и съемки видеоклипов',
    description:
      'Recastman studio - это профессиональная студия звукозаписи и съемки видео клипов полного цикла. Мы работаем уже более 15 лет.',
    titleReleases: 'Релизы',
  },
};

export default textsHome;
