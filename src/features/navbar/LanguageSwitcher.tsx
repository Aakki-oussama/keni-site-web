import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'ar' : 'fr';
    i18n.changeLanguage(newLang);
  };

  const isAr = i18n.language === 'ar';

  return (
    <button
      onClick={toggleLanguage}
      className="py-0.5 border-b border-white"
      aria-label={isAr ? "Changer la langue en Français" : "تغيير اللغة إلى العربية"}
    >
      <span className={`text-[13px] font-medium leading-none ${isAr ? 'font-sans' : 'font-arabic'}`}>
        {i18n.language === 'fr' ? 'العربية' : 'Français'}
      </span>
    </button>
  );
};
