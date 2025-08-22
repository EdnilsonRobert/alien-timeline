/** ============================================================================
    Page: Data | Alien Timeline
    Description: Arquivo de dados da timeline
============================================================================= */

import * as utils from './utils.js';

const icon = utils.icons;
const related = utils.related;
const source = utils.sources;

// model data = {
//   date: 'Ano do acontecimento',
//   subject: 'Card title',
//   related: related -> media,
//   source: source -> icon, label,
//   happenings: 'Resumo do acontecimento.',
//   icon: icon,
//   media: {
//     caption: 'Legenda da mídia',
//     thumb: 'thumb.webp',
//     figure: 'image.webp',
//     video: 'link',
//   },
//   danger: true,
//   warning: true,
//   attachment: 'Mensagem em janela modal',
//   reference: 'link',
// };

export const data = [
  {
    // date: '4 bilhões - 2 milhões AC',
    date: 'Antes da vida na Terra',
    subject: 'Os "Engenheiros"',
    related: related.prometheus,
    source: source.movie,
    happenings:
      'Uma raça alienígena, mais tarde apelidada de "Os Engenheiros", visita a Terra e deixa um dos seus para trás. Seu corpo se desfaz após ele ingerir uma substância negra. Seu DNA entra na água e se recombina para semear a Terra com os blocos de construção da vida.',
    media: {
      thumb: 'thumb-engineer.webp',
    },
  },
  {
    date: 'Século 8 AC',
    subject: 'O mito de Prometeu',
    related: related.prometheus,
    source: source.movie,
    happenings:
      'Aparece pela primeira vez na mitologia grega o mito de Prometeu, um titã que trouxe o homem à vida do barro e, em seguida, roubou o fogo dos deuses no Olimpo para entregá-lo aos humanos. Zeus, furioso com a desobediência de Prometeu, o acorrentou a uma rocha no Cáucaso, onde uma águia devoraria suas entranhas diariamente por toda a eternidade.',
    media: {
      thumb: 'thumb-prometeu.webp',
    },
  },
  {
    date: '1.990',
    subject: 'Peter Weyland',
    related: related.prometheus,
    source: source.movie,
    happenings:
      'Em 1 de outubro o homem fundador e CEO da Weyland Corp., Peter Weyland, nasce um Mumbai, Índia, ',
    icon: icon.star,
    media: {
      caption: 'Peter Weyland',
      figure: 'person-p-weyland.webp',
    },
  },
  {
    date: '2004',
    subject: 'Alien vs Predador',
    related: related.avp,
    source: source.movie,
    happenings:
      'Yautjas e xenomorfos fazem coisas. Juntos. Esse é um episódio da franquia que deveria ser banido. Se você concorda sabe que é melhor seguir em frente.',
    media: {
      thumb: 'thumb-avp.webp',
    },
    danger: true,
  },
  {
    date: '2012',
    subject: 'Weyland Corp.',
    related: related.prometheus,
    source: source.movie,
    happenings:
      'Peter Weyland funda a Weyland Corp, a empresa por trás de várias missões espaciais condenadas.',
    media: {
      figure: 'logo-weyland-corp.svg',
    },
  },
  {
    date: '2035 a 2072',
    subject: 'David 8',
    related: related.prometheus,
    source: source.movie,
    happenings: `Em 7 de janeiro de 2025, a Weyland experimenta um protótipo do andróide David. A seguir, a empresa lança modelos sucessivos e aperfeiçoados: David 3 em 2035, David 4 em 1 de abril de 2042, David 5 em 2052, David 6 em 2062 e Davi 7 em 6 de julho de 2068. A versão final, David 8, foi lançada em 2072.`,
    media: {
      caption: 'David 8',
      figure: 'person-david.webp',
    },
  },
  {
    date: '2092',
    subject: 'Ellen Ripley',
    related: related.alien1,
    source: source.movie,
    happenings:
      'Em 7 de janeiro nasce Ellen Louise Ripley, Tenente de Primeira Classe e conselheira civil dos Fuzileiros Coloniais.',
    icon: icon.star,
    media: {
      caption: 'Ellen Ripley',
      figure: 'person-e-ripley.webp',
    },
  },
];

/* END OF FILE ============================================================== */
