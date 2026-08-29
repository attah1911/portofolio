'use client';

import { setRefs } from '@/utils/setRefs';
import { useIntlayer, useLocale } from 'next-intlayer';
import { ComponentProps, useCallback, useEffect, useRef } from 'react';

export type LocalTimeProps = ComponentProps<'span'>;

export const LocalTime = ({ ref, ...props }: LocalTimeProps) => {
  const t = useIntlayer('location');
  const { locale } = useLocale();
  const timeZone = String(t.timeZone);

  const getTime = useCallback(
    () =>
      new Date().toLocaleTimeString(locale === 'id' ? 'id-ID' : 'en-US', {
        timeZone,
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      }),
    [locale, timeZone]
  );

  const innerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      el.textContent = getTime();
    }, 1000 * 60); // Every minute

    return () => {
      clearInterval(interval);
    };
  }, [getTime]);

  return (
    <span
      ref={setRefs(ref, innerRef)}
      {...props}
    >
      {getTime()}
    </span>
  );
};
