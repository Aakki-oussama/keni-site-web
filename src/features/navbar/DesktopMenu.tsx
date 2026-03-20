// Menu de navigation Desktop avec détection de la section active au scroll.
// Affiche les liens avec un indicateur de couleur brand et une ligne animée sous le lien actif.
import { useTranslation } from "react-i18next";
import { NAV_LINKS } from "./constants/navbar.constants";
import { useActiveSection } from "../../hooks/useActiveSection";

export const DesktopMenu = () => {
  const { t } = useTranslation();
  const activeId = useActiveSection(NAV_LINKS.map((link) => link.href));

  return (
    <ul className="hidden lg:flex items-center gap-1">
      {NAV_LINKS.map((link) => {
        const isActive = activeId === link.href.replace("#", "");

        return (
          <li key={link.href}>
            <a
              href={link.href}
              className={`relative font-marcellus px-[18px] py-2 transition-all duration-300 flex items-center group ${
                isActive ? "nav-link-active" : "text-black hover:text-brand"
              }`}
            >
              <span className={isActive ? "font-bold" : ""}>
                {t(link.label)}
              </span>

              {/* Active Line indicator */}
              <span className="nav-line-indicator" />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
