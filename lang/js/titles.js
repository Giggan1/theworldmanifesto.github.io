// ============================================================
// lang/js/titles.js
// Titlar och undertitlar per språk + flagga.
// ============================================================

export const LANG_META = {
  'sv':  { flag: 'flags/se.svg', name: 'Svenska',            title: 'Världsmanifestet',         subtitle: 'det definitiva överflödet' },
  'en':  { flag: 'flags/gb.svg', name: 'English',            title: 'The World Manifesto',      subtitle: 'the definitive abundance' },
  'zh':  { flag: 'flags/cn.svg', name: '简体中文',            title: '世界宣言',                  subtitle: '终极丰裕' },
  'yue': { flag: 'flags/hk.svg', name: '粵語 / Cantonese',   title: '世界宣言',                  subtitle: '終極豐裕' },
  'hi':  { flag: 'flags/in.svg', name: 'हिन्दी',              title: 'विश्व घोषणापत्र',           subtitle: 'निश्चित प्रचुरता' },
  'bn':  { flag: 'flags/bd.svg', name: 'বাংলা',              title: 'বিশ্ব ইশতেহার',              subtitle: 'চূড়ান্ত প্রাচুর্য' },
  'ur':  { flag: 'flags/pk.svg', name: 'اردو',               title: 'عالمی منشور',               subtitle: 'حتمی فراوانی' },
  'pa':  { flag: 'flags/pk.svg', name: 'ਪੰਜਾਬੀ / Punjabi',  title: 'ਵਿਸ਼ਵ ਘੋਸ਼ਣਾ ਪੱਤਰ',            subtitle: 'ਅੰਤਿਮ ਭਰਪੂਰਤਾ' },
  'id':  { flag: 'flags/id.svg', name: 'Bahasa Indonesia',   title: 'Manifest Dunia',           subtitle: 'kelimpahan definitif' },
  'jv':  { flag: 'flags/id.svg', name: 'Basa Jawa / Javanese', title: 'Manifesto Jagad',        subtitle: 'Manifesto kangge kalimpahan ingkang mutlak' },
  'es':  { flag: 'flags/es.svg', name: 'Español',            title: 'El Manifiesto Mundial',    subtitle: 'la abundancia definitiva' },
  'fr':  { flag: 'flags/fr.svg', name: 'Français',           title: 'Le Manifeste Mondial',     subtitle: "l'abondance définitive" },
  'de':  { flag: 'flags/de.svg', name: 'Deutsch',            title: 'Das Weltmanifest',         subtitle: 'Der definitive Überfluss' },
  'ar':  { flag: 'flags/sa.svg', name: 'العربية',             title: 'البيان العالمي',            subtitle: 'الوفرة النهائية' },
  'pt':  { flag: 'flags/pt.svg', name: 'Português',          title: 'O Manifesto Mundial',      subtitle: 'a abundância definitiva' },
  'ru':  { flag: 'flags/ru.svg', name: 'Русский',            title: 'Всемирный Манифест',       subtitle: 'окончательное изобилие' },
  'uk':  { flag: 'flags/ua.svg', name: 'Українська',         title: 'Всесвітній Маніфест',      subtitle: 'остаточний достаток' },
  'bg':  { flag: 'flags/bg.svg', name: 'Български',          title: 'Световен Манифест',        subtitle: 'окончателно изобилие' },
  'ja':  { flag: 'flags/jp.svg', name: '日本語',              title: '世界宣言',                  subtitle: '究極の豊かさ' },
  'fil': { flag: 'flags/ph.svg', name: 'Filipino',           title: 'Ang Pandaigdigang Manipesto', subtitle: 'ang tiyak na kasaganaan' },
  'ko':  { flag: 'flags/kr.svg', name: '한국어',              title: '세계 선언문',                subtitle: '최종적 풍요' },
  'th':  { flag: 'flags/th.svg', name: 'ไทย',                title: 'แถลงการณ์โลก',              subtitle: 'ความอุดมสมบูรณ์ขั้นสุดท้าย' },
  'vi':  { flag: 'flags/vn.svg', name: 'Tiếng Việt',         title: 'Tuyên Ngôn Thế Giới',      subtitle: 'sự phong phú cuối cùng' },
  'tr':  { flag: 'flags/tr.svg', name: 'Türkçe',             title: 'Dünya Manifestosu',        subtitle: 'nihai bolluk' },
  'fa':  { flag: 'flags/ir.svg', name: 'فارسی',              title: 'مانیفست جهانی',             subtitle: 'فراوانی نهایی' },
  'sw':  { flag: 'flags/tz.svg', name: 'Kiswahili',          title: 'Ilani ya Dunia',           subtitle: 'wingi wa mwisho' },
  'it':  { flag: 'flags/it.svg', name: 'Italiano',           title: 'Il Manifesto Mondiale',    subtitle: "l'abbondanza definitiva" },
  'pl':  { flag: 'flags/pl.svg', name: 'Polski',             title: 'Manifest Światowy',        subtitle: 'ostateczna obfitość' },
  'nl':  { flag: 'flags/nl.svg', name: 'Nederlands',         title: 'Het Wereldmanifest',       subtitle: 'de definitieve overvloed' },
  'ro':  { flag: 'flags/ro.svg', name: 'Română',             title: 'Manifestul Mondial',       subtitle: 'abundența definitivă' },
  'el':  { flag: 'flags/gr.svg', name: 'Ελληνικά',           title: 'Παγκόσμιο Μανιφέστο',      subtitle: 'η οριστική αφθονία' },
  'hu':  { flag: 'flags/hu.svg', name: 'Magyar',             title: 'Világkiáltvány',           subtitle: 'a végső bőség' },
  'he':  { flag: 'flags/il.svg', name: 'עברית',              title: 'המניפסט העולמי',            subtitle: 'השפע המוחלט' },
  'crs': { flag: 'flags/sc.svg', name: 'Seselwa',            title: 'Manifest Lemonn',          subtitle: 'labondans definitif' },
  'no':  { flag: 'flags/no.svg', name: 'Norsk',              title: 'Verdensmanifestet',        subtitle: 'den definitive overfloden' },
  'se':  { flag: 'flags/dsg.svg', name: 'Davvisámegiella',   title: 'Máilmmi Manifesta',        subtitle: 'loahpalaš valjisvuohta' },
  'fit': { flag: 'flags/fit.svg', name: 'Meänkieli',         title: 'Mailmanmanifesti',         subtitle: 'lopullinen yltäkylläisyys' },
  'da':  { flag: 'flags/dk.svg', name: 'Dansk',              title: 'Verdensmanifestet',        subtitle: 'den definitive overflod' },
  'is':  { flag: 'flags/is.svg', name: 'Íslenska',           title: 'Heimsmanifestið',          subtitle: 'endanleg gnægð' },
  'fo':  { flag: 'flags/fo.svg', name: 'Føroyskt',           title: 'Heimsmanifestið',          subtitle: 'endalig nøgd' },
  'cs':  { flag: 'flags/cz.svg', name: 'Čeština',            title: 'Světový Manifest',         subtitle: 'definitivní hojnost' },
  'af':  { flag: 'flags/za.svg', name: 'Afrikaans',          title: 'Die Wêreldmanifest',       subtitle: 'die definitiewe oorvloed' },
  'zu':  { flag: 'flags/za.svg', name: 'isiZulu',            title: 'Imanifesto Yomhlaba',      subtitle: 'ukuchichima okuphelele' },
  'xh':  { flag: 'flags/za.svg', name: 'isiXhosa',           title: 'Imanifesto Yehlabathi',    subtitle: 'ubuninzi obugqibeleleyo' },
  'fi':  { flag: 'flags/fi.svg', name: 'Suomi',              title: 'Maailmanmanifesti',        subtitle: 'lopullinen yltäkylläisyys' }
};

export function getLangMeta(code) {
  return LANG_META[code] || LANG_META['en'];
}
