import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false, // React يقوم بذلك تلقائيًا
    },
    resources: {
      ar: {
        translation: {
          welcome: "مرحبًا بك في منصة النقل",
          about: "حول المشروع",
          contact: "اتصل بنا",
          services: "الخدمات",
          login: "دخول المكتب",
        },
      },
      fr: {
        translation: {
          welcome: "Bienvenue sur la plateforme des transports",
          about: "À propos du projet",
          contact: "Contactez-nous",
          services: "Services",
          login: "Connexion bureau",
        },
      },
    },
  });

export default i18n;
