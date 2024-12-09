
import './styles/reset.css';
import './styles/main.sass';

import { DtBackButton } from './javascript/custom-components/back-button/dt-back-button.js';
import { DtLanguageSelector } from './javascript/custom-components/language-selector/dt-language-selector.js';
import { DtPlayerCountPicker } from './javascript/custom-components/player-count-picker/dt-player-count-picker.js';
import { DtPlayerNameInput } from './javascript/custom-components/player-name-input/dt-player-name-input.js';
import { DtScoreDisplay } from './javascript/custom-components/score-display/dt-score-display.js';

import { fetchImage } from './javascript/modules/utils.js';
import { translate } from './javascript/modules/languages.js';


fetchImage('assets/onder_de_10_logo.png', document.querySelector('.logo-link'), 'logo-footer');
document.addEventListener('language-changed', (e) => { translate(e.detail.title, document.querySelector('.header-title')) });
