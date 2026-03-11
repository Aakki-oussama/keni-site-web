// Barre supérieure affichant les infos de contact, les réseaux sociaux et le sélecteur de langue.
// Visible uniquement sur Desktop (hidden md:block), utilise les constantes centralisées.
import { useTranslation } from "react-i18next";
import { Icons } from "../../components/shared/Icons";
import { CONTACT_INFO, SOCIAL_LINKS } from "./constants/info.constants";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const TopBar = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-brand text-white w-full hidden md:block">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-[13px]">
        <div className="flex items-center gap-6">
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="icon-text hover:text-white/80 transition-colors"
          >
            <Icons.Phone
              size={Icons.SIZES.sm}
              strokeWidth={Icons.CONFIG.strokeWidth}
              className="shrink-0"
            />
            <span>{CONTACT_INFO.phone}</span>
          </a>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="icon-text hover:text-white/80 transition-colors"
          >
            <Icons.Mail
              size={Icons.SIZES.sm}
              strokeWidth={Icons.CONFIG.strokeWidth}
              className="shrink-0"
            />
            <span>{CONTACT_INFO.email}</span>
          </a>
          <span className="icon-text opacity-90">
            <Icons.MapPin
              size={Icons.SIZES.sm}
              strokeWidth={Icons.CONFIG.strokeWidth}
              className="shrink-0"
            />
            <span>{t("topbar.location")}</span>
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="hover:text-white/80 transition-colors"
                aria-label={t(`topbar.social.${social.name.toLowerCase()}`)}
              >
                <social.icon
                  size={Icons.SIZES.md}
                  strokeWidth={Icons.CONFIG.strokeWidth}
                />
              </a>
            ))}
          </div>
          <div className="h-4 w-[1px] bg-white/20" />
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};
