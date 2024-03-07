type Texts = {
  [key: string]: {
    head: string;
    title: string;
    paragraph: string;
    hardware: {
      title: string;
      item: string[];
    }[];
  };
};
const hardware: { guitarGear: string[]; mics: string[] } = {
  guitarGear: [
    'Mesa Boogie Dual Rectifier (2ch)',
    'EVH 5150 III 100W',
    'Peavey 6505 120W',
    'Peavey 6505 60W',
    'Peavey XXX',
    'Marshall Valvestate 8100',
    'Mesa Boogie Recto Standard OS Slant Cabinet 4x12',
    'Marshall 1960BV Cabinet 4x12',
    'Engl PRO Slanted Cabinet 4x12',
    'Radial Reamp JCR Studio Reamper',
    'Maxon Overdrive Pro OD-820',
    'Chris Custom Scream',
  ],
  mics: [
    'Shure SM57',
    'ADK A51s',
    'Sennheiser MD421',
    'Sennheiser MD441',
    'Sennheiser MD409',
    'JZ Vintage 67',
  ],
};

export const texts: Texts = {
  en: {
    head: 'Reamping',
    title: 'Reamping',
    paragraph:
      'In a nutshell, reamping is the process of taking a previously recorded dry guitar signal, feeding it through an amp and/or effects circuit, and re-recording the end result.',
    hardware: [
      {
        title: 'Guitar gear',
        item: hardware.guitarGear,
      },
      {
        title: 'Microphones',
        item: hardware.mics,
      },
    ],
  },
  ru: {
    head: 'Реампинг',
    title: 'Реампинг',
    paragraph:
      'В двух словах, реампинг - это процесс взятия ранее записанного сухого гитарного сигнала, подачи его через усилитель и/или цепь эффектов и повторной записи конечного результата.',
    hardware: [
      {
        title: 'Гитарное оборудование',
        item: hardware.guitarGear,
      },
      {
        title: 'Микрофоны',
        item: hardware.mics,
      },
    ],
  },
};
