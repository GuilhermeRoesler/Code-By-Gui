import { useEffect, RefObject } from 'react';

const round = (value: number, precision = 3) => parseFloat(value.toFixed(precision));
const clamp = (value: number, min = 0, max = 100) => Math.min(Math.max(value, min), max);

export const useGlowEffect = (cardRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const centerOfElement = (el: HTMLElement) => {
      const { width, height } = el.getBoundingClientRect();
      return [width / 2, height / 2];
    };

    const pointerPositionRelativeToElement = (el: HTMLElement, e: PointerEvent) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      const px = clamp((100 / width) * x);
      const py = clamp((100 / height) * y);
      return { pixels: [x, y], percent: [px, py] };
    };

    const distanceFromCenter = (el: HTMLElement, x: number, y: number) => {
      const [cx, cy] = centerOfElement(el);
      return [x - cx, y - cy];
    };

    const closenessToEdge = (el: HTMLElement, x: number, y: number) => {
      const [cx, cy] = centerOfElement(el);
      const [dx, dy] = distanceFromCenter(el, x, y);
      let k_x = Infinity;
      let k_y = Infinity;
      if (dx !== 0) k_x = cx / Math.abs(dx);
      if (dy !== 0) k_y = cy / Math.abs(dy);
      return clamp(1 / Math.min(k_x, k_y), 0, 1);
    };

    const angleFromPointerEvent = (dx: number, dy: number) => {
      let angleRadians = 0;
      let angleDegrees = 0;
      if (dx !== 0 || dy !== 0) {
        angleRadians = Math.atan2(dy, dx);
        angleDegrees = angleRadians * (180 / Math.PI) + 90;
        if (angleDegrees < 0) {
          angleDegrees += 360;
        }
      }
      return angleDegrees;
    };

    const handlePointerMove = (e: PointerEvent) => {
      const position = pointerPositionRelativeToElement(card, e);
      const [px, py] = position.pixels;
      const [perx, pery] = position.percent;
      const [dx, dy] = distanceFromCenter(card, px, py);
      const edge = closenessToEdge(card, px, py);
      const angle = angleFromPointerEvent(dx, dy);

      card.style.setProperty('--pointer-x', `${round(perx)}%`);
      card.style.setProperty('--pointer-y', `${round(pery)}%`);
      card.style.setProperty('--pointer-d', `${round(edge * 100)}`);
      card.style.setProperty('--pointer-°', `${round(angle)}deg`);
    };

    const handlePointerLeave = () => {
      card.style.removeProperty('--pointer-x');
      card.style.removeProperty('--pointer-y');
      card.style.removeProperty('--pointer-d');
      card.style.removeProperty('--pointer-°');
    }

    card.addEventListener('pointermove', handlePointerMove);
    card.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      card.removeEventListener('pointermove', handlePointerMove);
      card.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [cardRef]);
};