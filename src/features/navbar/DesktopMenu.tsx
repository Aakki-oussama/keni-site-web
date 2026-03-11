import { useTranslation } from "react-i18next";
import { NAV_LINKS } from "./constants/navbar.constants";
import { useActiveSection } from "../../hooks/useActiveSection";

export const DesktopMenu = () => {
  const { t } = useTranslation();
  const activeId = useActiveSection(NAV_LINKS.map((link) => link.href));

  return (
    <ul className="hidden md:flex items-center gap-1">
      {NAV_LINKS.map((link) => {
        const isActive = activeId === link.href.replace("#", "");

        return (
          <li key={link.href}>
            <a
              href={link.href}
              className={`relative font-marcellus px-[18px] py-2 transition-all duration-300 flex items-center group ${
                isActive ? "nav-link-active" : "text-zinc-900 hover:text-brand"
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
