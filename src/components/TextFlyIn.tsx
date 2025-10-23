import React, { useState, useEffect, useMemo } from 'react';

interface TextFlyInProps {
  children: string;
  className?: string;
}

const TextFlyIn: React.FC<TextFlyInProps> = ({ children, className }) => {
  const [colors, setColors] = useState({
    start: { h: 214, s: 84, l: 56 }, // Default primary
    end: { h: 142, s: 76, l: 47 }    // Default accent
  });

  useEffect(() => {
    const parseHsl = (hslString: string) => {
      if (!hslString) return null;
      const [h, s, l] = hslString.trim().replace(/%/g, '').split(' ').map(Number);
      return { h, s, l };
    };

    const updateColors = () => {
      if (typeof window === 'undefined') return;
      const style = getComputedStyle(document.documentElement);
      const primaryHsl = style.getPropertyValue('--primary');
      const accentHsl = style.getPropertyValue('--accent');
      const start = parseHsl(primaryHsl);
      const end = parseHsl(accentHsl);

      if (start && end) {
        setColors({ start, end });
      }
    };

    updateColors();

    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && (mutation.attributeName === 'data-theme' || mutation.attributeName === 'style')) {
          updateColors();
        }
      }
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const slices = useMemo(() => {
    const numSlices = 40;
    const startColor = colors.start;
    const endColor = colors.end;

    let hueDifference = endColor.h - startColor.h;
    if (Math.abs(hueDifference) > 180) {
      if (hueDifference > 0) {
        hueDifference -= 360;
      } else {
        hueDifference += 360;
      }
    }

    return Array.from({ length: numSlices }).map((_, i) => {
      const key = i + 1;
      const row = Math.floor(i / 20);
      const progress = i / (numSlices - 1);

      const currentHue = startColor.h + hueDifference * progress;
      const currentSat = startColor.s + (endColor.s - startColor.s) * progress;
      const currentLight = startColor.l + (endColor.l - startColor.l) * progress;
      const color = `hsl(${currentHue}, ${currentSat}%, ${currentLight}%)`;

      const p1x = Math.floor(i / 2) * 10 - row * 100;
      const p1y = row * 50;
      const p2x = Math.floor(key / 2) * 10 - row * 100;
      const p2y = Math.ceil(key % 2) * 50 + (row * 50);
      const p3x = Math.ceil(key / 2) * 10 - row * 100;
      const p3y = (row + 1) * 50;
      const clipPath = `polygon(${p1x}% ${p1y}%, ${p2x}% ${p2y}%, ${p3x}% ${p3y}%)`;

      const style: React.CSSProperties = {
        '--init-x': `${Math.random() * 1000 - 500}deg`,
        '--init-y': `${Math.random() * 1000 - 500}deg`,
        '--init-z': `${Math.random() * 1000 - 500}deg`,
        '--init-depth': `${Math.random() * 3000 - 2500}px`,
        animationDelay: `${i * 40}ms`,
        clipPath,
        color,
      };

      return (
        <div key={i} className="text-fly-in-slice" style={style}>
          {children}
        </div>
      );
    });
  }, [children, colors]);

  return (
    <div className={`text-fly-in-container ${className}`}>
      {slices}
    </div>
  );
};

export default TextFlyIn;