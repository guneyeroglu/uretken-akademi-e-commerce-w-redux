import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './language/en.json';
import tr from './language/tr.json';

i18next.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: localStorage.getItem('i18n__language') || 'en',
  resources: { en, tr },
});

export default i18next;
