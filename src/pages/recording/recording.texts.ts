type TextsRecording = {
  [key: string]: {
    head: string;
    // description: string;
    title: string;
    paragraph: string[];
  };
};
const textsRecording: TextsRecording = {
  en: {
    head: 'Recording',
    // description:
    //   'Recastman studio has been providing high quality song recording, arrangement, mixing and mastering services for over 20 years. Our recording studio is located in Moscow, but we also work remotely!',
    title: 'Recording vocals and instruments',
    paragraph: [
      'All the necessary professional equipment is available to record vocals, guitars, bass guitars and drums for various genres and    styles. Your voice will sound perfect thanks to the right microphone, digital technology and the help of an experienced sound engineer.',
      'Professional mastering will allow you to remove the smallest noises, straighten and strengthen your voice where it is necessary.',
    ],
  },
  ru: {
    head: 'Запись',
    // description:
    //   'Студия Recastman уже более 20 лет предоставляет услуги по высококачественной записи песен, аранжировке, сведению и мастерингу. Наша студия находится в Москве, но мы работаем и удаленно!',
    title: 'Запись вокала и инструментов',
    paragraph: [
      'В нашей студии имеется все необходимое профессиональное оборудование для записи вокала, гитары, бас-гитары и ударных для различных жанров и стилей.',
      'Ваши инструменты и вокал будут звучать идеально благодаря правильно подобранному микрофону, цифровым технологиям и помощи опытного звукорежиссера.',
    ],
  },
};

export default textsRecording;
