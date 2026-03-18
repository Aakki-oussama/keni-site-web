import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  Component,
  Calendar,
  Globe,
  type LucideIcon,
} from "lucide-react";

/**
 * Icons central registry
 * Provides a single source of truth for all icons and their configurations.
 */

// 1. Global Sizes - Change here to update everywhere
export const ICON_SIZES = {
  xs: 12,
  sm: 14,
  base: 16, // Nouveau : Taille standard interface
  md: 18,
  lg: 20, // Modifié : Taille Médium/Large
  xl: 24, // Décalé
  xxl: 28,
  huge: 32,
  giant: 48,
};

// 2. Global Styling - Change here to update weight
export const ICON_CONFIG = {
  strokeWidth: 2, // Standard is 2, you can use 1.5 for a "lighter" look
};

export const Icons = {
  // Contact & Social
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,

  // Navigation
  Menu,
  X,
  ChevronRight,
  ArrowRight,

  // Features/General
  Sparkles,
  Shield,
  Zap,
  Component,
  Calendar,
  Globe,

  // Expose configuration for easy access
  SIZES: ICON_SIZES,
  CONFIG: ICON_CONFIG,
};

export type IconType = LucideIcon;
