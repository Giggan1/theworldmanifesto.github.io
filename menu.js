import { AVAILABLE, RELATED_FALLBACK, pickBestLanguage } from './lang/js/lang.js';

// ============================================================
// MENU.JS - Global meny för The World Manifesto (42 språk)
// FIXAD: Baskiska eu -> es, galiciska gl -> es, katalanska ca -> es osv.
// Ingen localStorage - varje besök går på webbläsarens språk
// UPPDATERAD: "About" / "Om" som sista menyval med banner.png
// FIXAD: TL -> FIL (Filippinska)
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

    // Tropics undantag - om vi är på tropics.html ska menyn vara längst vänster
    if (window.location.pathname.toLowerCase().includes('tropics')) {
        document.body.classList.add('tropics-left');
    }

    // --- HÄMTA SPRÅK FRÅN WEBBLÄSAREN MED FALLBACK ---
    const currentLang = pickBestLanguage();

    // --- MAPPING FÖR FLAGGBILDER (från ../lang/flags/) ---
    const flagMapping = {
        'sv': 'se.svg', 'en': 'gb.svg', 'fi': 'fi.svg', 'zh': 'cn.svg',
        'yue': 'hk.svg', 'jv': 'id.svg', 'pa': 'pk.svg',
        'hi': 'in.svg', 'es': 'es.svg', 'fr': 'fr.svg', 'de': 'de.svg',
        'ar': 'sa.svg', 'id': 'id.svg', 'bn': 'bd.svg', 'pt': 'pt.svg',
        'ru': 'ru.svg', 'uk': 'ua.svg', 'bg': 'bg.svg', 'ur': 'pk.svg',
        'ja': 'jp.svg', 'fil': 'ph.svg', 'ko': 'kr.svg', 'th': 'th.svg',
        'vi': 'vn.svg', 'tr': 'tr.svg', 'fa': 'ir.svg', 'sw': 'tz.svg',
        'it': 'it.svg', 'pl': 'pl.svg', 'nl': 'nl.svg', 'ro': 'ro.svg',
        'el': 'gr.svg', 'af': 'za.svg', 'zu': 'za.svg', 'xh': 'za.svg',
        'cs': 'cz.svg', 'hu': 'hu.svg', 'he': 'il.svg', 'crs': 'sc.svg',
        'no': 'no.svg', 'se': 'dsg.svg', 'fit': 'fit.svg', 'da': 'dk.svg',
        'is': 'is.svg', 'fo': 'fo.svg'
    };

    // --- ORDBOK FÖR ALLA 42 SPRÅK ---
    const translations = {
        'sv': { menu: 'MENY', home: 'HEM', manifesto: 'Läs Världsmanifestet', staircase: 'Frihetstrappan (english)', tropics: 'Tropikerna', robotel: 'Robotel', qr: 'QR', share: 'Dela', about: 'Om' },
        'en': { menu: 'MENU', home: 'HOME', manifesto: 'Read The World Manifesto', staircase: 'Freedom Staircase', tropics: 'The Tropics', robotel: 'Robotel', qr: 'QR', share: 'Share', about: 'About' },
        'fi': { menu: 'VALIKKO', home: 'ETUSIVU', manifesto: 'Lue Maailmanmanifesti', staircase: 'Vapauden portaat (english)', tropics: 'Trooppiset alueet', robotel: 'Robotel', qr: 'QR', share: 'Jaa', about: 'Tietoja' },
        'zh': { menu: '菜单', home: '首页', manifesto: '阅读世界宣言', staircase: '自由阶梯 (english)', tropics: '热带地区', robotel: '机器人', qr: 'QR', share: '分享', about: '关于' },
        'yue': { menu: '選單', home: '主頁', manifesto: '閱讀世界宣言', staircase: '自由樓梯 (english)', tropics: '熱帶地區', robotel: '機械人酒店', qr: 'QR', share: '分享', about: '關於' },
        'jv': { menu: 'MENU', home: 'NGAREP', manifesto: 'Waca Manifesto Jagad', staircase: 'Tangga Kamardikan (english)', tropics: 'Daerah Tropis', robotel: 'Robotel', qr: 'QR', share: 'Bagikan', about: 'Babagan' },
        'pa': { menu: 'ਮੀਨੂ', home: 'ਘਰ', manifesto: 'ਵਿਸ਼ਵ ਘੋਸ਼ਣਾ ਪੱਤਰ ਪੜ੍ਹੋ', staircase: 'ਆਜ਼ਾਦੀ ਦੀ ਪੌੜੀ (english)', tropics: 'ਗਰਮ ਖੰਡੀ ਖੇਤਰ', robotel: 'ਰੋਬੋਟਲ', qr: 'QR', share: 'ਸਾਂਝਾ ਕਰੋ', about: 'ਬਾਰੇ' },        
        'hi': { menu: 'मेनू', home: 'होम', manifesto: 'विश्व घोषणापत्र पढ़ें', staircase: 'स्वतंत्रता सीढ़ी (english)', tropics: 'उष्णकटिबंधीय', robotel: 'रोबोटेल', qr: 'QR', share: 'साझा करें', about: 'परिचय' },
        'es': { menu: 'MENÚ', home: 'INICIO', manifesto: 'Leer El Manifiesto Mundial', staircase: 'Escalera de la Libertad (english)', tropics: 'Los Trópicos', robotel: 'Robotel', qr: 'QR', share: 'Compartir', about: 'Acerca de' },
        'fr': { menu: 'MENU', home: 'ACCUEIL', manifesto: 'Lire Le Manifeste Mondial', staircase: 'Escalier de la Liberté (english)', tropics: 'Les Tropiques', robotel: 'Robotel', qr: 'QR', share: 'Partager', about: 'À propos' },
        'de': { menu: 'MENÜ', home: 'STARTSEITE', manifesto: 'Das Weltmanifest lesen', staircase: 'Freiheitstreppe (english)', tropics: 'Die Tropen', robotel: 'Robotel', qr: 'QR', share: 'Teilen', about: 'Über' },
        'ar': { menu: 'القائمة', home: 'الرئيسية', manifesto: 'اقرأ البيان العالمي', staircase: 'سلم الحرية (english)', tropics: 'المناطق الاستوائية', robotel: 'روbotel', qr: 'QR', share: 'مشاركة', about: 'حول' },
        'id': { menu: 'MENU', home: 'BERANDA', manifesto: 'Baca Manifest Dunia', staircase: 'Tangga Kebebasan (english)', tropics: 'Daerah Tropis', robotel: 'Robotel', qr: 'QR', share: 'Bagikan', about: 'Tentang' },
        'bn': { menu: 'মেনু', home: 'হোম', manifesto: 'বিশ্ব ইশতেহার পড়ুন', staircase: 'স্বাধীনতার সিঁড়ি (english)', tropics: 'ক্রান্তীয় অঞ্চল', robotel: 'রোবোটেল', qr: 'QR', share: 'শেয়ার করুন', about: 'সম্পর্কে' },
        'pt': { menu: 'MENU', home: 'INÍCIO', manifesto: 'Ler O Manifesto Mundial', staircase: 'Escada da Liberdade (english)', tropics: 'Os Trópicos', robotel: 'Robotel', qr: 'QR', share: 'Compartilhar', about: 'Sobre' },
        'ru': { menu: 'МЕНЮ', home: 'ГЛАВНАЯ', manifesto: 'Читать Всемирный манифест', staircase: 'Лестница Свободы (english)', tropics: 'Тропики', robotel: 'Роботель', qr: 'QR', share: 'Поделиться', about: 'О нас' },
        'uk': { menu: 'МЕНЮ', home: 'ГОЛОВНА', manifesto: 'Читати Всесвітній маніфест', staircase: 'Сходи Свободи (english)', tropics: 'Тропіки', robotel: 'Роботель', qr: 'QR', share: 'Поділитися', about: 'Про нас' },
        'bg': { menu: 'МЕНЮ', home: 'НАЧАЛО', manifesto: 'Прочетете Световния манифест', staircase: 'Стълбата на свободата (english)', tropics: 'Тропиците', robotel: 'Роботель', qr: 'QR', share: 'Сподели', about: 'Относно' },
        'ur': { menu: 'مینو', home: 'ہوم', manifesto: 'عالمی منشور پڑھیں', staircase: 'آزادی کی سیڑھی (english)', tropics: 'اشنکٹبندیی', robotel: 'روبوٹیل', qr: 'QR', share: 'شیئر کریں', about: 'کے بارے میں' },
        'ja': { menu: 'メニュー', home: 'ホーム', manifesto: '世界宣言を読む', staircase: '自由の階段 (english)', tropics: '熱帯地域', robotel: 'ロボテル', qr: 'QR', share: '共有', about: '概要' },
        'fil': { menu: 'MENU', home: 'HOME', manifesto: 'Basahin ang Manipesto ng Mundo', staircase: 'Hagdan ng Kalayaan (english)', tropics: 'Ang Tropiko', robotel: 'Robotel', qr: 'QR', share: 'Ibahagi', about: 'Tungkol' },
        'ko': { menu: '메뉴', home: '홈', manifesto: '세계 선언문 읽기', staircase: '자유의 계단 (english)', tropics: '열대 지방', robotel: '로보텔', qr: 'QR', share: '공유', about: '소개' },
        'th': { menu: 'เมนู', home: 'หน้าแรก', manifesto: 'อ่านแถลงการณ์โลก', staircase: 'บันไดเสรีภาพ (english)', tropics: 'เขตร้อน', robotel: 'โรโบเทล', qr: 'QR', share: 'แชร์', about: 'เกี่ยวกับ' },
        'vi': { menu: 'MENU', home: 'TRANG CHỦ', manifesto: 'Đọc Tuyên ngôn Thế giới', staircase: 'Cầu thang Tự do (english)', tropics: 'Vùng nhiệt đới', robotel: 'Robotel', qr: 'QR', share: 'Chia sẻ', about: 'Giới thiệu' },
        'tr': { menu: 'MENÜ', home: 'ANA SAYFA', manifesto: 'Dünya Manifestosu\'nu Oku', staircase: 'Özgürlük Merdiveni (english)', tropics: 'Tropikler', robotel: 'Robotel', qr: 'QR', share: 'Paylaş', about: 'Hakkında' },
        'fa': { menu: 'منو', home: 'خانه', manifesto: 'مانیفست جهانی را بخوانید', staircase: 'پلکان آزادی (english)', tropics: 'مناطق استوایی', robotel: 'روbotel', qr: 'QR', share: 'اشتراک‌گذاری', about: 'درباره' },
        'sw': { menu: 'MENU', home: 'NYUMBANI', manifesto: 'Soma Ilani ya Dunia', staircase: 'Ngazi ya Uhuru (english)', tropics: 'Maeneo ya Tropiki', robotel: 'Robotel', qr: 'QR', share: 'Shiriki', about: 'Kuhusu' },
        'it': { menu: 'MENU', home: 'HOME', manifesto: 'Leggi il Manifesto Mondiale', staircase: 'Scala della Libertà (english)', tropics: 'I Tropici', robotel: 'Robotel', qr: 'QR', share: 'Condividi', about: 'Informazioni' },
        'pl': { menu: 'MENU', home: 'STRONA GŁÓWNA', manifesto: 'Przeczytaj Manifest Światowy', staircase: 'Schody Wolności (english)', tropics: 'Tropiki', robotel: 'Robotel', qr: 'QR', share: 'Udostępnij', about: 'O nas' },
        'nl': { menu: 'MENU', home: 'HOME', manifesto: 'Lees het Wereldmanifest', staircase: 'Vrijheidstrap (english)', tropics: 'De Tropen', robotel: 'Robotel', qr: 'QR', share: 'Delen', about: 'Over' },
        'ro': { menu: 'MENU', home: 'ACASĂ', manifesto: 'Citiți Manifestul Mondial', staircase: 'Scara Libertății (english)', tropics: 'Tropicele', robotel: 'Robotel', qr: 'QR', share: 'Distribuie', about: 'Despre' },
        'el': { menu: 'ΜΕΝΟΥ', home: 'ΑΡΙΚΗ', manifesto: 'Διαβάστε το Παγκόσμιο Μανιφέστο', staircase: 'Σκάλα της Ελευθερίας (english)', tropics: 'Οι Τροπικοί', robotel: 'Ρομποτέλ', qr: 'QR', share: 'Μοιραστείτε', about: 'Σχετικά' },
        'af': { menu: 'MENU', home: 'TUIS', manifesto: 'Lees die Wêreldmanifest', staircase: 'Vryheidstrap (english)', tropics: 'Die Trope', robotel: 'Robotel', qr: 'QR', share: 'Deel', about: 'Oor' },
        'zu': { menu: 'IMENU', home: 'IKHAYA', manifesto: 'Funda iManifesto Yomhlaba', staircase: 'Izitebhisi Zenkululeko (english)', tropics: 'Izindawo Ezishisayo', robotel: 'Robotel', qr: 'QR', share: 'Yabelana', about: 'Mayelana' },
        'xh': { menu: 'IMENU', home: 'IKHAYA', manifesto: 'Funda iManifesto Yehlabathi', staircase: 'Izinyuko Zenkululeko (english)', tropics: 'Iindawo Ezishushu', robotel: 'Robotel', qr: 'QR', share: 'Yabelana', about: 'Malunga' },
        'cs': { menu: 'MENU', home: 'DOMŮ', manifesto: 'Přečtěte si Světový manifest', staircase: 'Schody svobody (english)', tropics: 'Tropy', robotel: 'Robotel', qr: 'QR', share: 'Sdílet', about: 'O nás' },
        'hu': { menu: 'MENÜ', home: 'KEZDŐLAP', manifesto: 'Olvassa el a Világkiáltványt', staircase: 'A Szabadság Lépcsői (english)', tropics: 'A Trópusok', robotel: 'Robotel', qr: 'QR', share: 'Megosztás', about: 'Névjegy' },
        'he': { menu: 'תפריט', home: 'בית', manifesto: 'קראו את מניפסט העולם', staircase: 'מדרגות החירות (english)', tropics: 'האזורים הטרופיים', robotel: 'רובוטל', qr: 'QR', share: 'שתף', about: 'אודות' },
        'crs': { menu: 'MENU', home: 'LAK', manifesto: 'Lir Manifest lemonn', staircase: 'Leskal Libète (english)', tropics: 'Latropik', robotel: 'Robotel', qr: 'QR', share: 'Partaz', about: 'Konsernan' },
        'no': { menu: 'MENY', home: 'HJEM', manifesto: 'Les Verdensmanifestet', staircase: 'Frihetstrappen (english)', tropics: 'Tropene', robotel: 'Robotel', qr: 'QR', share: 'Del', about: 'Om' },
        'se': { menu: 'MENY', home: 'RUVŦOT', manifesto: 'Loga Máilmmi Manifesta', staircase: 'Frihetstrappa (english)', tropics: 'Tropiija', robotel: 'Robotel', qr: 'QR', share: 'Juoge', about: 'Birra' },
        'fit': { menu: 'VALIKKO', home: 'ETUSIVU', manifesto: 'Lukea Mailmanmanifesti', staircase: 'Vapauden portaat (english)', tropics: 'Trooppiset', robotel: 'Robotel', qr: 'QR', share: 'Jaa', about: 'Tietoja' },
        'da': { menu: 'MENU', home: 'HJEM', manifesto: 'Læs Verdensmanifestet', staircase: 'Frihedstrappen (english)', tropics: 'Troperne', robotel: 'Robotel', qr: 'QR', share: 'Del', about: 'Om' },
        'is': { menu: 'VALMYND', home: 'HEIM', manifesto: 'Lesa Heimsmanifestið', staircase: 'Frelsisstiginn (english)', tropics: 'Hitabeltið', robotel: 'Robotel', qr: 'QR', share: 'Deila', about: 'Um' },
        'fo': { menu: 'MENY', home: 'HEIM', manifesto: 'Les Heimsskráina', staircase: 'Frælsistrappan (english)', tropics: 'Tropiskir', robotel: 'Robotel', qr: 'QR', share: 'Deil', about: 'Um' }
    };

    const t = translations[currentLang] || translations['en'];

    function getBasePath() {
        const path = window.location.pathname;
        const parts = path.split('/').filter(p => p.length > 0);
        const depth = parts.length > 0 ? parts.length - 1 : 0;
        return '../'.repeat(Math.max(0, depth));
    }
    const base = getBasePath();

    const flagFile = flagMapping[currentLang] || 'gb.svg';
    const flagSrc = `${base}lang/flags/${flagFile}`;

    function buildMenu() {
        const menuIcon = `<img src="${base}menu_icons/menu.png" alt="Menu" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;">`;
        const btnText = menuIcon + t.menu;
        return `
            <div class="site-nav">
                <div class="dropdown" id="homeDropdown">
                    <button class="dropbtn" id="menuBtn">${btnText}</button>
                    <div class="dropdown-content">
                        <a href="${base}index.html"><img src="${base}menu_icons/home.png" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;"> ${t.home}</a>
                        <a href="${base}lang/lang.html?lang=${currentLang}"><img src="${flagSrc}" alt="Flag" style="width:20px;height:15px;vertical-align:middle;margin-right:8px;border-radius:2px;"> ${t.manifesto}</a>
                        <a href="${base}freedom-staircase/freedom-staircase.html?lang=en"><img src="${base}menu_icons/freedom.png" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;"> ${t.staircase}</a>
                        <a href="${base}tropics/tropics.html?lang=${currentLang}"><img src="${base}menu_icons/tropics.png" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;"> ${t.tropics}</a>
                        <a href="${base}share/share.html?lang=${currentLang}"><img src="${base}menu_icons/share.svg" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;"> ${t.share}</a>
                        <a href="${base}qr/qr.html?lang=${currentLang}"><img src="${base}menu_icons/qr.svg" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;"> ${t.qr}</a>
                        <a href="${base}robotel/robotel.html?lang=${currentLang}"><img src="${base}menu_icons/robotel.png" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;"> ${t.robotel}</a>
                        <a href="${base}about.html?lang=${currentLang}"><img src="${base}menu_icons/banner.png" style="width:20px;height:20px;vertical-align:middle;margin-right:8px;"> ${t.about}</a>
                    </div>
                </div>
            </div>
        `;
    }

    const menuContainer = document.getElementById('main-menu');
    if (menuContainer) {
        menuContainer.innerHTML = buildMenu();
    }

    const dropdown = document.getElementById('homeDropdown');
    const btn = document.getElementById('menuBtn');
    if (btn && dropdown) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            dropdown.classList.toggle('active');
        });
    }

    document.addEventListener('click', function(e) {
        if (dropdown && !dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
});
