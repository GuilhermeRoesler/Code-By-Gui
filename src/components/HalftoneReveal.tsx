import { useEffect, useRef } from 'react';

interface HalftoneRevealProps {
  src: string;
  alt: string;
  isActive: boolean;
}

const config = {
  direction: "center", // top, bottom, left, right, center
  spacing: 20,
  duration: 1.5,
  stagger: 0.05
};

function getRevealDelay(row: number, col: number, rows: number, cols: number) {
  switch (config.direction) {
    case "top":
      return row * config.stagger;
    case "bottom":
      return (rows - 1 - row) * config.stagger;
    case "left":
      return col * config.stagger;
    case "right":
      return (cols - 1 - col) * config.stagger;
    case "center":
      const centerRow = (rows - 1) / 2;
      const centerCol = (cols - 1) / 2;
      const distance = Math.sqrt(
        Math.pow(row - centerRow, 2) + Math.pow(col - centerCol, 2)
      );
      return distance * config.stagger;
    default:
      return row * config.stagger;
  }
}

const HalftoneReveal = ({ src, alt, isActive }: HalftoneRevealProps) => {
  const clipPathRef = useRef<SVGClipPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const clipId = `halftone-clip-${Math.random().toString(36).substring(7)}`;

  useEffect(() => {
    const clipPath = clipPathRef.current;
    const container = containerRef.current;

    if (!clipPath || !container || !isActive) {
      return;
    }

    const createHalftoneEffect = () => {
      clipPath.innerHTML = "";

      const rect = container.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      if (width === 0 || height === 0) return;

      const cols = Math.max(1, Math.floor(width / config.spacing));
      const rows = Math.max(1, Math.floor(height / config.spacing));
      const actualSpacingX = width / cols;
      const actualSpacingY = height / rows;
      const maxRadius = Math.max(actualSpacingX, actualSpacingY) * 1.2;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = (col + 0.5) * actualSpacingX;
          const y = (row + 0.5) * actualSpacingY;
          const revealDelay = getRevealDelay(row, col, rows, cols);

          const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
          circle.setAttribute("cx", String(x));
          circle.setAttribute("cy", String(y));
          circle.setAttribute("r", "0");

          const animate = document.createElementNS("http://www.w3.org/2000/svg", "animate");
          animate.setAttribute("attributeName", "r");
          animate.setAttribute("values", `0;${maxRadius}`);
          animate.setAttribute("dur", `${config.duration}s`);
          animate.setAttribute("fill", "freeze");
          animate.setAttribute("begin", `${revealDelay}s`);

          circle.appendChild(animate);
          clipPath.appendChild(circle);
        }
      }
    };

    // Delay creation slightly to ensure dimensions are available
    const timeoutId = setTimeout(createHalftoneEffect, 50);

    return () => {
      clearTimeout(timeoutId);
      if (clipPath) {
        clipPath.innerHTML = "";
      }
    };
  }, [isActive, clipId]);

  return (
    <div ref={containerRef} className={`halftone-reveal-container ${isActive ? 'active' : ''}`}>
      <svg className="clip-svg">
        <defs>
          <clipPath ref={clipPathRef} id={clipId}></clipPath>
        </defs>
      </svg>
      <div
        className="halftone-content"
        style={{
          clipPath: `url(#${clipId})`,
          backgroundImage: `url(${src})`,
        }}
        role="img"
        aria-label={alt}
      />
    </div>
  );
};

export default HalftoneReveal;