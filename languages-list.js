// languages-list.js
// Tunt omslag: exponerar ALL_LANGUAGES och RTL_LANGS från lang/js/lang.js
// som globala variabler för bakåtkompatibilitet.

import { ALL_LANGUAGES, RTL_LANGS } from './lang/js/lang.js';

window.ALL_LANGUAGES = ALL_LANGUAGES;
window.RTL_LANGS = RTL_LANGS;
