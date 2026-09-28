// copyright.js - Hanterar copyright-raden

const COPYRIGHT_TEXTS = {
    'sv': '© 2026 Sven Yngerstedt. Alla rättigheter förbehållna.',
    'en': '© 2026 Sven Yngerstedt. All rights reserved.',
    'de': '© 2026 Sven Yngerstedt. Alle Rechte vorbehalten.',
    'fr': '© 2026 Sven Yngerstedt. Tous droits réservés.',
    'es': '© 2026 Sven Yngerstedt. Todos los derechos reservados.',
    'it': '© 2026 Sven Yngerstedt. Tutti i diritti riservati.',
    'pt': '© 2026 Sven Yngerstedt. Todos os direitos reservados.',
    'nl': '© 2026 Sven Yngerstedt. Alle rechten voorbehouden.',
    'pl': '© 2026 Sven Yngerstedt. Wszelkie prawa zastrzeżone.',
    'da': '© 2026 Sven Yngerstedt. Alle rettigheder forbeholdes.',
    'no': '© 2026 Sven Yngerstedt. Alle rettigheter forbeholdt.',
    'fi': '© 2026 Sven Yngerstedt. Kaikki oikeudet pidätetään.',
    'is': '© 2026 Sven Yngerstedt. Allur réttur áskilinn.',
    'fo': '© 2026 Sven Yngerstedt. Øll rættindi fyrihildin.',
    'cs': '© 2026 Sven Yngerstedt. Všechna práva vyhrazena.',
    'hu': '© 2026 Sven Yngerstedt. Minden jog fenntartva.',
    'ro': '© 2026 Sven Yngerstedt. Toate drepturile rezervate.',
    'el': '© 2026 Sven Yngerstedt. Όλα τα δικαιώματα διατηρούνται.',
    'tr': '© 2026 Sven Yngerstedt. Tüm hakları saklıdır.',
    'ru': '© 2026 Sven Yngerstedt. Все права защищены.',
    'uk': '© 2026 Sven Yngerstedt. Усі права захищені.',
    'bg': '© 2026 Sven Yngerstedt. Всички права запазени.',
    'ar': '© 2026 سفين ينغرستيدت. جميع الحقوق محفوظة.',
    'he': '© 2026 סוון ינגרסטדט. כל הזכויות שמורות.',
    'fa': '© 2026 سون ینگرستدت. تمامی حقوق محفوظ است.',
    'ur': '© 2026 سوین ینگرسٹیڈٹ۔ جملہ حقوق محفوظ ہیں۔',
    'hi': '© 2026 स्वेन यंगरस्टेड्ट। सर्वाधिकार सुरक्षित।',
    'bn': '© 2026 স্ভেন ইয়াংগারস্টেডট। সর্বস্বত্ব সংরক্ষিত।',
    'th': '© 2026 สเวน ยิงเกอร์สเตดต์ สงวนลิขสิทธิ์',
    'vi': '© 2026 Sven Yngerstedt. Bảo lưu mọi quyền.',
    'id': '© 2026 Sven Yngerstedt. Hak cipta dilindungi.',
    'jv': '© 2026 Sven Yngerstedt. Kabeh hak dilindhungi.',
    'ja': '© 2026 Sven Yngerstedt. 全著作権所有。',
    'ko': '© 2026 Sven Yngerstedt. 모든 권리 보유.',
    'zh': '© 2026 Sven Yngerstedt. 版权所有。',
    'yue': '© 2026 Sven Yngerstedt. 版權所有。',
    'sw': '© 2026 Sven Yngerstedt. Haki zote zimehifadhiwa.',
    'af': '© 2026 Sven Yngerstedt. Alle regte voorbehou.',
    'zu': '© 2026 Sven Yngerstedt. Wonke amalungelo agodliwe.',
    'xh': '© 2026 Sven Yngerstedt. Onke amalungelo agciniwe.',
    'crs': '© 2026 Sven Yngerstedt. Tou bann drwa rezerve.',
    'se': '© 2026 Sven Yngerstedt. Buot vuoigatvuođat seailluhuvvon.',
    'fit': '© 2026 Sven Yngerstedt. Kaikki oikeuet pidätetty.',
    'pa': '© 2026 ਸਵੇਨ ਯੰਗਰਸਟੈਡਟ। ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ।',
    'fil': '© 2026 Sven Yngerstedt. Nakalaan ang lahat ng karapatan.'
};

// Minimal RELATED_FALLBACK - bara de viktigaste mappningarna
const COPYRIGHT_FALLBACK = {
    'zh-hk': 'yue',
    'zh-mo': 'yue',
    'zh-cn': 'zh',
    'zh-sg': 'zh',
    'zh-tw': 'zh',
    'zh-hans': 'zh',
    'zh-hant': 'zh',
    'yue-hk': 'yue',
    'nb': 'no',
    'nn': 'no',
    'nb-no': 'no',
    'nn-no': 'no',
    'tl': 'fil',
    'tl-ph': 'fil',
    'en-us': 'en',
    'en-gb': 'en',
    'pt-br': 'pt',
    'pt-pt': 'pt'
};

function getCopyrightHTML() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');

    // Prioritet 1: URL
    if (urlLang) {
        const lc = urlLang.toLowerCase();
        const mapped = COPYRIGHT_FALLBACK[lc] || lc.split('-')[0];
        const text = COPYRIGHT_TEXTS[mapped] || COPYRIGHT_TEXTS['en'];
        return `<p class="copyright">${text}</p>`;
    }

    // Prioritet 2: localStorage
    try {
        const saved = localStorage.getItem('world-manifesto-lang');
        if (saved) {
            const text = COPYRIGHT_TEXTS[saved] || COPYRIGHT_TEXTS['en'];
            return `<p class="copyright">${text}</p>`;
        }
    } catch (e) {}

    // Prioritet 3: Webbläsarens språk
    if (typeof navigator !== 'undefined') {
        const nav = (navigator.language || (navigator.languages && navigator.languages[0]) || 'en').toLowerCase();
        const base = nav.split('-')[0];
        const mapped = COPYRIGHT_FALLBACK[nav] || base;
        const text = COPYRIGHT_TEXTS[mapped] || COPYRIGHT_TEXTS['en'];
        return `<p class="copyright">${text}</p>`;
    }

    // Fallback
    return `<p class="copyright">${COPYRIGHT_TEXTS['en']}</p>`;
}
