// ============================================================
// lang/js/lang.js
// Central språkdata för hela sajten.
// ============================================================

// ------------------------------------------------------------
// 1. ALLA SPRÅK
// [kod, visningsnamn, engelskt namn (endast för icke-latinska)]
// ------------------------------------------------------------
export const ALL_LANGUAGES = [
  ['sv', 'Svenska'],
  ['en', 'English'],
  ['zh', '中文', 'Chinese'],
  ['yue', '粵語', 'Cantonese'],
  ['hi', 'हिंदी', 'Hindi'],
  ['bn', 'বাংলা', 'Bengali'],
  ['ur', 'اردو', 'Urdu'],
  ['pa', 'ਪੰਜਾਬੀ', 'Punjabi'],
  ['id', 'Bahasa Indonesia'],
  ['jv', 'Basa Jawa', 'Javanese'],
  ['es', 'Español'],
  ['fr', 'Français'],
  ['de', 'Deutsch'],
  ['ar', 'العربية', 'Arabic'],
  ['pt', 'Português'],
  ['ru', 'Русский', 'Russian'],
  ['uk', 'Українська', 'Ukrainian'],
  ['bg', 'Български', 'Bulgarian'],
  ['ja', '日本語', 'Japanese'],
  ['fil', 'Filipino'],
  ['ko', '한국어', 'Korean'],
  ['th', 'ไทย', 'Thai'],
  ['vi', 'Tiếng Việt'],
  ['tr', 'Türkçe'],
  ['fa', 'فارسی', 'Persian'],
  ['sw', 'Kiswahili'],
  ['it', 'Italiano'],
  ['pl', 'Polski'],
  ['nl', 'Nederlands'],
  ['ro', 'Română'],
  ['el', 'Ελληνικά', 'Greek'],
  ['hu', 'Magyar'],
  ['he', 'עברית', 'Hebrew'],
  ['crs', 'Seselwa'],
  ['no', 'Norsk'],
  ['se', 'Davvisámegiella'],
  ['fit', 'Meänkieli'],
  ['da', 'Dansk'],
  ['is', 'Íslenska'],
  ['fo', 'Føroyskt'],
  ['cs', 'Čeština'],
  ['af', 'Afrikaans'],
  ['zu', 'isiZulu'],
  ['xh', 'isiXhosa'],
  ['fi', 'Suomi']
];

// ------------------------------------------------------------
// 2. TILLGÄNGLIGA SPRÅK (för vilka innehåll finns)
// ------------------------------------------------------------
export const AVAILABLE = ALL_LANGUAGES.map(function(item) { return item[0]; });

// ------------------------------------------------------------
// 3. RTL-SPRÅK
// ------------------------------------------------------------
export const RTL_LANGS = ['ar', 'he', 'fa', 'ur'];

