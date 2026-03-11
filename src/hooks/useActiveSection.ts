// Ce hook détecte quelle section est visible lors du scroll pour allumer le menu correspondant.
// It tracks the active section ID using IntersectionObserver for menu highlighting.
import { useState, useEffect } from 'react';

export const useActiveSection = (itemIds: string[]) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px', // Trigger when section is in the top/middle of the screen
        threshold: 0,
      }
    );

    itemIds.forEach((id) => {
      const element = document.getElementById(id.replace('#', ''));
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [itemIds]);

  return activeId;
};
