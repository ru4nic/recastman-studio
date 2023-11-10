/*
walpapers
*/
import drummer from '../../../assets/images/drummer.jpg';
import stacks from '../../../assets/images/stacks.jpg';
import sax from '../../../assets/images/sax.jpg';

/*
spotlights
*/
import reamping from '../../../assets/images/reamping.jpg';
import mixing from '../../../assets/images/mixing.jpg';
import recording from '../../../assets/images/vocalist1.jpg';
import sessions from '../../../assets/images/sessions.jpg';
import editing from '../../../assets/images/editing.jpg';
import videoClip from '../../../assets/images/videoclip.jpg';
/*
Releases
*/
import boxer from '../../../assets/images/Releases/boxer.jpg';
import corporat from '../../../assets/images/Releases/corporat.jpg';
import im_bad from '../../../assets/images/Releases/im_bad.jpg';
import sport from '../../../assets/images/Releases/sport.jpg';
import deadheaven from '../../../assets/images/Releases/deadheaven.jpg';
import lastImpulse from '../../../assets/images/Releases/last_impulse.jpg';
import oChemMolchat from '../../../assets/images/Releases/ochemmolchat.jpg';
import mahaon from '../../../assets/images/Releases/maxaon.jpg';
import morigan from '../../../assets/images/Releases/morigan.jpg';
import otherside from '../../../assets/images/Releases/theotherside.jpg';

/*
mp3
*/
import electroshok from '../../../assets/audio/electroshok.mp3';
import sum41 from '../../../assets/audio/sum41.mp3';
import stuff from '../../../assets/audio/stuff.mp3';
import last_impulse from '../../../assets/audio/last_impulse.mp3';

export const walpapers = [
  { src: drummer, id: 331 },
  { src: stacks, id: 332 },
  { src: sax, id: 333 },
];
import { texts as reampingContent } from '../reamping/content';
import { texts as recordingContent } from '../recording/content';
import { texts as mixingContent } from '../mixing/content';
import { texts as sessionContent } from '../session-musicians/content';
import { texts as editingContent } from '../editing/content';
import { texts as videoContent } from '../videoclip/content';

type Services = {
  title: { [key: string]: string };
  desc: { [key: string]: any };
  src: string;
  link: string;
  id: number;
};

export const services: Services[] = [
  {
    title: { en: recordingContent.en.head, ru: recordingContent.ru.head },
    desc: {
      en: recordingContent.en.paragraph,
      ru: recordingContent.ru.paragraph,
    },
    src: recording,
    link: './recording',
    id: 111,
  },
  {
    title: {
      en: `${mixingContent.en.titleMixing} & ${mixingContent.en.titleMastering}`,
      ru: `${mixingContent.ru.titleMixing} и ${mixingContent.ru.titleMastering}`,
    },
    desc: {
      en: mixingContent.en.paragraphMixing,
      ru: mixingContent.ru.paragraphMixing,
    },
    src: mixing,
    link: './mixing',
    id: 112,
  },
  {
    title: { en: reampingContent.en.title, ru: reampingContent.ru.title },
    desc: {
      en: reampingContent.en.paragraph,
      ru: reampingContent.ru.paragraph,
    },
    src: reamping,
    link: './reamping',
    id: 113,
  },
  {
    title: { en: sessionContent.en.head, ru: sessionContent.ru.head },
    desc: {
      en: sessionContent.en.paragraph,
      ru: sessionContent.ru.paragraph,
    },
    src: sessions,
    link: './session-musicians',
    id: 114,
  },
  {
    title: { en: editingContent.en.head, ru: editingContent.ru.head },
    desc: {
      en: editingContent.en.paragraph,
      ru: editingContent.ru.paragraph,
    },
    src: editing,
    link: './editing',
    id: 115,
  },
  {
    title: { en: videoContent.en.head, ru: videoContent.ru.head },
    desc: {
      en: videoContent.en.paragraph,
      ru: videoContent.ru.paragraph,
    },
    src: videoClip,
    link: './video-clip',
    id: 116,
  },
];

