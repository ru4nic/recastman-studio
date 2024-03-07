type TextsMixing = {
  [key: string]: {
    head: string;
    titleMixing: string;
    paragraphMixing: string[];
    titleMastering: string;
    paragraphMastering: string;
  };
};
const textsMixing: TextsMixing = {
  en: {
    head: 'Mixing and Mastering',
    titleMixing: 'Mixing',
    paragraphMixing: [
      'At the mix stage, the recorded tracks are combined into a single project and processed with effects. The result is the overall picture of the sounds.',
      'It is the mixing that emphasizes the musical idea of the track, making the song even more unique and a hit.',
    ],
    titleMastering: 'Mastering',
    paragraphMastering:
      'This is the final stage of technical processing of the source material. It is the adjustment of the sound to the existing standards applicable to a particular musical style. Mastering is also necessary to ensure a perfect sound, regardless of the chosen acoustic system. Specialists carry out the work using different metric systems. If the track is to be put into wide rotation, you need to make sure that it meets the standards. It is very important to perform the work qualitatively, so that the listener can enjoy the results. Specialists from our studio will help to achieve the desired effect.',
  },
  ru: {
    head: 'Сведение и Мастеринг',
    titleMixing: 'Сведение',
    paragraphMixing: [
      'На этапе сведения записанные дорожки объединяются в один проект о обрабатываются эффектами. В результате получается сформировать общую картину звуков.',
      'Именно сведение подчеркнет музыкальную идею Вашего трека, делая песню еще более уникальной и хитовой.',
    ],
    titleMastering: 'Мастеринг',
    paragraphMastering:
      'Это последняя стадия обработки сведённого материала. Мастеринг позволит Вашей композиции звучать качественно и профессионально.',
  },
};

export default textsMixing;
