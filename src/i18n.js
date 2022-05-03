import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// cookies
// import Cookies from 'js-cookie';
// translation files
import translationEN from './locales/EN/translation.json';
import translationES from './locales/ES/translation.json';
import getUserLangLocalStorage from './utils/getUserLangLocalStorage';

const language = getUserLangLocalStorage();

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    es: { translation: translationES }
  },
  lng: language || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;
