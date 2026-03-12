import { HeroContent } from "./partiel/HeroContent";
import { HeroGallery } from "./partiel/HeroGallery";
import { HeroStats } from "./partiel/HeroStats";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-[var(--header-height)] pb-20 overflow-hidden flex items-center bg-brand-foncer bg-[url('/image-body/Home-1-exray-bg.png')] bg-center bg-repeat bg-contain"
>
  {/* Overlay couleur — changez juste cette ligne */}
  
      {/* max-width: */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">

          {/* 1. HeroStats — w-1/4 (25%) */}
          <div className="w-full lg:w-1/4 order-3 lg:order-1">
            <HeroStats />
          </div>

          {/* 2. HeroGallery — w-1/3 (33.3%) */}
          <div className="w-full lg:w-1/3 order-2 lg:order-2">
            <HeroGallery />
          </div>

          {/* 3. HeroContent — w-5/12 (41.6%) */}
          <div className="w-full lg:w-5/12 order-1 lg:order-3">
            <HeroContent />
          </div>

        </div>
      </div>
    </section>
  );
};
