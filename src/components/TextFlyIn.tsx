import React from 'react';

interface TextFlyInProps {
  children: string;
  className?: string;
}

const TextFlyIn: React.FC<TextFlyInProps> = ({ children, className }) => {
  const slices = React.useMemo(() => {
    const numSlices = 40;
    // Cores do gradiente (HSL: Hue, Saturation, Lightness)
    const startColor = { h: 41, s: 98, l: 49 }; // Amarelo/Laranja (Primary)
    const endColor = { h: 356, s: 78, l: 56 }; // Vermelho (Accent)

    // A diferença de matiz (hue) precisa considerar o caminho mais curto no círculo de cores
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

      // Interpolação de cores HSL para criar o gradiente
      const currentHue = startColor.h + hueDifference * progress;
      const currentSat = startColor.s + (endColor.s - startColor.s) * progress;
      const currentLight = startColor.l + (endColor.l - startColor.l) * progress;
      const color = `hsl(${currentHue}, ${currentSat}%, ${currentLight}%)`;

      // Lógica de clip-path
      const p1x = Math.floor(i / 2) * 10 - row * 100;
      const p1y = row * 50;
      const p2x = Math.floor(key / 2) * 10 - row * 100;
      const p2y = Math.ceil(key % 2) * 50 + (row * 50);
      const p3x = Math.ceil(key / 2) * 10 - row * 100;
      const p3y = (row + 1) * 50;
      const clipPath = `polygon(${p1x}% ${p1y}%, ${p2x}% ${p2y}%, ${p3x}% ${p3y}%)`;

      // Valores aleatórios para a animação
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
  }, [children]);

  return (
    <div className={`text-fly-in-container ${className}`}>
      {slices}
    </div>
  );
};

export default TextFlyIn;