// ------------------------------------------------------------
// 4. FALLBACK-MAPPNING (BCP-47 → baskod)
// ------------------------------------------------------------
export const RELATED_FALLBACK = {
  "af-za": "af", "af-na": "af",
  "an": "es", "an-es": "es",
  "ar-eg": "ar", "ar-sa": "ar", "ar-dz": "ar", "ar-ma": "ar", "ar-iq": "ar", "ar-sy": "ar", "ar-lb": "ar", "ar-jo": "ar", "ar-ps": "ar", "ar-ye": "ar", "ar-om": "ar", "ar-ae": "ar", "ar-qa": "ar", "ar-bh": "ar", "ar-kw": "ar", "ar-ly": "ar", "ar-tn": "ar", "ar-sd": "ar", "ar-so": "ar", "ary": "ar", "arz": "ar", "apc": "ar", "aeb": "ar", "acm": "ar",
  "ast": "es", "ast-es": "es",
  "az": "tr", "az-az": "tr", "az-ir": "tr",
  "be": "uk", "be-by": "uk",
  "bg-bg": "bg",
  "bn-bd": "bn", "bn-in": "bn", "rkt": "bn",
  "ca": "es", "ca-ad": "es", "ca-es": "es", "ca-fr": "es", "ca-it": "es", "ca-valencia": "es",
  "ceb": "fil", "co": "it", "crh": "tr",
  "crs": "crs", "crs-sc": "crs",
  "cs-cz": "cs",
  "da-dk": "da", "da-gl": "da",
  "de-at": "de", "de-be": "de", "de-ch": "de", "de-de": "de", "de-li": "de", "bar": "de", "gsw": "de", "ksh": "de", "nds": "de",
  "el-gr": "el", "el-cy": "el", "grc": "el",
  "en-au": "en", "en-bz": "en", "en-ca": "en", "en-gb": "en", "en-gh": "en", "en-gy": "en", "en-hk": "en", "en-ie": "en", "en-in": "en", "en-jm": "en", "en-ke": "en", "en-mt": "en", "en-mw": "en", "en-my": "en", "en-ng": "en", "en-nz": "en", "en-ph": "en", "en-pk": "en", "en-sg": "en", "en-tt": "en", "en-tz": "en", "en-ug": "en", "en-us": "en", "en-za": "en", "ang": "en", "enm": "en", "sco": "en",
  "es-419": "es", "es-ar": "es", "es-bo": "es", "es-bz": "es", "es-cl": "es", "es-co": "es", "es-cr": "es", "es-cu": "es", "es-do": "es", "es-ec": "es", "es-es": "es", "es-gq": "es", "es-gt": "es", "es-hn": "es", "es-mx": "es", "es-ni": "es", "es-pa": "es", "es-pe": "es", "es-ph": "es", "es-pr": "es", "es-py": "es", "es-sv": "es", "es-us": "es", "es-uy": "es", "es-ve": "es", "eu": "es", "eu-es": "es", "eu-fr": "es", "ext": "es", "lad": "es", "gl-es": "es", "oc": "es", "oc-ar": "es", "oc-es": "es",
  "fa-af": "fa", "fa-ir": "fa", "ckb": "fa", "prs": "fa", "tg": "fa", "tg-tj": "fa",
  "fi-fi": "fi",
  "fil-ph": "fil", "tl": "fil", "tl-ph": "fil", "ilo": "fil",
  "fit": "fit", "fit-fi": "fit", "fit-no": "fit", "fit-se": "fit", "fi-se-tornio": "fit", "fi-tornio": "fit", "fkv": "fit", "fkv-fi": "fit", "fkv-no": "fit", "kvk": "fit",
  "fo": "fo", "fo-dk": "fo", "fo-fa": "fo", "fo-fare": "fo", "fo-fo": "fo", "fo-gl": "fo", "fo-no": "fo", "fo-se": "fo", "fao": "fo",
  "fr-be": "fr", "fr-bf": "fr", "fr-ca": "fr", "fr-cd": "fr", "fr-cg": "fr", "fr-ch": "fr", "fr-ci": "fr", "fr-cm": "fr", "fr-fr": "fr", "fr-gn": "fr", "fr-ht": "fr", "fr-lu": "fr", "fr-mc": "fr", "fr-ml": "fr", "fr-ne": "fr", "fr-pf": "fr", "fr-rw": "fr", "fr-sn": "fr", "fr-td": "fr",
  "fy": "nl", "gl": "es", "gag": "tr",
  "gn": "es", "gn-py": "es", "gug": "es",
  "he-il": "he", "yi": "he",
  "hi-in": "hi", "bho": "hi", "hif": "hi",
  "ht": "crs", "hu-hu": "hu",
  "id-id": "id", "ms": "id", "ms-bn": "id", "ms-id": "id", "ms-my": "id", "ms-sg": "id", "ind": "id", "zsm": "id",
  "is-is": "is",
  "it-ch": "it", "it-it": "it", "it-sm": "it", "it-va": "it", "lmo": "it", "scn": "it", "vec": "it",
  "ja-jp": "ja",
  "jv-id": "jv", "jav": "jv", "jvn": "jv",
  "ko-kp": "ko", "ko-kr": "ko",
  "mfe": "crs", "mwl": "pt",
  "nb": "no", "nb-no": "no", "nn": "no", "nn-no": "no", "no-no": "no", "nob": "no", "nno": "no",
  "nl-be": "nl", "nl-nl": "nl", "zea": "nl",
  "pa-in": "pa", "pa-pk": "pa", "pan": "pa", "pnb": "pa",
  "pl-pl": "pl", "szl": "pl",
  "pt-ao": "pt", "pt-br": "pt", "pt-ch": "pt", "pt-cv": "pt", "pt-gw": "pt", "pt-lu": "pt", "pt-mo": "pt", "pt-mz": "pt", "pt-pt": "pt", "pt-st": "pt", "pt-tl": "pt",
  "qu": "es", "qu-bo": "es", "qu-ec": "es", "qu-pe": "es", "quz": "es", "qve": "es", "qwh": "es",
  "ro-md": "ro", "ro-ro": "ro", "mo": "ro", "rup": "ro",
  "ru-by": "ru", "ru-kg": "ru", "ru-kz": "ru", "ru-md": "ru", "ru-ru": "ru", "ru-ua": "ru",
  "se": "se", "se-fi": "se", "se-no": "se", "se-se": "se", "sia": "se", "sjd": "se", "sjd-ru": "se", "sje": "se", "sje-no": "se", "sje-se": "se", "sjk": "se", "sjt": "se", "sju": "se", "sju-no": "se", "sju-se": "se", "sma": "se", "sma-no": "se", "sma-se": "se", "sme": "se", "smi": "se", "smi-fi": "se", "smi-no": "se", "smi-ru": "se", "smi-se": "se", "smj": "se", "smj-no": "se", "smj-se": "se", "smn": "se", "smn-fi": "se", "sms": "se", "sms-fi": "se", "sms-no": "se", "sms-ru": "se",
  "sk": "cs", "sk-sk": "cs",
  "sv-ax": "sv", "sv-fi": "sv", "sv-se": "sv",
  "sw-cd": "sw", "sw-ke": "sw", "sw-tz": "sw", "sw-ug": "sw",
  "th-th": "th",
  "tr-cy": "tr", "tr-tr": "tr",
  "uk-ua": "uk", "rue": "uk",
  "ur-in": "ur", "ur-pk": "ur",
  "vi-vn": "vi",
  "wuu": "zh", "yue": "yue", "yue-hk": "yue",
  "zh-cn": "zh", "zh-hans": "zh", "zh-hant": "zh", "zh-hk": "yue", "zh-mo": "yue", "zh-sg": "zh", "zh-tw": "zh",
  "wa": "fr", "wa-be": "fr", "wln": "fr",
  "li": "nl", "li-be": "nl", "li-nl": "nl", "lim": "nl",
  "lb": "de", "lb-lu": "de",
  "br": "fr", "br-fr": "fr",
  "sc": "it", "sc-it": "it",
  "rm": "it", "rm-ch": "it",
  "zu-za": "zu",
  "xh-za": "xh"
};

