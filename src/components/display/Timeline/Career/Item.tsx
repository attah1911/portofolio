'use client';

import { useRef } from 'react';

import { AnimateOnView } from '@/components/motion/Animate/OnView';
import { Text } from '@/components/system/Text';
import { Title } from '@/components/system/Title';
import { Career } from '@/types/Career';
import { cn } from '@/utils/cn';

export type CareerTimelineItemProps = {
  item: Career & {
    noEnd: string;
  };
  index: number;
  className?: string;
};

export const CareerTimelineItem = ({
  item,
  index,
  className
}: CareerTimelineItemProps) => {
  const isEven = index % 2 === 0;

  const startYear = new Date(item.start).getFullYear();
  const endYear = item.end ? new Date(item.end).getFullYear() : item.noEnd;
  const rolesStr = item.roles.join(' & ');

  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <li
      className={cn(
        'relative grid grid-cols-[1fr_auto_1fr] items-start gap-x-8',
        'max-md:grid-cols-[3rem_1fr] max-md:gap-x-4',
        className
      )}
    >
      {/* ── Left side (desktop only) ─────────────────── */}
      <div
        className={cn(
          'max-md:hidden',
          isEven ? 'flex justify-end' : 'invisible'
        )}
      >
        {isEven && (
          <AnimateOnView
            config={{ from: { opacity: 0, x: -32 }, to: { opacity: 1, x: 0 } }}
          >
            <CareerTimelineCard
              startYear={String(startYear)}
              endYear={String(endYear)}
              rolesStr={rolesStr}
              item={item}
              align='right'
            />
          </AnimateOnView>
        )}
      </div>

      {/* ── Node ──────────────────────────────────────── */}
      <div className='flex flex-col items-center max-md:mt-1'>
        <AnimateOnView
          config={{ from: { opacity: 0, scale: 0 }, to: { opacity: 1, scale: 1 } }}
        >
          <div
            ref={nodeRef}
            className={cn(
              'relative z-10 flex size-4 items-center justify-center rounded-full border-2 border-primary bg-body transition-all duration-300',
              'after:absolute after:size-full after:scale-0 after:rounded-full after:bg-primary/20 after:transition-transform',
              'hover:after:scale-150'
            )}
          >
            <span className='size-2 rounded-full bg-primary' />
          </div>
        </AnimateOnView>
      </div>

      {/* ── Right side (desktop: odd items / mobile: all) ─ */}
      <div className={cn(isEven ? 'invisible max-md:!visible' : '', 'max-md:!visible')}>
        <AnimateOnView
          config={{ from: { opacity: 0, x: 32 }, to: { opacity: 1, x: 0 } }}
        >
          {/* Mobile: always show here. Desktop: only odd items */}
          <div className={cn(!isEven ? 'block' : 'hidden max-md:block')}>
            <CareerTimelineCard
              startYear={String(startYear)}
              endYear={String(endYear)}
              rolesStr={rolesStr}
              item={item}
              align='left'
            />
          </div>
        </AnimateOnView>
      </div>
    </li>
  );
};

/* ──────────────────────────────────────────────────────────────────── */
/* Internal card sub-component                                          */
/* ──────────────────────────────────────────────────────────────────── */

type CareerTimelineCardProps = {
  startYear: string;
  endYear: string;
  rolesStr: string;
  item: Career;
  align: 'left' | 'right';
};

const CareerTimelineCard = ({
  startYear,
  endYear,
  rolesStr,
  item,
  align
}: CareerTimelineCardProps) => {
  return (
    <article
      className={cn(
        'group relative max-w-sm rounded-lg border bg-body p-5 transition-colors duration-300 hover:bg-body-hover',
        'before:absolute before:top-3 before:hidden before:h-px before:w-6 before:bg-border before:transition-colors before:duration-300 md:before:block',
        align === 'left'
          ? 'before:-left-6 before:origin-left'
          : 'before:-right-6 before:origin-right'
      )}
    >
      {/* Year badge */}
      <span className='mb-3 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-medium tracking-wider text-primary'>
        {startYear}
        {' — '}
        {endYear}
      </span>

      {/* Title */}
      <Title
        as='h3'
        styleAs='h6'
        className='mb-1.5 leading-snug'
      >
        {item.title}
      </Title>

      {/* Roles */}
      <Text
        small
        className='mb-4 line-clamp-1 tracking-wider text-placeholder lowercase'
        title={rolesStr}
      >
        {rolesStr}
      </Text>

      {/* Description */}
      <div className='text-sm leading-relaxed tracking-wide text-body-emphasis/80'>
        {item.text}
      </div>
    </article>
  );
};
