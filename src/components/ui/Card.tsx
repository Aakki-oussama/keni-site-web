import { cn } from "../../lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

export const Card = ({ className, ref, ...props }: CardProps) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative rounded-[20px] overflow-hidden shadow-xl",
        className,
      )}
      {...props}
    />
  );
};

Card.displayName = "Card";
