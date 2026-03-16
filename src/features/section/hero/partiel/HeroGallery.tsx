import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Reveal } from "../../../../components/shared/Reveal";

const MASK_IMAGE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 260 380' preserveAspectRatio='none'%3E%3Cpath d='M40,0 H220 Q260,0 260,40 V280 C260,320 220,320 220,320 H200 C160,320 160,380 160,380 H40 Q0,380 0,340 V40 Q0,0 40,0 Z' fill='black'/%3E%3C/svg%3E")`;

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
    <Reveal animation="animate-enter-left" delay="delay-700" className="w-full aspect-[4/5] lg:aspect-auto lg:h-full">
      <div className="relative group w-full h-full">
        <div
          className="absolute inset-0 shadow-2xl"
          style={{
            WebkitMaskImage: MASK_IMAGE,
            maskImage: MASK_IMAGE,
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            // Si Arabe (RTL), on retourne tout le conteneur du masque
            transform: isRTL ? "scaleX(-1)" : "none",
          }}
        >
          {/* 2. Affichage dynamique de l'image active */}
          <img
            key={activeIndex}
            src={HERO_IMAGES[activeIndex]}
            alt={`${t("images.gallery_doctor")} ${activeIndex + 1}`}
            width={800}
            height={1000}
            // sizes aide le navigateur à choisir la bonne résolution (Responsive)
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            style={{
              // TRÈS IMPORTANT: On retourne l'image à l'envers pour qu'elle s'affiche à l'endroit !
              transform: isRTL ? "scaleX(-1)" : "none",
            }}
            // will-change-transform prévient le GPU pour une animation ultra-fluide
            className="absolute inset-0 w-full h-full object-cover will-change-transform transition-transform duration-700 group-hover:scale-105 animate-fade-in"
          />
          {/* On retourne aussi le dégradé pour qu'il reste logique */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" 
            style={{ transform: isRTL ? "scaleX(-1)" : "none" }}
          />
        </div>

        <div className="absolute bottom-[3%] end-[2%] sm:bottom-[4%] sm:end-[8%] lg:bottom-[5%] lg:end-[6%] z-20 flex items-center">
          {/* Mapping dynamique : si on ajoute une image dans HERO_IMAGES, le bouton apparaît seul */}
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-8 lg:h-8 focus:outline-none group"
            >
              {/* Le point avec effet Swiper (box-shadow/ring) — Taille responsive */}
              <div
                className={`rounded-full bg-white transition-all duration-300 ${
                  activeIndex === i
                    ? "w-2.5 h-2.5 sm:w-4.5 sm:h-4.5 lg:w-2.5 lg:h-2.5 opacity-100 ring-[8px] sm:ring-[12px] lg:ring-[8px] ring-white/10"
                    : "w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-2 lg:h-2 opacity-40 group-hover:opacity-100 group-hover:ring-[4px] group-hover:ring-white/20"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
      <div className="absolute -inset-4 bg-brand/60 blur-3xl -z-10 opacity-10 pointer-events-none" />
    </Reveal>
  );
};
