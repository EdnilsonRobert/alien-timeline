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
    let cardHeader = create.container('header', 'card-header');
    cardHeader.append(place.text('h2', obj.date, 'card-title'));
    return cardHeader;
  },
  content: (obj) => {
    let cardBody = create.container('section', 'card-body');
    let cardContentHeading = create.container('div', 'card-body-heading');
    let cardBodyContent = create.container('p', 'card-body-content');
    cardBody.append(cardContentHeading, cardBodyContent);

    let cardBadge = create.container('p', 'card-badge');
    place.svg(obj.source.icon, cardBadge);
    cardBadge.append(place.text('span', obj.source.label));
    cardContentHeading.append(
      place.text('h3', `${message.subject}: ${obj.subject}`, 'card-subtitle'),
      cardBadge
    );

    if (Object.hasOwn(obj, 'icon')) place.svg(obj.icon, cardBodyContent);
    cardBodyContent.append(
      place.text('span', `${message.record}: ${obj.happenings}`)
    );

    return cardBody;
  },
  media: (obj) => {
    let cardMedia = create.container('figure', 'card-media');

    if (Object.hasOwn(obj.media, 'figure')) {
      let figure = create.container('img', 'card-figure');
      figure.src = `${path_images}/${obj.media.figure}`;
      figure.alt = obj.media.caption.label;
      cardMedia.append(figure);
    }

    if (Object.hasOwn(obj.media, 'video')) {
      let video = create.container('iframe', 'card-video');
      video.src =
        'https://www.youtube.com/embed/6EtegGrPcp4?si=MGqmt-iFYZLs_sqO';
      // video.setAttribute(
      //   'allow',
      //   'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      // );
      video.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
      cardMedia.append(video);

      // https://www.youtube.com/watch?v=6EtegGrPcp4
      // <iframe
      //   width="560"
      //   height="315"
      //   src="https://www.youtube.com/embed/6EtegGrPcp4?si=MGqmt-iFYZLs_sqO"
      //   title="YouTube video player"
      //   frameborder="0"
      //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      //   referrerpolicy="strict-origin-when-cross-origin"
      //   allowfullscreen></iframe>
      // cardMedia.insertAdjacentHTML('afterbegin', obj.media.video);
      // <iframe class="card-video-frame"></iframe>
    }

    if (obj.media.caption.show)
      cardMedia.append(
        place.text('figcaption', obj.media.caption.label, 'card-media-caption')
      );

    return cardMedia;
  },
  alert: (obj, target) => {
    let cardFooter = create.container('footer', 'card-footer');

    if (Object.hasOwn(obj, 'danger')) {
      target.classList.add('card-danger');
      cardFooter.append(place.text('p', `${message.danger}: ${obj.danger}`));
    }
    if (Object.hasOwn(obj, 'warning')) {
      target.classList.add('card-warning');
      cardFooter.append(place.text('p', `${message.warning}: ${obj.warning}`));
    }

    return cardFooter;
  },
};

// CARDS -----------------------------------------------------------------------
export let card = (obj) => {
  let card = create.container('article', 'card');

  card.append(insert.header(obj));

  if (Object.hasOwn(obj, 'media')) card.append(insert.media(obj));

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
  let card = create.container('article', 'card card-ending');
  let cardHeader = create.container('header', 'card-header');
  let cardBody = create.container('section', 'card-body');
  card.append(cardHeader, cardBody);
  cardHeader.append(place.text('h2', 'Ending card title'));
  cardBody.append(place.text('p', message.waiting));
  return card;
};

/* END OF FILE ============================================================== */
