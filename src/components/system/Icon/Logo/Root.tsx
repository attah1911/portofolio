import { ComponentProps } from 'react';

import { MergeProps } from '@/types/MergeProps';

export type LogoIconProps = MergeProps<{ variant: 'primary' | 'secondary' }, ComponentProps<'svg'>>;

export const LogoIcon = ({ variant, ...props }: LogoIconProps) => {
  return variant === 'primary' ? (
    <svg
      aria-hidden
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 3080 1080'
      {...props}
    >
      <image href="/images/logo.webp" width="1080" height="1080" x="0" y="0" />
      <text
        x='1180'
        y='650'
        fontSize='400'
        fill="currentColor"
      >
        Hatta
      </text>
    </svg>
  ) : (
    <svg
      aria-hidden
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 500 47'
      {...props}
    >
      <text
        x="0"
        y="35"
        fontSize="30"
        fill="currentColor"
        fontWeight="bold"
      >
        Muhammad Hatta Y.G
      </text>
    </svg>
  );
};
