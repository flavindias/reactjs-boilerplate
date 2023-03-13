import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { enUS, ptBR } from './locales'

const resources: Resource = {
    'en-US': {
        translation: enUS
    },
    'pt-BR': {
        translation: ptBR
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        lng: "pt-BR", // if you're using a language detector, do not define the lng option
        fallbackLng: "pt-BR",
        interpolation: {
          escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
        resources,
      });

const t = i18n.getFixedT(i18n.language);
export default {i18n, t}