import { useEffect, RefObject } from 'react';

const round = (value: number, precision = 3) => parseFloat(value.toFixed(precision));
const clamp = (value: number, min = 0, max = 100) => Math.min(Math.max(value, min), max);

export const useGlowEffect = (cardRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const pointerPositionRelativeToElement = (el: HTMLElement, e: PointerEvent) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      const px = clamp((100 / width) * x);
      const py = clamp((100 / height) * y);
      return { percent: [px, py] };
    };

    const handlePointerMove = (e: PointerEvent) => {
      const position = pointerPositionRelativeToElement(card, e);
      const [perx, pery] = position.percent;

      card.style.setProperty('--pointer-x', `${round(perx)}%`);
      card.style.setProperty('--pointer-y', `${round(pery)}%`);
    };

    const handlePointerEnter = () => {
      card.classList.add('is-glowing');
    };

    const handlePointerLeave = () => {
      card.classList.remove('is-glowing');
    };

    card.addEventListener('pointerenter', handlePointerEnter);
    card.addEventListener('pointermove', handlePointerMove);
    card.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      card.removeEventListener('pointerenter', handlePointerEnter);
      card.removeEventListener('pointermove', handlePointerMove);
      card.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [cardRef]);
};