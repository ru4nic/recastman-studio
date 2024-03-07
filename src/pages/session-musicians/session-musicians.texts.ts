import alexander from '../../assets/images/alexander.jpg';
import dedov from '../../assets/images/dedov.jpg';
import slava from '../../assets/images/drummer.jpg';

type TextsSessionMusicians = {
  [key: string]: {
    head: string;
    // description: string;
    title: string;
    paragraph: string[];
    musicians: {
      name: string;
      skills: string[];
      img: string;
      link: string;
    }[];
  };
};
const textsSessionMusicians: TextsSessionMusicians = {
  en: {
    head: 'Session musicians',
    title: 'Our musicians will think up and record parts for your songs',
    paragraph: [
      'If this is a service you need, we will do everything we can to help you.',
      "We offer the use of professionals working in our studio. They are involved in the recording which makes the sound vibrant and rich. The music becomes full and lively by adding musical parts that attract the listener's ear.",
    ],
    musicians: [
      {
        name: 'Alexander',
        skills: ['Guitar', 'Bass', 'Arrangement'],
        img: alexander,
        link: 'https://youtu.be/_B8TqGiTWI4?si=MWVFGxVLOAkyVGQu',
      },
      {
        name: 'Sergey',
        skills: ['Drums'],
        img: dedov,
        link: 'https://www.youtube.com/watch?v=WS2rriFLvss',
      },
      {
        name: 'Vyacheslav',
        skills: ['Drums'],
        img: slava,
        link: 'https://youtu.be/_B8TqGiTWI4?si=MWVFGxVLOAkyVGQu',
      },
    ],
  },
  ru: {
    head: 'Cессионные Музыканты',
    title: 'Наши музыканты продумают и запишут партии для Ваших песен',
    paragraph: [
      'Мы предлагаем воспользоваться услугами профессионалов, работающих в нашей студии. Они участвуют в записи, что позволяет сделать звук ярким и насыщенным. Музыка становится полной и живой за счет добавления музыкальных партий, привлекающих слух слушателя.',
      'Если эта услуга вам необходима мы сделаем все, чтобы вам помочь.',
    ],
    musicians: [
      {
        name: 'Александр',
        skills: ['Гитара', 'Бас', 'Аранжировка'],
        img: alexander,
        link: 'https://youtu.be/_B8TqGiTWI4?si=MWVFGxVLOAkyVGQu',
      },
      {
        name: 'Сергей',
        skills: ['Барабаны'],
        img: dedov,
        link: 'https://www.youtube.com/watch?v=WS2rriFLvss',
      },
      {
        name: 'Вячеслав',
        skills: ['Барабаны'],
        img: slava,
        link: 'https://youtu.be/_B8TqGiTWI4?si=MWVFGxVLOAkyVGQu',
      },
    ],
  },
};

export default textsSessionMusicians;
