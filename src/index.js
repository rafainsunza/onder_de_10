import { fetchImage } from './javascript/utils.js';

import { DtLanguageSelector } from './javascript/custom-components/language-selector/dt-language-selector.js';
import { DtPlayerCountPicker } from './javascript/custom-components/player-count-picker/dt-player-count-picker.js';

import './styles/reset.css';
import './styles/main.sass';

fetchImage('assets/onder_de_10_logo.png', document.querySelector('.logo-link'), 'logo-footer');
