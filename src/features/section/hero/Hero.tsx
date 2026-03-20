import { HeroContent } from "./partiel/HeroContent";
import { HeroGallery } from "./partiel/HeroGallery";
import { HeroStats } from "./partiel/HeroStats";

export const Hero = () => {
  // hero-section : Remplace 'section-py' pour ajouter l'espace (padding) exact de la Navbar en haut !
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="bg-body bg-body-flip-y hero-section relative min-h-screen overflow-hidden flex items-center"
    >
      <div className="container-site relative z-10">
        {/* GRILLE RESPONSIVE : 1 Col (Mobile) -> 2 Cols (Tablette) -> 12 Cols (PC) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-center">
          
          {/* 1. HeroStats (Ordre PC: 1 | Ordre Mobile/Tab: 2) */}
          <div className="flex w-full md:col-span-1 lg:col-span-3 order-2 lg:order-1">
            <HeroStats />
          </div>

          {/* 2. HeroGallery (Ordre PC: 2 | Ordre Mobile/Tab: 3) */}
          <div className="flex w-full md:col-span-1 lg:col-span-4 order-3 lg:order-2">
            <HeroGallery />
          </div>

          {/* 3. HeroContent (Ordre PC: 3 | Ordre Mobile/Tab: 1) */}
          <div className="flex w-full md:col-span-2 lg:col-span-5 order-1 lg:order-3">
            <HeroContent />
          </div>
          
        </div>
      </div>
    </section>
  );
};
