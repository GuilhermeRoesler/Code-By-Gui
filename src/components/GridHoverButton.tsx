import React from 'react';
import { cn } from '@/lib/utils';

interface GridHoverButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const GridHoverButton = React.forwardRef<HTMLAnchorElement, GridHoverButtonProps>(
  ({ children, className, ...props }, ref) => {
    const numCells = 20;

    return (
      <a
        ref={ref}
        className={cn('grid-hover-btn', className)}
        {...props}
      >
        <div className="btn-cells">
          {Array.from({ length: numCells }).map((_, i) => (
            <span key={i}></span>
          ))}
        </div>
        <span className="btn-content">
          {children}
        </span>
      </a>
    );
  }
);

GridHoverButton.displayName = 'GridHoverButton';

export default GridHoverButton;