type Releases = {
  img: string;
  mp3: string;
  author: string;
  release: string;
  id: number;
  song: string;
};
export const releases: Releases[] = [
  {
    img: sport,
    mp3: sum41,
    author: 'Kirill Isaiev & Olga Vladimirova',
    release: 'Спорт (Single 2021)',
    id: 229,
    song: 'Спорт',
  },
  {
    img: boxer,
    mp3: '',
    author: 'Kirill Isaiev & Olga Vladimirova',
    release: 'Боксер (Single 2021)',
    id: 221,
    song: '',
  },
  {
    img: corporat,
    mp3: '',
    author: 'Kirill Isaiev & Olga Vladimirova',
    release: 'Корпоратив (Single 2021)',
    id: 222,
    song: '',
  },
  {
    img: im_bad,
    mp3: '',
    author: 'Kirill Isaiev & Olga Vladimirova',
    release: 'Я Не Идеальна (Single 2023)',
    id: 224,
    song: '',
  },
  {
    img: deadheaven,
    author: 'Deadheaven',
    release: 'Продай Свою Душу (2018)',
    id: 223,
    mp3: '',
    song: '',
  },
  {
    img: lastImpulse,
    mp3: last_impulse,
    author: 'Evil Not Alone',
    release: 'Последний Импульс Умирающей Жизни (2009)',
    id: 225,
    song: 'Последний Импульс Умирающей Жизни',
  },
  {
    img: mahaon,
    mp3: '',
    author: 'Evil Not Alone',
    release: 'Махаон (2010)',
    id: 226,
    song: '',
  },
  {
    img: oChemMolchat,
    mp3: stuff,
    author: 'Evil Not Alone',
    release: 'О Чем Молчат... (2008)',
    id: 228,
    song: 'Stuff',
  },
  {
    img: morigan,
    mp3: '',
    author: 'Morigan',
    release: 'После Меня Останется Лишь Космос (2021)',
    id: 227,
    song: '',
  },
  {
    img: otherside,
    mp3: electroshok,
    author: 'The Otherside',
    release: 'Начало (2016)',
    id: 330,
    song: 'Электрошок',
  },
];
const ruble = String.fromCharCode(8381);

type CardsPrices = {
  [key: string]: {
    [key: string]: {
      title: string;
      price: string;
      features?: string[];
    };
  };
};
export const cardsPrices: CardsPrices = {
  recording: {
    en: {
      title: 'Studio Rental With Sound Engineer',
      price: `1400${ruble}/hour`,
      features: [
        'Vocal recording',
        'Guitar recording',
        'Live drums recording',
        'Multichannel live recording',
      ],
    },
    ru: {
      title: 'Аренда студии со звукорежисёром',
      price: `1400${ruble}/час`,
      features: [
        'Запись вокала',
        'Запись гитар',
        'Запись барабанов',
        'Поканальная запись живой игры',
      ],
    },
  },
  reamping: {
    en: {
      title: 'Reamping',
      price: `1400${ruble}/hour`,
      features: [
        'Tube amplifiers',
        'Guitar Reamping',
        'Bass Guitar Reamping',
        'Any sound',
      ],
    },
    ru: {
      title: 'Реампинг',
      price: `1400${ruble}/час`,
      features: [
        'Ламповые усилители',
        'Ремапинг гитар',
        'Ремпинг бас-гитары',
        'Любой звук',
      ],
    },
  },
  musicians: {
    en: {
      title: 'Session Musicians',
      price: `5000${ruble}/hour`,
      features: ['Acoustic guitar', 'Bass guitar', 'Electric guitar', 'Drums'],
    },
    ru: {
      title: 'Сессионные музыканты',
      price: `5000${ruble}/час`,
      features: [
        'Акустическая гитара',
        'Бас-гитара',
        'Электро-гитара',
        'Барабаны',
      ],
    },
  },
  editing: {
    en: {
      title: 'Editing Tracks',
      price: `7000${ruble}/hour`,
    },
    ru: {
      title: 'Редакция дорожек',
      price: `от 5000${ruble}`,
    },
  },
  videoclip: {
    en: {
      title: 'Video Clip',
      price: `from 20000${ruble}`,
      features: [
        'Developing a unique idea and writing a script',
        'Directing',
        'Animation production (2D, 3D)',
        'Storyboarding',
        'Shooting a video',
        'Post-production (editing, color correction, compositing, sound design, etc.)',
      ],
    },
    ru: {
      title: 'Video Clip',
      price: `от 20000${ruble}`,
      features: [
        'Разработка уникальной идеи и написание сценария',
        'Режиссура',
        'Создание анимации (2D, 3D)',
        'Раскадровка',
        'Съемка видео',
        'Постпродакшн (монтаж, цветокоррекция, композитинг, звуковое оформление и т.д.)',
      ],
    },
  },
  mixingAndMastering: {
    en: {
      title: 'Mixing and Mastering',
      price: `7000${ruble}`,
      features: ['Track mixing.Vocals + minus', 'Track Reconciliation'],
    },
    ru: {
      title: 'Сведение и Мастеринг',
      price: `7000${ruble}`,
      features: ['Сведение Вокала с минусом', 'Сведение мультитрека'],
    },
  },
};
