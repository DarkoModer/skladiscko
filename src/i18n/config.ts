import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import sl from './locales/sl.json';
import en from './locales/en.json';
import de from './locales/de.json';

const resources = {
  sl: { translation: sl },
  en: { translation: en },
  de: { translation: de },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'sl',
    fallbackLng: 'sl',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
