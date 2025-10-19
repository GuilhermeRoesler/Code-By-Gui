import { useEffect, RefObject } from 'react';

export const use3dCardEffect = (containerRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll('.stat-card-3d');
    let mouseEnterTarget: HTMLElement | null = null;
    let targetBounds: DOMRect | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseEnterTarget || !targetBounds) return;

      const { offsetX, offsetY } = e;
      const centerX = offsetX - (targetBounds.width * 0.5);
      const centerY = offsetY - (targetBounds.height * 0.5);

      const posX = Math.round(-1 * centerX * 0.1);
      const posY = Math.round(centerY * 0.1);

      mouseEnterTarget.style.setProperty('--x', String(posY));
      mouseEnterTarget.style.setProperty('--y', String(posX));
    };

    const handleMouseLeave = () => {
      if (!mouseEnterTarget) return;
      mouseEnterTarget.style.setProperty('--x', '0');
      mouseEnterTarget.style.setProperty('--y', '0');
      mouseEnterTarget.removeEventListener('mousemove', handleMouseMove);
      mouseEnterTarget.removeEventListener('mouseleave', handleMouseLeave);
      mouseEnterTarget = null;
    };

    const handleMouseEnter = (e: Event) => {
      mouseEnterTarget = e.currentTarget as HTMLElement;
      targetBounds = mouseEnterTarget.getBoundingClientRect();
      mouseEnterTarget.addEventListener('mousemove', handleMouseMove);
      mouseEnterTarget.addEventListener('mouseleave', handleMouseLeave);
    };

    cards.forEach(card => {
      card.addEventListener('mouseenter', handleMouseEnter);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mouseenter', handleMouseEnter);
      });
    };
  }, [containerRef]);
};