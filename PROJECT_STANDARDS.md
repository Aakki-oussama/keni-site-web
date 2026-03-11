# 💎 Keni Site - Coding standards & Rules

This document defines the "Source of Truth" for development styles and patterns. Antigravity AI MUST read and follow these rules before any modification to avoid redundancy and ensure clinical precision.

## 1. Icon & Text Alignment (Universal Fix)
- **Rule**: Every `Icon + Text` group MUST use the `.icon-text` utility class.
- **Why**: It normalizes line-height and applies the **-1px vertical shift** in RTL mode to align icons with the Arabic baseline.
- **Usage**: `<div className="icon-text"> <Icons.Mail /> <span>Email</span> </div>`

## 2. CSS Utility First
- **Rule**: Check `index.css` for existing components before writing inline styles.
- **Key Utilities**:
    - `.glass-pill`: For semi-transparent frosted glass containers.
    - `.animate-fade-in`: Standard entry animation.
    - `.animate-slide-in-start`: Menu drawer animation (handles LTR/RTL).

## 3. Atomic Reusability (DRY - Don't Repeat Yourself)
- **Icons**: Always import from `src/components/shared/Icons.tsx`. Never import from `lucide-react` directly in feature components.
- **Buttons**: Use `src/components/ui/Button.tsx`. It handles link vs button logic and standard styling.
- **Colors**: Use Tailwind theme tokens: `brand`, `brand-dark`.
- **Typography**: 
    - `font-marcellus`: For headings and high-end labels.
    - `font-sans` (Inter): For body text and technical info (language abbreviations).
    - `font-arabic` (Noto Naskh): Applied automatically via `[dir="rtl"]`.

## 4. Multi-Language (RTL/LTR Awareness)
- **Logical Properties**: Prioritize `start` and `end` over `left` and `right`.
- **Layout**: Always verify that the component flips correctly when switching from FR to AR.
- **Flipping Sidebars**: Mobile menus and side panels must open from the `start` side (Left in FR, Right in AR).

## 5. Performance & Clean Code
- **No Unused Vars**: Never leave unused variables (like `_`).
- **No Placeholders**: Use real logic or confirmed assets.
- **Components over Files**: Keep components focused. If a piece of UI is used twice, move it to `src/components/shared`.
