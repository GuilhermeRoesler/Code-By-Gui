import React from 'react';

interface TextFlyInProps {
  children: string;
  className?: string;
}

const TextFlyIn: React.FC<TextFlyInProps> = ({ children, className }) => {
  const slices = React.useMemo(() => {
    const numSlices = 40;
    return Array.from({ length: numSlices }).map((_, i) => {
      const key = i + 1;
      const row = Math.floor(i / 20);

      // Lógica de clip-path traduzida do SCSS
      const p1x = Math.floor(i / 2) * 10 - row * 100;
      const p1y = row * 50;
      const p2x = Math.floor(key / 2) * 10 - row * 100;
      const p2y = Math.ceil(key % 2) * 50 + (row * 50);
      const p3x = Math.ceil(key / 2) * 10 - row * 100;
      const p3y = (row + 1) * 50;
      const clipPath = `polygon(${p1x}% ${p1y}%, ${p2x}% ${p2y}%, ${p3x}% ${p3y}%)`;

      // Lógica de cor traduzida do SCSS
      const color = `rgba(${255 - key * 2}, ${50 - key / 2}, ${key * 3}, 1)`;

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