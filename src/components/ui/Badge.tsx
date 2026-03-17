import { cn } from "../../lib/utils";

interface BadgeProps {
  label: string;
  className?: string;
}

export const Badge = ({ label, className }: BadgeProps) => {
  return (
    <div className={cn("inline-flex items-center gap-3 mb-4", className)}>
      {/* Line + Round — no gap between them */}
      <div className="flex items-center">
        <span className="w-12 h-px bg-brand" />
        <span className="w-3 h-3 rounded-full bg-brand" />
      </div>
      {/* Text */}
      <span className="text-xs font-marcellus uppercase tracking-widest text-white">
        {label}
      </span>
    </div>
  );
};
