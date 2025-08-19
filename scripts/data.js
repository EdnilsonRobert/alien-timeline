/** ============================================================================
    Page: Data | Alien Timeline
    Description: Arquivo de dados da timeline
============================================================================= */

import * as utils from './utils.js';

const icon = utils.icons;
const subject = utils.subjects;
const source = utils.sources;

// model data = {
//   date: 'Ano do acontecimento',
//   subject: subject -> media,
//   source: source -> icon, label,
//   happenings: 'Resumo do acontecimento.',
//   icon: icon,
//   media: {
//     caption: {
//       show: true,
//       label: 'Legenda da mídia',
//     },
//     figure: 'image.png',
//     video: 'link',
//   },
//   danger: 'Mensagem de perigo',
//   warning: 'Mensagem de aviso',
//   attachment: 'Mensagem em janela modal',
//   reference: 'link',
// };

export const data = [
  {
    date: '2122',
    subject: subject.alien1,
    source: source.movie,
    happenings: 'Resumo do acontecimento.',
  },
  {
    date: '2122',
    subject: subject.alien1,
    source: source.movie,
    happenings: 'Resumo do acontecimento.',
    danger: true,
  },
  {
    date: '2122',
    subject: subject.alien1,
    source: source.movie,
    happenings: 'Resumo do acontecimento.',
    warning: true,
  },
  {
    date: '2122',
    subject: subject.alien1,
    source: source.movie,
    happenings: 'Resumo do acontecimento.',
    icon: icon.star,
  },
  {
    date: '2122',
    subject: subject.alien1,
    source: source.movie,
    happenings: 'Resumo do acontecimento.',
    media: {
      caption: {
        show: false,
        label: 'Weyland Corp.',
      },
      figure: 'logo-weyland-corp.svg',
    },
  },
  {
    date: '2122',
    subject: subject.alien1,
    source: source.movie,
    happenings: 'Resumo do acontecimento.',
    media: {
      caption: {
        show: true,
        label: 'Weyland Corp.',
      },
      figure: 'logo-weyland-corp.svg',
    },
  },
  // {
  //   date: '2122',
  //   subject: subject.alien1,
  //   source: source.movie,
  //   happenings: 'Resumo do acontecimento.',
  //   media: {
  //     caption: {
  //       show: false,
  //       label: 'Weyland Corp.',
  //     },
  //     video: 'https://www.youtube.com/embed/6EtegGrPcp4',
  //   },
  // },

  // {
  //   date: '2122',
  //   subject: subject.alien1,
  //   source: source.movie,
  //   happenings: 'Resumo do acontecimento.',
  //   attachment: 'Mensagem em janela modal',
  //   reference: 'link',
  // },
];

/* END OF FILE ============================================================== */
