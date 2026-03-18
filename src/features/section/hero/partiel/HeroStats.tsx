import { useTranslation } from "react-i18next";
import { Icons } from "../../../../components/shared/Icons";
import { Card } from "../../../../components/ui/Card";
import { Reveal } from "../../../../components/shared/Reveal";

export const HeroStats = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6 h-full w-full">
      {/* 1. Feature Card (Top) */}
      <Reveal
        animation="animate-enter-left"
        delay="delay-300"
        className="w-full"
      >
        <Card className="aspect-square group w-full">
          <img
            src="/images/hero-doctors.jpg"
            alt={t("hero.images.physio_work")}
            width={400}
            height={400}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover"
          />
          {/* Overlay plus sombre pour meilleure lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent p-8 flex flex-col justify-end gap-2">
            <h3 className="text-h3 text-white text-start whitespace-pre-line">
              {t("hero.intro_card.title")}
            </h3>
            {/* Texte plus visible */}
            <p className="text-body text-white max-w-[180px] sm:max-w-[420px] lg:max-w-[180px]">
              {t("hero.intro_card.description")}
            </p>
            <div
              aria-hidden="true"
              className="absolute bottom-8 end-8 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md"
            >
              <Icons.ArrowRight
                size={20}
                className="-rotate-135 rtl:-rotate-45 text-brand"
              />
            </div>
          </div>
        </Card>
      </Reveal>

      {/* 2. Stats/Illustration Card (Bottom) */}
      <Reveal
        animation="animate-enter-left"
        delay="delay-300"
        className="w-full"
      >
        <Card className="relative bg-brand p-8 aspect-auto lg:aspect-[4/3] flex flex-col justify-between gap-8 lg:gap-0 group shadow-xl min-h-[160px] lg:min-h-0 w-full">
          <img
            src="/images/decoration-body-card.webp"
            alt=""
            aria-hidden="true"
            width={400}
            height={300}
            decoding="async"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Texte principal */}
          <div className="relative z-10">
            <span className="text-h2 text-white block">20+</span>
            <span className="text-white text-small uppercase tracking-wider">
              {t("hero.stats_card.experience.label")}
            </span>
          </div>

          {/* Avatars + compteur */}
          <div className="flex items-center relative z-10">
            <img
              src="/images/reviewers-new.webp"
              alt={t("hero.images.patients")}
              className="h-8 w-auto"
              width="64"
              height="32"
            />
            <span className="inline-flex items-center justify-center h-8 bg-white text-brand font-marcellus text-sm rounded-full aspect-square">
              4.5k
            </span>
          </div>

          {/* Spine SVG décoratif */}
          <div className="absolute end-0 bottom-0 w-[193px] h-[185px]">
            <img
              src="/images/decoration-card.png"
              alt=""
              aria-hidden="true"
              width={193}
              height={185}
              decoding="async"
              className="w-full h-full object-contain"
            />
          </div>
        </Card>
      </Reveal>
    </div>
  );
};
