import { useTranslation } from "react-i18next";
import { Button } from "../../../../components/ui/Button";
import { Icons } from "../../../../components/shared/Icons";
import { Badge } from "../../../../components/ui/Badge";
import { Reveal } from "../../../../components/shared/Reveal";

export const HeroContent = () => {
  const { t } = useTranslation();

  return (
    <Reveal
      animation="animate-enter-right"
      delay="delay-300"
      className="h-full"
    >
      <div className="flex flex-col justify-center gap-6 h-full">
        {/* Trusted Badge */}
        <Badge label={t("hero.badge")} variant="light" className="mb-0" />

        {/* Main Title */}
        <h1 id="hero-heading" className="text-h1 text-white">
          {t("hero.title.main")}{" "}
          <span className="text-brand">{t("hero.title.highlight")}</span>{" "}
          {t("hero.title.end")}
        </h1>

        {/* Description */}
        <p className="text-white text-body">{t("hero.description")}</p>

        {/* CTA Button */}
        <div className="mt-4">
          <Button
            href="#contact"
            variant="pill"
            size="lg"
            icon={<Icons.ArrowRight size={Icons.SIZES.base} />}
          >
            {t("navbar.cta")}
          </Button>
        </div>
      </div>
    </Reveal>
  );
};
