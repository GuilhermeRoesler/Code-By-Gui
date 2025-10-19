import React, { useEffect, useRef, useId } from 'react';

interface HalftoneImageProps {
  src: string;
  alt: string;
  isActive: boolean;
}

const config = {
  direction: "center",
  spacing: 20,
  duration: 1.0,
  stagger: 0.035
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

const HalftoneImage: React.FC<HalftoneImageProps> = ({ src, alt, isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const clipPathRef = useRef<SVGClipPathElement>(null);
  const clipId = useId();
  const clipPathId = `halftone-clip-${clipId}`;

  useEffect(() => {
    if (isActive && containerRef.current && clipPathRef.current) {
      const clipPath = clipPathRef.current;
      const container = containerRef.current;

      clipPath.innerHTML = "";

      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const width = rect.width;
      const height = rect.height;

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
          animate.setAttribute("repeatCount", "1");
          animate.setAttribute("fill", "freeze");
          animate.setAttribute("begin", `${revealDelay}s`);

          circle.appendChild(animate);
          clipPath.appendChild(circle);
        }
      }
    }
  }, [isActive]);

  return (
    <div
      ref={containerRef}
      className={`halftone-image-container ${isActive ? 'active' : ''}`}
    >
      <svg className="clip-svg">
        <defs>
          <clipPath id={clipPathId} ref={clipPathRef} />
        </defs>
      </svg>
      <img
        src={src}
        alt={alt}
        className="halftone-image-content"
        style={{ clipPath: `url(#${clipPathId})` }}
      />
    </div>
  );
};

export default HalftoneImage;