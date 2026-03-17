import { HeroContent } from "./partiel/HeroContent";
import { HeroGallery } from "./partiel/HeroGallery";
import { HeroStats } from "./partiel/HeroStats";

export const Hero = () => {
  // Classe partagée pour éviter la redondance (Règle 9)
  const columnClass = "w-full max-w-[550px] mx-auto lg:max-w-none flex";

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen pt-[var(--header-height)] pb-20 overflow-hidden flex items-center bg-brand-foncer bg-[url('/images/decoration-body.png')] bg-center bg-repeat bg-auto"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-stretch gap-8">

          {/* 1. HeroStats — 25% */}
          <div className={`${columnClass} lg:w-1/4 order-2 lg:order-1`}>
            <HeroStats />
          </div>

          {/* 2. HeroGallery — 33% */}
          <div className={`${columnClass} lg:w-1/3 order-3 lg:order-2`}>
            <HeroGallery />
          </div>

          {/* 3. HeroContent — 42% */}
          <div className={`${columnClass} lg:w-5/12 order-1 lg:order-3`}>
            <HeroContent />
          </div>

        </div>
      </div>
    </section>
  );
};