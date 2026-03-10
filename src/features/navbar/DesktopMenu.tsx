import { NAV_LINKS } from "./constants/navbar.constants"

export const DesktopMenu = () => {
  return (
    <ul className="hidden md:flex items-center gap-1">
      {NAV_LINKS.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="relative font-marcellus text-zinc-900 px-[18px] py-2 transition-all duration-300 hover:text-brand flex items-center group"
          >
            <span>{link.label}</span>
            {/* Elegant Solid Diamond Marker */}
            <span className="nav-link-diamond" />
          </a>
        </li>
      ))}
    </ul>
  )
}