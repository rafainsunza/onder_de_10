import { fetchImage } from './javascript/utils.js';

import { DtLanguageSelector } from './javascript/custom-components/language-selector/dt-language-selector.js';

import './styles/reset.css';
import './styles/index.sass';

fetchImage('assets/onder_de_10_logo.png', document.querySelector('.logo-container'), 'logo-footer');
