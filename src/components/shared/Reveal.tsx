import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  animation?: string;
  delay?: string;
  threshold?: number;
  className?: string;
}

/**
 * Reveal Component
 * A wrapper that triggers entrance animations when the element scrolls into view.
 * Modern function-based implementation with Intersection Observer.
 */
export function Reveal({
  children,
  animation = "animate-enter-right",
  delay = "",
  threshold = 0.1,
  className = "",
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { 
        threshold, 
        rootMargin: "0px 0px -10% 0px" 
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${className} transition-opacity duration-500 ${
        isVisible ? `${animation} ${delay}` : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
