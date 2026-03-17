import { cn } from "../../lib/utils";

// ─── AVATAR ────────────────────────────────────────────────
interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "default" | "lg";
  ref?: React.Ref<HTMLDivElement>;
}

export const Avatar = ({
  className,
  size = "default",
  ref,
  ...props
}: AvatarProps) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative flex shrink-0 select-none rounded-full overflow-hidden",
        size === "sm" && "w-6 h-6",
        size === "default" && "w-10 h-10",
        size === "lg" && "w-12 h-12",
        className,
      )}
      {...props}
    />
  );
};
Avatar.displayName = "Avatar";

// ─── AVATAR IMAGE ──────────────────────────────────────────
interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  ref?: React.Ref<HTMLImageElement>;
}

export const AvatarImage = ({ className, ref, ...props }: AvatarImageProps) => {
  return (
    <img
      ref={ref}
      className={cn("aspect-square w-full h-full object-cover", className)}
      {...props}
    />
  );
};
AvatarImage.displayName = "AvatarImage";

// ─── AVATAR FALLBACK ───────────────────────────────────────
interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

export const AvatarFallback = ({
  className,
  ref,
  ...props
}: AvatarFallbackProps) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex w-full h-full items-center justify-center rounded-full bg-white/20 text-white text-sm font-medium",
        className,
      )}
      {...props}
    />
  );
};
AvatarFallback.displayName = "AvatarFallback";

// ─── AVATAR GROUP ──────────────────────────────────────────
interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

export const AvatarGroup = ({ className, ref, ...props }: AvatarGroupProps) => {
  return (
    <div ref={ref} className={cn("flex -space-x-3", className)} {...props} />
  );
};
AvatarGroup.displayName = "AvatarGroup";

// ─── AVATAR GROUP COUNT ────────────────────────────────────
interface AvatarGroupCountProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

export const AvatarGroupCount = ({
  className,
  ref,
  ...props
}: AvatarGroupCountProps) => {
  return (
    <div
      ref={ref}
      className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center",
        "bg-white text-brand text-[10px] font-bold",
        "ring-2 ring-white/50 shrink-0",
        className,
      )}
      {...props}
    />
  );
};
AvatarGroupCount.displayName = "AvatarGroupCount";
