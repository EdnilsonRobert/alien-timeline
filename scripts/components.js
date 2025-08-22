/** ============================================================================
    Page: Components | Alien Timeline
    Description: Arquivo de criação de componentes
============================================================================= */

import { messages as message } from './utils.js';

const path_images = '../resources/images';

// ELEMENTOS BÁSICOS -----------------------------------------------------------
let create = {
  container: (tag, styles = null) => {
    let container = document.createElement(tag);
    if (styles)
      styles.split(' ').forEach((style) => container.classList.add(style));
    return container;
  },
};

let place = {
  image: (image, alt, styles = null) => {
    let img = create.container('img');
    img.src = `${path_images}/${image}`;
    img.alt = alt;
    if (styles) styles.split(' ').forEach((style) => img.classList.add(style));
    return img;
  },
  svg: (file, target) => {
    fetch(`${path_images}/icon-${file}.svg`)
      .then((response) => response.text())
      .then((svg) => target.insertAdjacentHTML('afterbegin', svg))
      .catch((error) => console.log(error));
  },
  text: (tag, content, styles = null) => {
    let text = document.createElement(tag);
    text.textContent = content;
    if (styles) styles.split(' ').forEach((style) => text.classList.add(style));
    return text;
  },
};

let insert = {
  header: (obj) => {
    let cardHeader = create.container('header', 'card-container');
    cardHeader.append(
      place.text('h2', obj.date, 'card-highlight text-display text-bright')
    );
    return cardHeader;
  },
  content: (obj) => {
    let cardBody = create.container('section', 'card-container');
    let cardContentHeading = create.container('div', 'card-highlight');
    let cardContentBody = create.container('div', 'card-body');
    cardBody.append(cardContentHeading, cardContentBody);

    let cardBadge = create.container('figure');
    place.svg(obj.source.icon, cardBadge);
    let cardSubject = create.container('div');
    cardSubject.append(
      place.text(
        'h3',
        `${message.subject}: ${obj.subject}`,
        'overline text-bright'
      ),
      place.text('p', `${message.related}: ${obj.related}`, 'text-faded')
    );
    cardContentHeading.append(cardSubject, cardBadge);

    let imageLabel = obj.media.caption ?? obj.subject;
    if (Object.hasOwn(obj, 'icon')) place.svg(obj.icon, cardContentBody);
    if (Object.hasOwn(obj.media, 'thumb'))
      cardContentBody.append(
        place.image(obj.media.thumb, imageLabel, 'card-thumb')
      );

    let text = create.container('div');
    text.append(
      place.text('p', `${message.record}:`, 'text-faded'),
      place.text('p', obj.happenings, 'text-faded')
    );
    cardContentBody.append(text);

    return cardBody;
  },
  media: (obj) => {
    let cardMedia = create.container('figure', 'card-container');

    if (Object.hasOwn(obj.media, 'figure')) {
      let imageLabel = obj.media.caption ?? obj.subject;
      cardMedia.append(
        place.image(obj.media.figure, imageLabel, 'card-figure')
      );
    }

    if (Object.hasOwn(obj.media, 'caption'))
      cardMedia.append(
        place.text(
          'figcaption',
          obj.media.caption,
          'caption text-faded text-center'
        )
      );

    return cardMedia;
  },
  alert: (obj, target) => {
    let cardFooter = create.container('footer', 'card-container card-footer');
    let footerContent = create.container('div', 'card-highlight');
    cardFooter.append(footerContent);

    footerContent.append(create.container('figure', 'footer-detail'));
    if (Object.hasOwn(obj, 'danger')) {
      target.classList.add('card-danger');
      footerContent.append(
        place.text('p', message.danger, 'footer-content text-faded')
      );
    }
    if (Object.hasOwn(obj, 'warning')) {
      target.classList.add('card-warning');
      footerContent.append(
        place.text('p', message.warning, 'footer-content text-faded')
      );
    }

    return cardFooter;
  },
};

// CARDS -----------------------------------------------------------------------
export let card = (obj) => {
  let card = create.container('article', 'card');
  if (!Object.hasOwn(obj, 'danger') && !Object.hasOwn(obj, 'warning')) {
    card.classList.add('card-default');
  }

  card.append(insert.header(obj));

  if (Object.hasOwn(obj.media, 'figure')) card.append(insert.media(obj));

  card.append(insert.content(obj));

  if (Object.hasOwn(obj, 'danger') || Object.hasOwn(obj, 'warning')) {
    card.append(insert.alert(obj, card));
  }

  // |-------------------------------------------------------------------------|
  // | card footer                                                             |
  // |   attachment [file]                                                     |
  // |   reference [url]                                                       |
  // |-------------------------------------------------------------------------|

  // model data = {
  //   attachment: 'Mensagem em janela modal',
  //   reference: 'link',
  // };

  return card;
};

export let ending = () => {
  let card = create.container('article', 'card-ending');
  card.append(
    create.container('div'),
    place.text('p', message.waiting, 'text-bright')
  );
  return card;
};

/* END OF FILE ============================================================== */