// ------------------------------------------------------------
// 5. HJÄLPFUNKTIONER
// ------------------------------------------------------------

export function pickBestLanguage(available = AVAILABLE, preferred = []) {
  const prefs = (preferred.length
    ? preferred
    : (typeof navigator !== 'undefined'
        ? (navigator.languages || [navigator.language])
        : [])
  ).map(function(s) { return String(s).toLowerCase(); });

  for (const raw of prefs) {
    const tag = raw.toLowerCase().trim();
    if (!tag) continue;

    // 1. Exakt match
    if (available.includes(tag)) return tag;

    // 2. Specifik fallback FÖRST (zh-hk → yue, en-us → en, osv.)
    if (RELATED_FALLBACK[tag] && available.includes(RELATED_FALLBACK[tag])) {
      return RELATED_FALLBACK[tag];
    }

    // 3. Bas-match — bara om ingen specifik fallback finns
    const base = tag.split('-')[0];
    if (available.includes(base)) return base;

    // 4. Bas-fallback
    if (RELATED_FALLBACK[base] && available.includes(RELATED_FALLBACK[base])) {
      return RELATED_FALLBACK[base];
    }

    // 5. Sista utväg
    try {
      const max = new Intl.Locale(tag).maximize();
      if (available.includes(max.language)) return max.language;
    } catch (e) {}
  }
  return available.includes('en') ? 'en' : available[0];
}

export function saveLanguage(lang) {
  try { localStorage.setItem('world-manifesto-lang', lang); } catch (e) {}
}

export function getSavedLanguage() {
  try { return localStorage.getItem('world-manifesto-lang'); } catch (e) { return null; }
}

export function setDocumentDirection(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = RTL_LANGS.includes(lang) ? 'rtl' : 'ltr';
}

export function populateLangSelect(selectEl, options) {
  if (!selectEl) return;
  options = options || {};
  const placeholder = options.placeholder || '';
  const selected = options.selected || '';
  selectEl.innerHTML = '';
  if (placeholder) {
    const opt0 = document.createElement('option');
    opt0.value = '';
    opt0.textContent = placeholder;
    selectEl.appendChild(opt0);
  }
  ALL_LANGUAGES.forEach(function(item) {
    const code = item[0];
    const name = item[1];
    const en = item[2];
    const opt = document.createElement('option');
    opt.value = code;
    opt.textContent = en ? name + ' / ' + en : name;
    if (code === selected) opt.selected = true;
    selectEl.appendChild(opt);
  });
}
