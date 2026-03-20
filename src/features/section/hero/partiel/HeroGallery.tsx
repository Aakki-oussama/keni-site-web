import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Reveal } from "../../../../components/shared/Reveal";

// 1. Liste des images pour le carousel (Sortie du composant pour performance)
const HERO_IMAGES = [
  "/images/hero-slider-1.jpg",
  "/images/hero-slider-2.jpg",
  "/images/hero-slider-3.jpg",
];

export const HeroGallery = () => {
  const { t, i18n } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const isRTL = i18n.dir() === "rtl";

  // Pre-chargement (Preload) intelligent : on ignore la 1ère image (déjà chargée par le navigateur)
  useEffect(() => {
    HERO_IMAGES.slice(1).forEach((src) => (new Image().src = src));
  }, []);

  return (
    <Reveal
      animation="animate-enter-left"
      delay="delay-600"
      className="relative w-full aspect-[4/5]"
    >
      {/* 🟢 CONTENEUR PARENT : Synchronisation des dimensions du "Trou" */}
      <div
        className="relative group w-full h-full"
        style={{
          // ⚠️ --split-x = 0.66 and --split-y = 0.85 must match
          // the clip-path cut-out in ClipPaths.tsx
          // If you change the shape, update these values too
          ["--split-x" as any]: "0.66",
          ["--split-y" as any]: "0.85",
          transform: isRTL ? "scaleX(-1) translateZ(0)" : "translateZ(0)",
        }}
      >
        {/* Lueur décorative */}
        <div className="absolute -inset-4 bg-brand/60 blur-3xl -z-10 opacity-10 pointer-events-none" />

        {/* LE CADRE DE L'IMAGE (Clipped) */}
        <div
          className="absolute inset-0 shadow-2xl bg-zinc-900 overflow-hidden"
          style={{
            clipPath: "url(#clip-gallery)",
            WebkitClipPath: "url(#clip-gallery)",
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
            transform: "translateZ(0)",
            WebkitTransform: "translateZ(0)",
          }}
        >
          {/* L'IMAGE : On annule le miroir du parent pour que l'image reste dans le bon sens */}
          <img
            key={activeIndex}
            src={HERO_IMAGES[activeIndex]}
            alt={`${t("hero.images.practice_preview")} ${activeIndex + 1}`}
            width={800}
            height={1000}
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 can-hover:group-hover:scale-105 animate-fade-in"
            style={{ transform: isRTL ? "scaleX(-1)" : "none" }}
          />

          {/* Dégradé sombre */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none" />
        </div>

        {/* 🚀 LA PAGINATION AUTO-SYNCHRONISÉE */}
        <div
          className="absolute bottom-0 right-0 flex items-center justify-center p-[2%]"
          style={{
            width: "calc((1 - var(--split-x)) * 100%)",
            height: "calc((1 - var(--split-y)) * 100%)",
          }}
        >
          <div className="flex items-center justify-center space-x-1 sm:space-x-2">
            {HERO_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 focus:outline-none group pointer-events-auto"
              >
                <div
                  className={`rounded-full bg-white transition-all duration-300 ${
                    activeIndex === i
                      ? "w-2 h-2 sm:w-2.5 sm:h-2.5 opacity-100 ring-[6px] sm:ring-[8px] ring-white/10"
                      : "w-1.5 h-1.5 sm:w-2 sm:h-2 opacity-40 can-hover:group-hover:opacity-100 can-hover:group-hover:ring-[3px] can-hover:group-hover:ring-white/20"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
};
