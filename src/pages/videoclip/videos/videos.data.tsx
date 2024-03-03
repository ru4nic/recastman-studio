import previewContra from '../../../assets/images/preview_contra.jpg';
import previewBdd from '../../../assets/images/preview_bdd.jpg';
import previewSevenSphere from '../../../assets/images/preview_7sphere.jpg';
import previewRomanuke from '../../../assets/images/preview_romanuke.jpg';
import previewNewWorld from '../../../assets/images/preview_newworld.jpg';
import previewPeriphery from '../../../assets/images/preview_periphery.jpg';
import previewNla from '../../../assets/images/previewNLA.jpg';

type Videos = {
  link: string;
  src: string;
  name: string;
  id: number;
}[];

export const videos: Videos = [
  {
    link: 'https://www.youtube.com/embed/XRB2aP7Xc1A?si=AoNOKBAtkvbJgzwX',
    src: previewBdd,
    name: 'Battletoads & Double Dragon Nes (cover)',
    id: 133,
  },
  {
    link: 'https://www.youtube.com/embed/krwxxxF-wSQ?si=UMLgKHgfVaruycHS',
    src: previewContra,
    name: 'Contra OST Nes (cover): Boss, Waterfall, Snow',
    id: 142,
  },
  {
    link: 'https://www.youtube.com/embed/gz7gA2EaG0U?si=Tw-nmwL5KsvpgBBV',
    src: previewNewWorld,
    name: 'Deadheaven - Новый мир',
    id: 156,
  },
  {
    link: 'https://www.youtube.com/embed/WsDHb8Hdf4U?si=kPMkpUocSaYoKc9v',
    src: previewSevenSphere,
    name: '7th Sphere - Крылья Drum playthrough',
    id: 345,
  },
  {
    link: 'https://www.youtube.com/embed/GTJDlX3Sdvs?si=DQCobF7ZuThF3vn2',
    src: previewRomanuke,
    name: 'Romanuke - Brillos Live drum playthrough',
    id: 332,
  },
  {
    link: 'https://www.youtube.com/embed/WS2rriFLvss?si=itCLpKj-JkkG0tDV',
    src: previewPeriphery,
    name: 'Periphery / drum (cover) by Sergey Dedov',
    id: 124,
  },
  {
    link: 'https://www.youtube.com/embed/SG8PL8NLb4g?si=SxlzKEZ2rZPsPS36',
    src: previewNla,
    name: 'Nothing Like Art - How Are You?',
    id: 453,
  },
];
