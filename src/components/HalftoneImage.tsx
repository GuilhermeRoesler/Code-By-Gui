import React, { useEffect, useRef, useId, useState } from 'react';

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

interface Circle {
  cx: number;
  cy: number;
  maxRadius: number;
  revealDelay: number;
}

const HalftoneImage: React.FC<HalftoneImageProps> = ({ src, alt, isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const clipId = useId();
  const clipPathId = `halftone-clip-${clipId}`;
  const [circles, setCircles] = useState<Circle[]>([]);

  useEffect(() => {
    if (isActive && containerRef.current) {
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) {
        setCircles([]);
        return;
      }

      const width = rect.width;
      const height = rect.height;

      const cols = Math.max(1, Math.floor(width / config.spacing));
      const rows = Math.max(1, Math.floor(height / config.spacing));
      const actualSpacingX = width / cols;
      const actualSpacingY = height / rows;
      const maxRadius = Math.max(actualSpacingX, actualSpacingY) * 1.2;

      const newCircles: Circle[] = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = (col + 0.5) * actualSpacingX;
          const y = (row + 0.5) * actualSpacingY;
          const revealDelay = getRevealDelay(row, col, rows, cols);
          newCircles.push({ cx: x, cy: y, maxRadius, revealDelay });
        }
      }
      setCircles(newCircles);
    } else {
      setCircles([]);
    }
  }, [isActive]);

  return (
    <div
      ref={containerRef}
      className={`halftone-image-container ${isActive ? 'active' : ''}`}
    >
      <svg className="clip-svg">
        <defs>
          <clipPath id={clipPathId}>
            {circles.map((circle, i) => (
              <circle key={i} cx={circle.cx} cy={circle.cy} r="0">
                <animate
                  attributeName="r"
                  values={`0;${circle.maxRadius}`}
                  dur={`${config.duration}s`}
                  repeatCount="1"
                  fill="freeze"
                  begin={`${circle.revealDelay}s`}
                />
              </circle>
            ))}
          </clipPath>
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