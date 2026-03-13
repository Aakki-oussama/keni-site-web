import { useTranslation } from "react-i18next";
import { Icons } from "../../../../components/shared/Icons";
import { Card } from "../../../../components/ui/Card";

export const HeroStats = () => {
  const { t } = useTranslation();

  return (
    <div
      className="flex flex-col gap-6 animate-fade-in"
      style={{ animationDelay: "0.4s" }}
    >
      {/* 1. Feature Card (Top) */}
      <Card className="aspect-square group">
        <img
          src="/image-body/hero-doctors.jpg"
          alt={t("images.physio_work")}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
        />
        {/* Overlay plus sombre pour meilleure lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/30 to-transparent p-8 flex flex-col justify-end gap-2">
          <h3 className="text-h3 text-white text-start whitespace-pre-line">
            {t("hero.feature_title")}
          </h3>
          {/* Texte plus visible */}
          <p className="text-body text-white max-w-[180px]">
            {t("hero.feature_desc")}
          </p>
          <div
            aria-hidden="true"
            className="absolute bottom-8 end-8 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md"
          >
            <Icons.ArrowRight size={20} className="-rotate-45 text-brand" />
          </div>
        </div>
      </Card>

      {/* 2. Stats/Illustration Card (Bottom) */}
      <Card className="relative bg-brand p-8 aspect-auto lg:aspect-[4/3] flex flex-col justify-between gap-8 lg:gap-0 group shadow-xl min-h-[160px] lg:min-h-0">
        <img
          src="/image-body/decoration-body-card.webp"
          alt={t("images.decoration.card")}
          decoding="async"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Texte principal */}
        <div className="relative z-10">
          <span className="text-h2 text-white block">20+</span>
          <span className="text-white text-small uppercase tracking-wider">
            {t("hero.years_expertise")}
          </span>
        </div>

        {/* Avatars + compteur */}
        <div className="flex items-center relative z-10">
          <img
            src="/team/reviewers-new.webp"
            alt={t("images.patients.satisfaits")}
            className="h-8 w-auto"
            width="64"
            height="32"
          />
          <span className="inline-flex items-center justify-center h-8 bg-white text-brand font-marcellus text-sm rounded-full aspect-square">
            4.5k
          </span>
        </div>

        {/* Spine SVG décoratif */}
        <div className="absolute end-0 bottom-0 w-[193px] h-[193px]">
          <img
            src="/image-body/decoration-card.png"
            alt={t("images.decoration.card")}
            decoding="async"
            className="w-full h-full object-contain"
          />
        </div>
      </Card>
    </div>
  );
};
