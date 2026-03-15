import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import fr from "./locales/fr.json";
import ar from "./locales/ar.json";

const resources = {
  fr: { translation: fr },
  ar: { translation: ar },
};

// detect browser language
const browserLang = navigator.language.split("-")[0];

// check saved language
const savedLang = localStorage.getItem("lang");

// choose language priority
const language =
  savedLang || (["fr", "ar"].includes(browserLang) ? browserLang : "fr");

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: language,
    fallbackLng: "fr",
    supportedLngs: ["fr", "ar"],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

// set direction immediately
document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
document.documentElement.lang = language;

// update when language changes
i18n.on("languageChanged", (lng) => {
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lng;

  localStorage.setItem("lang", lng);
});

export default i18n;