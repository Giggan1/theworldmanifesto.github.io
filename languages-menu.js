// languages-menu.js
// Tunt omslag: exponerar populateLangSelect och setDocumentDirection globalt.

import { populateLangSelect, setDocumentDirection } from './lang/js/lang.js';

window.populateLangSelect = populateLangSelect;
window.setDocumentDirection = setDocumentDirection;
