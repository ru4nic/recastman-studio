type TextsEditing = {
  [key: string]: {
    head: string;
    title: string;
    paragraph: string[];
    operations: {
      item: string[];
    };
  };
};

const textsEditing: TextsEditing = {
  en: {
    head: 'Editing',
    title: 'Vocal and Instruments Editing',
    paragraph: [
      'An important stage in which the source material is prepared for processing. As a rule, the following operations are performed at this stage :',
      'You can edit the sources yourself or ask us to do so.',
    ],
    operations: {
      item: [
        'elimination of defects',
        'rhythmic and tonal correction (tuning)',
        'volume equalization',
        'phase correction',
        'sample replacement (triggering)',
      ],
    },
  },
  ru: {
    head: 'Редактирование',
    title: 'Редакирование вокала и инструментов',
    paragraph: [
      'Важный этап, на котором производится подготовка исходников к обработке. Как правило, на этой стадии производятся следующие операции :',
      'Вы можете отредактировать исходники самостоятельно или попросить об этом нас.',
    ],
    operations: {
      item: [
        'устранение дефектов',
        'ритмическая и тональная коррекции (тюнинг)',
        'выравнивание громкости',
        'фазовая коррекция',
        'замена семплом (триггирование)',
      ],
    },
  },
};

export default textsEditing;
