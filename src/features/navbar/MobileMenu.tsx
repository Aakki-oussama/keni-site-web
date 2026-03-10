import logo from "../../assets/logo.svg"
import { Icons } from "../../components/shared/Icons"
import { NAV_LINKS } from "./constants/navbar.constants"
import { Button } from "../../components/ui/Button"

interface MobileMenuProps {
    isOpen: boolean
    onClose: () => void
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 bg-black/50 z-50 md:hidden animate-fade-in"
            onClick={onClose}
            aria-hidden="true"
        >
            <div
                className="fixed right-0 top-0 h-full w-[280px] bg-white shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label="Menu de navigation"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b">
                    <img src={logo} alt="Kini Osteo Sahaty" className="h-8 w-auto" />
                    <button 
                        onClick={onClose} 
                        className="text-gray-500 hover:text-brand transition-colors"
                        aria-label="Fermer le menu"
                    >
                        <Icons.X size={Icons.SIZES.lg} strokeWidth={Icons.CONFIG.strokeWidth} />
                    </button>
                </div>

                {/* Links */}
                <ul className="flex flex-col p-6 gap-2">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={onClose}
                                className="block py-3 px-4 rounded-lg font-marcellus text-zinc-900 hover:text-brand hover:bg-brand/5 transition-all text-lg"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <div className="p-6 mt-auto border-t">
                    <Button 
                        href="#contact" 
                        onClick={onClose}
                        size="lg"
                        className="w-full font-marcellus flex items-center gap-2 tracking-wide"
                    >
                        <Icons.Calendar size={Icons.SIZES.md} strokeWidth={Icons.CONFIG.strokeWidth} />
                        Prendre RDV
                    </Button>
                </div>
            </div>
        </div>
    )
}