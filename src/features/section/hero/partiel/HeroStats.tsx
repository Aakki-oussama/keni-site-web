import { useTranslation } from "react-i18next";
import { Icons } from "../../../../components/shared/Icons";
import { Card } from "../../../../components/ui/Card";
import { Reveal } from "../../../../components/shared/Reveal";

export const HeroStats = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6 ">
      {/* 1. Feature Card (Top) */}
        <Reveal
          animation="animate-enter-left"
          delay="delay-300"
          className="w-full"
        >
          <Card className="aspect-square group ">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-8 flex flex-col justify-end gap-2">
              <h3 className="text-h3 text-zinc-100 text-start whitespace-pre-line">
                {t("hero.intro_card.title")}
              </h3>
              {/* Texte auto-ajusté avec un padding pour ne pas toucher la flèche */}
              <p className="text-body text-zinc-200 max-w-none pe-14">
                {t("hero.intro_card.description")}
              </p>
              <div
                aria-hidden="true"
                className="absolute bottom-8 end-8 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md"
              >
                <Icons.ArrowRight
                  size={Icons.SIZES.lg}
                  className="-rotate-135 rtl:-rotate-45 text-brand can-hover:group-hover:rotate-90 transition-transform duration-300"
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
          <Card className="relative bg-brand p-6 aspect-[3/2] flex flex-col justify-between group shadow-xl">
            <img
              src="/images/decoration-body-card.webp"
              alt=""
              aria-hidden="true"
              width={365}
              height={365}
              decoding="async"
              loading="lazy"
              className="absolute inset-0 object-cover"
            />
            {/* Texte principal */}
            <div className="relative z-10">
              <span className="text-h2 text-zinc-100 block">20+</span>
              <span className="text-zinc-200 text-small uppercase tracking-wider">
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
            <div className="absolute end-0 bottom-0">
              <img
                src="/images/decoration-card.png"
                alt=""
                aria-hidden="true"
                width={193}
                height={185}
                decoding="async"
                className="object-contain"
              />
            </div>
          </Card>
        </Reveal>
      </div>
  );
};