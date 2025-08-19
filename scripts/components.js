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
    let cardHeader = create.container('header', 'card-container');
    cardHeader.append(
      place.text('h2', obj.date, 'card-highlight text-display text-bright')
    );
    return cardHeader;
  },
  content: (obj) => {
    let cardBody = create.container('section', 'card-container');
    let cardContentHeading = create.container('div', 'card-highlight');
    let cardBodyContent = create.container('div', 'card-body');
    cardBody.append(cardContentHeading, cardBodyContent);

    let cardBadge = create.container('figure');
    place.svg(obj.source.icon, cardBadge);
    cardContentHeading.append(
      place.text(
        'h3',
        `${message.subject}: ${obj.subject}`,
        'overline text-bright'
      ),
      cardBadge
    );

    if (Object.hasOwn(obj, 'icon')) place.svg(obj.icon, cardBodyContent);
    cardBodyContent.append(
      place.text('p', `${message.record}: ${obj.happenings}`, 'text-faded')
    );

    return cardBody;
  },
  media: (obj) => {
    let cardMedia = create.container('figure', 'card-container');

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
        place.text(
          'figcaption',
          obj.media.caption.label,
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
