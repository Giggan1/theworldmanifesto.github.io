import { AVAILABLE, RELATED_FALLBACK, pickBestLanguage } from './lang/js/lang.js';

(function() {
    'use strict';

    // Hämta språk från URL eller webbläsaren med fallback
    const urlParams = new URLSearchParams(window.location.search);
    const urlLangRaw = urlParams.get('lang');
    let currentLang;
    if (urlLangRaw) {
        currentLang = pickBestLanguage(AVAILABLE, [urlLangRaw]);
    } else {
        currentLang = pickBestLanguage();
    }

    function getBasePath() {
        const path = window.location.pathname;
        const parts = path.split('/').filter(p => p.length > 0);
        const depth = parts.length > 0 ? parts.length - 1 : 0;
        return '../'.repeat(Math.max(0, depth));
    }
    const base = getBasePath();

    const translations = {
        'sv': { email: 'E-post webbmaster', copyright: 'Världsmanifestet – Publicerat 2026', translated: 'Världsmanifestet är översatt till 45 språk – vilket innebär att fler än 7 av 10 människor i världen kan läsa det på sitt eget språk.' },
        'en': { email: 'Email webmaster', copyright: 'The World Manifesto – Published 2026', translated: 'The World Manifesto is translated into 45 languages – meaning that more than 7 out of 10 people in the world can read it in their own language.' },
        'fi': { email: 'Sähköposti webmasterille', copyright: 'Maailmanmanifesti – Julkaistu 2026', translated: 'Maailmanmanifesti on käännetty 45 kielelle – mikä tarkoittaa, että yli 7 ihmistä 10:stä maailmassa voi lukea sen omalla kielellään.' },
        'zh': { email: '给网站管理员的电子邮件', copyright: '世界宣言 – 出版于 2026 年', translated: '《世界宣言》已被翻译成45种语言——这意味着世界上超过十分之七的人可以用自己的语言阅读它。' },
        'yue': { email: '電郵網站管理員', copyright: '世界宣言 – 2026年出版', translated: '《世界宣言》已經翻譯成45種語言——即係話全球超過七成人口可以用自己嘅母語閱讀。' },
        'jv': { email: 'Email webmaster', copyright: 'Manifesto Jagad – Diterbitake 2026', translated: 'Manifesto Jagad wis diterjemahake menyang 45 basa – tegese luwih saka 7 saka 10 wong ing donya bisa maca nganggo basane dhewe.' },
        'pa': { email: 'ਵੈੱਬਮਾਸਟਰ ਨੂੰ ਈਮੇਲ', copyright: 'ਵਿਸ਼ਵ ਘੋਸ਼ਣਾ ਪੱਤਰ – 2026 ਵਿੱਚ ਪ੍ਰਕਾਸ਼ਿਤ', translated: 'ਵਿਸ਼ਵ ਘੋਸ਼ਣਾ ਪੱਤਰ ਦਾ 45 ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਅਨੁਵਾਦ ਕੀਤਾ ਗਿਆ ਹੈ – ਜਿਸਦਾ ਮਤਲਬ ਹੈ ਕਿ ਦੁਨੀਆ ਵਿੱਚ 10 ਵਿੱਚੋਂ 7 ਤੋਂ ਵੱਧ ਲੋਕ ਇਸਨੂੰ ਆਪਣੀ ਮਾਤ ਭਾਸ਼ਾ ਵਿੱਚ ਪੜ੍ਹ ਸਕਦੇ ਹਨ।' },
        'hi': { email: 'वेबमास्टर को ईमेल', copyright: 'विश्व घोषणापत्र – 2026 में प्रकाशित', translated: 'विश्व घोषणापत्र का 45 भाषाओं में अनुवाद किया गया है – जिसका अर्थ है कि दुनिया में 10 में से 7 से अधिक लोग इसे अपनी भाषा में पढ़ सकते हैं।' },
        'es': { email: 'Correo electrónico del webmaster', copyright: 'El Manifiesto Mundial – Publicado en 2026', translated: 'El Manifiesto Mundial está traducido a 45 idiomas, lo que significa que más de 7 de cada 10 personas en el mundo pueden leerlo en su propio idioma.' },
        'fr': { email: 'E-mail du webmaster', copyright: 'Le Manifeste Mondial – Publié en 2026', translated: 'Le Manifeste Mondial est traduit en 45 langues, ce qui signifie que plus de 7 personnes sur 10 dans le monde peuvent le lire dans leur propre langue.' },
        'de': { email: 'E-Mail an den Webmaster', copyright: 'Weltmanifest – Veröffentlicht 2026', translated: 'Das Weltmanifest ist in 45 Sprachen übersetzt, was bedeutet, dass mehr als 7 von 10 Menschen auf der Welt es in ihrer eigenen Sprache lesen können.' },
        'ar': { email: 'بريد إلكتروني لمدير الموقع', copyright: 'البيان العالمي – نشر في 2026', translated: 'تمت ترجمة البيان العالمي إلى 45 لغة – مما يعني أن أكثر من 7 من كل 10 أشخاص في العالم يمكنهم قراءته بلغتهم الخاصة.' },
        'id': { email: 'Email webmaster', copyright: 'Manifest Dunia – Diterbitkan 2026', translated: 'Manifest Dunia telah diterjemahkan ke dalam 45 bahasa – artinya lebih dari 7 dari 10 orang di dunia dapat membacanya dalam bahasa mereka sendiri.' },
        'bn': { email: 'ওয়েবমাস্টারকে ইমেইল', copyright: 'বিশ্ব ইশতেহার – ২০২৬ সালে প্রকাশিত', translated: 'বিশ্ব ইশতেহারটি ৪৫টি ভাষায় অনূদিত হয়েছে – যার অর্থ বিশ্বের ১০ জনের মধ্যে ৭ জনের বেশি মানুষ এটি তাদের নিজের ভাষায় পড়তে পারেন।' },
        'pt': { email: 'E-mail do webmaster', copyright: 'O Manifesto Mundial – Publicado em 2026', translated: 'O Manifesto Mundial está traduzido em 45 idiomas – o que significa que mais de 7 em cada 10 pessoas no mundo podem lê-lo na sua própria língua.' },
        'ru': { email: 'Электронная почта веб-мастера', copyright: 'Всемирный манифест – Опубликован в 2026 году', translated: 'Всемирный манифест переведен на 45 языков – это означает, что более 7 из 10 человек в мире могут прочитать его на своем родном языке.' },
        'uk': { email: 'Електронна пошта веб-майстра', copyright: 'Всесвітній маніфест – Опубліковано в 2026', translated: 'Всесвітній маніфест перекладено 45 мовами – це означає, що понад 7 із 10 людей у світі можуть прочитати його рідною мовою.' },
        'bg': { email: 'Имейл на уебмастъра', copyright: 'Световен манифест – Публикуван през 2026', translated: 'Световният манифест е преведен на 45 езика – което означава, че повече от 7 от всеки 10 души в света могат да го прочетат на родния си език.' },
        'ur': { email: 'ویب ماسٹر کو ای میل', copyright: 'عالمی منشور – 2026 میں شائع ہوا', translated: 'عالمی منشور کا 45 زبانوں میں ترجمہ کیا گیا ہے – جس کا مطلب ہے کہ دنیا کے 10 میں سے 7 سے زائد افراد اسے اپنی زبان میں پڑھ سکتے ہیں۔' },
        'ja': { email: 'ウェブマスターへのメール', copyright: '世界宣言 – 2026年発行', translated: '世界宣言は45の言語に翻訳されており、世界の10人中7人以上が母国語で読むことができます。' },
        'fil': { email: 'Email sa webmaster', copyright: 'Manipesto ng Mundo – Nailathala 2026', translated: 'Ang Manipesto ng Mundo ay isinalin sa 45 wika – ibig sabihin, higit sa 7 sa bawat 10 tao sa mundo ang makakabasa nito sa kanilang sariling wika.' },
        'ko': { email: '웹마스터에게 이메일 보내기', copyright: '세계 선언문 – 2026년 출판', translated: '세계 선언문은 45개 언어로 번역되었으며, 이는 세계 인구 10명 중 7명 이상이 자신의 언어로 읽을 수 있다는 것을 의미합니다.' },
        'th': { email: 'อีเมลถึงผู้ดูแลเว็บ', copyright: 'แถลงการณ์โลก – เผยแพร่ 2026', translated: 'แถลงการณ์โลกได้รับการแปลเป็น 45 ภาษา ซึ่งหมายความว่าผู้คนมากกว่า 7 ใน 10 คนทั่วโลกสามารถอ่านได้ในภาษาของตนเอง' },
        'vi': { email: 'Email quản trị viên', copyright: 'Tuyên ngôn Thế giới – Xuất bản năm 2026', translated: 'Tuyên ngôn Thế giới đã được dịch sang 45 ngôn ngữ – nghĩa là hơn 7 trong số 10 người trên thế giới có thể đọc nó bằng ngôn ngữ của họ.' },
        'tr': { email: 'Webmaster\'a e-posta', copyright: 'Dünya Manifestosu – 2026\'da yayınlandı', translated: 'Dünya Manifestosu 45 dile çevrildi; bu, dünyadaki 10 kişiden 7\'den fazlasının onu kendi dilinde okuyabileceği anlamına geliyor.' },
        'fa': { email: 'ایمیل به مدیریت وب‌سایت', copyright: 'مانیفست جهانی – منتشر شده در 2026', translated: 'مانیفست جهانی به 45 زبان ترجمه شده است – به این معنی که بیش از 7 نفر از هر 10 نفر در جهان می‌توانند آن را به زبان خود بخوانند.' },
        'sw': { email: 'Barua pepe kwa msimamizi wa wavuti', copyright: 'Ilani ya Dunia – Imechapishwa 2026', translated: 'Ilani ya Dunia imetafsiriwa katika lugha 45 – ikimaanisha kuwa zaidi ya watu 7 kati ya 10 duniani wanaweza kuisoma kwa lugha yao.' },
        'it': { email: 'Email al webmaster', copyright: 'Manifesto Mondiale – Pubblicato nel 2026', translated: 'Il Manifesto Mondiale è tradotto in 45 lingue, il che significa che più di 7 persone su 10 nel mondo possono leggerlo nella propria lingua.' },
        'pl': { email: 'E-mail do webmastera', copyright: 'Manifest Światowy – Opublikowano w 2026', translated: 'Manifest Światowy został przetłumaczony na 45 języków – co oznacza, że ponad 7 na 10 osób na świecie może przeczytać go we własnym języku.' },
        'nl': { email: 'E-mail naar webmaster', copyright: 'Wereldmanifest – Gepubliceerd in 2026', translated: 'Het Wereldmanifest is vertaald in 45 talen – wat betekent dat meer dan 7 op de 10 mensen in de wereld het in hun eigen taal kunnen lezen.' },
        'ro': { email: 'E-mail către webmaster', copyright: 'Manifestul Mondial – Publicat în 2026', translated: 'Manifestul Mondial este tradus în 45 de limbi – ceea ce înseamnă că peste 7 din 10 oameni din lume îl pot citi în limba lor.' },
        'el': { email: 'Email στον διαχειριστή ιστοσελίδας', copyright: 'Παγκόσμιο Μανιφέστο – Δημοσιεύθηκε το 2026', translated: 'Το Παγκόσμιο Μανιφέστο έχει μεταφραστεί σε 45 γλώσσες – που σημαίνει ότι περισσότεροι από 7 στους 10 ανθρώπους στον κόσμο μπορούν να το διαβάσουν στη γλώσσα τους.' },
        'af': { email: 'E-pos aan webmeester', copyright: 'Wêreldmanifest – Gepubliseer 2026', translated: 'Die Wêreldmanifest is in 45 tale vertaal – wat beteken dat meer as 7 uit elke 10 mense in die wêreld dit in hul eie taal kan lees.' },
        'zu': { email: 'I-imeyili kumphathi wewebhu', copyright: 'IManifesto Yomhlaba – Ishicilelwe ngo-2026', translated: 'IManifesto Yomhlaba ihunyushwe ngezilimi ezingama-45 – okusho ukuthi abantu abangaphezu kwe-7 kwabangu-10 emhlabeni bangayifunda ngolimi lwabo.' },
        'xh': { email: 'I-imeyili kumphathi wewebhu', copyright: 'IManifesto Yehlabathi – Ishicilelwe ngo-2026', translated: 'IManifesto Yehlabathi iguqulelwe kwiilwimi ezingama-45 – nto leyo ethetha ukuba abantu abangaphezu kwabasi-7 kwabali-10 ehlabathini bangayifunda ngolwimi lwabo.' },
        'cs': { email: 'E-mail správci webu', copyright: 'Světový manifest – Vydáno 2026', translated: 'Světový manifest byl přeložen do 45 jazyků – což znamená, že více než 7 z 10 lidí na světě si jej může přečíst ve svém vlastním jazyce.' },
        'hu': { email: 'E-mail a webmesternek', copyright: 'Világkiáltvány – Kiadva 2026-ban', translated: 'A Világkiáltvány 45 nyelvre lett lefordítva – ami azt jelenti, hogy a világ 10 emberéből több mint 7 el tudja olvasni a saját nyelvén.' },
        'he': { email: 'דוא"ל למנהל האתר', copyright: 'מניפסט העולם – פורסם ב-2026', translated: 'המניפסט העולמי תורגם ל-45 שפות – כלומר יותר מ-7 מתוך 10 אנשים בעולם יכולים לקרוא אותו בשפתם.' },
        'crs': { email: 'Imel pou webmaster', copyright: 'Manifest lemonn – Pibliye 2026', translated: 'Manifest lemonn in tradwir dan 45 lang – sa i veu dir ki plis ke 7 dimoun dan 10 dan lemonn kapab li sa dan zot prop lang.' },
        'no': { email: 'E-post til webmaster', copyright: 'Verdensmanifestet – Publisert 2026', translated: 'Verdensmanifestet er oversatt til 45 språk – noe som betyr at mer enn 7 av 10 mennesker i verden kan lese det på sitt eget språk.' },
        'se': { email: 'E-poasta neahttameasterii', copyright: 'Máilmmi Manifesta – Almmustuvvon 2026', translated: 'Máilmmi Manifesta lea jorgaluvvon 45 giellii – dan mearkkaša ahte eanet go 7 olbmo 10:s máilmmis sáhttet lohkat dan iežaset gillii.' },
        'fit': { email: 'Sähköposti webmasterille', copyright: 'Mailmanmanifesti – Julkaistu 2026', translated: 'Mailmanmanifesti on käännetty 45 kielelle – mikä tarkoittaa, että yli 7 ihmistä 10:stä maailmassa voi lukea sen omalla kielellään.' },
        'da': { email: 'E-mail til webmaster', copyright: 'Verdensmanifestet – Udgivet 2026', translated: 'Verdensmanifestet er oversat til 45 sprog – hvilket betyder, at mere end 7 ud af 10 mennesker i verden kan læse det på deres eget sprog.' },
        'is': { email: 'Tölvupóstur til vefstjóra', copyright: 'Heimsmanifestið – Gefið út 2026', translated: 'Heimsmanifestið er þýtt á 45 tungumál – sem þýðir að meira en 7 af hverjum 10 manneskjum í heiminum geta lesið það á sínu eigin tungumáli.' },
        'fo': { email: 'T-postur til vevstjóra', copyright: 'Heimsskráin – Útgivið 2026', translated: 'Heimsskráin er týdd til 45 mál – sum merkir, at meira enn 7 av hvørjum 10 fólkum í heiminum kunnu lesa hana á sínum egna máli.' },
    };

    const t = translations[currentLang] || translations['en'];

    const footer = document.createElement('footer');
    footer.style.cssText = 'margin-top: 60px; padding: 20px 0 10px 0; text-align: center; font-family: Georgia, serif; border-top: 1px solid #e0e0e0; width: 100%; clear: both; background-color: #FFFFFB;';

    const webmasterP = document.createElement('p');
    webmasterP.style.cssText = 'font-size: 16px; margin-bottom: 5px; text-align: center;';

    const emailLink = document.createElement('a');
    emailLink.href = 'mailto:theworldmanifesto@gmail.com';
    emailLink.style.cssText = 'color: #1a1a1a; text-decoration: none; transition: color 0.3s; display: inline-flex; align-items: center; gap: 6px;';
    emailLink.onmouseover = function() { this.style.color = '#555'; };
    emailLink.onmouseout = function() { this.style.color = '#1a1a1a'; };

    const mailIcon = document.createElement('img');
    mailIcon.src = base + 'pics/mail.svg';
    mailIcon.alt = '';
    mailIcon.style.cssText = 'width: 16px; height: 16px; vertical-align: middle;';
    emailLink.appendChild(mailIcon);

    const emailText = document.createTextNode(t.email);
    emailLink.appendChild(emailText);

    webmasterP.appendChild(emailLink);

    // Svenska flaggan till höger om e-postlänken
    const seFlag = document.createElement('img');
    seFlag.src = base + 'lang/flags/se.svg';
    seFlag.alt = 'Sverige';
    seFlag.style.cssText = 'width: 20px; height: auto; margin-left: 8px; vertical-align: middle; border: 1px solid #333; border-radius: 2px;';
    webmasterP.appendChild(seFlag);

    footer.appendChild(webmasterP);

    const copyrightP = document.createElement('p');
    copyrightP.style.cssText = 'font-size: 14px; color: #666; margin-top: 5px; margin-bottom: 0; text-align: center;';
    copyrightP.textContent = t.copyright;
    footer.appendChild(copyrightP);

    const infoP = document.createElement('p');
    infoP.style.cssText = 'font-size: 11px; color: #888; margin-top: 10px; text-align: center; font-family: system-ui, sans-serif;';
    infoP.innerHTML = '<img src="' + base + 'menu_icons/languages.svg" style="width:16px;height:16px;vertical-align:middle;margin-right:4px;"> ' + t.translated;
    footer.appendChild(infoP);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() { document.body.appendChild(footer); });
    } else {
        document.body.appendChild(footer);
    }
})();
