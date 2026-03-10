import { Icons } from "../../components/shared/Icons"
import { CONTACT_INFO, SOCIAL_LINKS } from "./constants/info.constants"

export const TopBar = () => {
    return (
        <div className="bg-brand text-white w-full hidden md:block">
            <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-[13px]">
                <div className="flex items-center gap-6">
                    <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 hover:text-white/80 transition-colors">
                        <Icons.Phone size={Icons.SIZES.sm} strokeWidth={Icons.CONFIG.strokeWidth} />
                        {CONTACT_INFO.phone}
                    </a>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:text-white/80 transition-colors">
                        <Icons.Mail size={Icons.SIZES.sm} strokeWidth={Icons.CONFIG.strokeWidth} />
                        {CONTACT_INFO.email}
                    </a>
                    <span className="flex items-center gap-2 opacity-90">
                        <Icons.MapPin size={Icons.SIZES.sm} strokeWidth={Icons.CONFIG.strokeWidth} />
                        {CONTACT_INFO.address}
                    </span>
                </div>

                <div className="flex items-center gap-4">
                    {SOCIAL_LINKS.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            className="hover:text-white/80 transition-colors"
                            aria-label={social.name}
                        >
                            <social.icon size={Icons.SIZES.md} strokeWidth={Icons.CONFIG.strokeWidth} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}