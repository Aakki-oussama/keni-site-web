// Composant principal de navigation : orchestre le TopBar, le menu Desktop et le menu Mobile.
// Gère l'état d'ouverture du menu mobile et le support RTL/LTR.
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Icons } from "../../components/shared/Icons";
import { TopBar } from "./TopBar";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import { Button } from "../../components/ui/Button";

export const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none flex flex-col">
      {/* 1. Top Bar is clickable */}
      <div className="pointer-events-auto">
        <TopBar />
      </div>

      {/* 2. The Gap (mt-30px) + The Pill Navbar (clickable) */}
      <div className="max-w-[1690px] w-full mx-auto px-5 mt-2 pointer-events-auto">
        <nav className="glass-pill px-8 h-20 rounded-[40px] flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="shrink-0">
            <img
              src="/logo.svg"
              alt="Kini Osteo Sahaty"
              className="h-10 w-auto"
              width={160}
              height={40}
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <DesktopMenu />
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:block">
            <Button
              href="#contact"
              variant="pill"
              size="md"
              icon={<Icons.ArrowRight size={Icons.SIZES.sm} />}
            >
              {t("navbar.cta")}
            </Button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-brand transition-colors p-2"
            aria-label={t("navbar.menu_label", "Ouvrir le menu")}
          >
            <Icons.Menu
              size={Icons.SIZES.xl}
              strokeWidth={Icons.CONFIG.strokeWidth}
            />
          </button>
        </nav>
      </div>

      {/* 3. Mobile Menu Overlay (clickable) */}
      <div className="pointer-events-auto">
        <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </header>
  );
};
