// Bouton de changement de langue FR/AR, compatible light (TopBar) et dark (MobileMenu).
// Utilise i18n pour basculer la langue et ajuste automatiquement la police selon la direction.
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
  variant?: 'light' | 'dark';
}

export const LanguageSwitcher = ({ variant = 'light' }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'ar' : 'fr';
    i18n.changeLanguage(newLang);
  };

  const isAr = i18n.language === 'ar';
  const isLight = variant === 'light';

  return (
    <button
      onClick={toggleLanguage}
      className={`py-0.5 border-b transition-colors duration-300 ${
        isLight ? 'border-white text-white' : 'border-gray-900 text-gray-900 hover:border-brand'
      }`}
      aria-label={isAr ? "Changer la langue en Français" : "تغيير اللغة إلى العربية"}
    >
      <span className={`text-[13px] font-medium leading-none ${isAr ? 'font-sans' : 'font-arabic'}`}>
        {i18n.language === 'fr' ? 'العربية' : 'Français'}
      </span>
    </button>
  );
};
