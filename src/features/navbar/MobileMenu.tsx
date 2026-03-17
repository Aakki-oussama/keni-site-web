// Menu mobile en tiroir (drawer) avec détection de section active, LanguageSwitcher et CTA.
// S'ouvre depuis la gauche (LTR) ou la droite (RTL) grâce aux propriétés logiques CSS.
import { useTranslation } from "react-i18next";
import { Icons } from "../../components/shared/Icons";
import { NAV_LINKS } from "./constants/navbar.constants";
import { Button } from "../../components/ui/Button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useActiveSection } from "../../hooks/useActiveSection";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { t } = useTranslation();
  const activeId = useActiveSection(NAV_LINKS.map((link) => link.href));

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 md:hidden animate-fade-in"
      onClick={onClose}
      aria-hidden="true"
    >
      <div
        className="fixed start-0 top-0 h-full w-[280px] bg-white shadow-2xl flex flex-col animate-slide-in-start"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={t("navbar.menu_label", "Menu de navigation")}
      >
        {/* Header: Close Button and logic for RTL */}
        <div className="flex justify-end p-6">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-brand transition-colors p-2"
            aria-label={t("navbar.close_menu", "Fermer le menu")}
          >
            <Icons.X
              size={Icons.SIZES.lg}
              strokeWidth={Icons.CONFIG.strokeWidth}
            />
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col p-6 gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href.replace("#", "");

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={onClose}
                  className={`relative block py-3 px-4 rounded-lg font-marcellus hover:bg-brand/5 transition-all text-lg group ${
                    isActive
                      ? "nav-link-active"
                      : "text-black hover:text-brand"
                  }`}
                >
                  <span className={isActive ? "font-bold" : ""}>
                    {t(link.label)}
                  </span>

                  {/* Active Line indicator for mobile (shorter and below) */}
                  <span className="nav-line-indicator !inset-inline-start-4 !inset-inline-end-auto w-8" />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Footer: Language + CTA */}
        <div className="p-8 mt-auto border-t flex flex-col gap-8 items-start">
          <LanguageSwitcher variant="dark" />
          <Button
            href="#contact"
            onClick={onClose}
            size="lg"
            className="w-full font-marcellus flex items-center justify-start gap-2 tracking-wide px-1 icon-text"
          >
            <Icons.Calendar
              size={Icons.SIZES.md}
              strokeWidth={Icons.CONFIG.strokeWidth}
            />
            <span>{t("navbar.cta")}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
