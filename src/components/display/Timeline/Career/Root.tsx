'use client';

import { ComponentProps, useRef } from 'react';
import { cn } from '@/utils/cn';
import { CareerTimelineLine } from './Line';

export type CareerTimelineProps = ComponentProps<'ol'>;

export const CareerTimeline = ({ className, children, ...props }: CareerTimelineProps) => {
  const containerRef = useRef<HTMLOListElement>(null);

  return (
    <div className='relative mx-auto w-full max-w-5xl py-12'>
      <ol
        ref={containerRef}
        className={cn('relative flex flex-col gap-12 md:gap-24', className)}
        {...props}
      >
        <CareerTimelineLine containerRef={containerRef} />
        {children}
      </ol>
    </div>
  );
};
