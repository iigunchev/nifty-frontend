import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// cookies
import Cookies from 'js-cookie';
// translation files
import translationEN from './locales/EN/translation.json';
import translationES from './locales/ES/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    es: { translation: translationES }
  },
  lng: Cookies.get('i18next') || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;
