/** ============================================================================
    Project: Alien Timeline
    ----------------------------------------------------------------------------
    File: Timeline
    Description: Arquivo de criação da timeline
    Author: EdnilsonRobert
============================================================================= */

import { data as data } from './data.js';
import * as component from './components.js';

const timelineContainer = document.querySelector('.alien-timeline');

data.forEach((info) => {
  timelineContainer.append(component.card(info));
});

timelineContainer.append(component.ending());

/* END OF FILE ============================================================== */
