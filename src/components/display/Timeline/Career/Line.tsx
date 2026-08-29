'use client';

import { useRef } from 'react';

import { gsap, useGSAP } from '@/hooks/useGSAP';
import { cn } from '@/utils/cn';

export type CareerTimelineLineProps = {
  containerRef: React.RefObject<HTMLElement | null>;
  className?: string;
};

export const CareerTimelineLine = ({
  containerRef,
  className
}: CareerTimelineLineProps) => {
  const fgRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const fg = fgRef.current;
      if (!fg) return;
      
      // Find container dynamically to avoid ref timing issues
      const container = fg.closest('ol') || containerRef.current || fg.parentElement;

      gsap.fromTo(
        fg,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          transformOrigin: 'top center',
          scrollTrigger: {
            trigger: container,
            start: 'top 75%',
            end: 'bottom 25%',
            scrub: 1
          }
        }
      );
    },
    { dependencies: [containerRef] }
  );

  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 flex w-0.5 flex-col',
        'max-md:left-6 max-md:translate-x-0',
        className
      )}
    >
      {/* Background track */}
      <span className='absolute inset-0 bg-border' />

      {/* Animated foreground fill */}
      <span
        ref={fgRef}
        className='absolute inset-0 origin-top bg-primary'
        style={{ transform: 'scaleY(0)' }}
      />
    </div>
  );
};
