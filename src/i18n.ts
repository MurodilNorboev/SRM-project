import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // JSON fayllardan tarjimalarni yuklash
  .use(LanguageDetector) // Brauzer tilini aniqlash
  .use(initReactI18next) // React uchun integratsiya
  .init({
    fallbackLng: 'en', // Agar brauzer tili topilmasa, inglizchani ishlatamiz
    debug: true, // Konsolda xatolik va ma’lumotlarni ko‘rish uchun
    interpolation: {
      escapeValue: false, // JSX bilan ishlashda `escape` ni o‘chirib qo‘yish
    },
  });

export default i18n;
