import { cn } from '@/utils/cn';
import { PiPlusBold } from 'react-icons/pi';
import { Button, ButtonProps } from '@/components/input/Button';
import { useIntlayer } from 'next-intlayer/server';
import { CareerCardClientTrigger } from '@/components/display/Card/Career/ClientTrigger';

export type CareerCardTriggerProps = Omit<ButtonProps, 'children'>;

export const CareerCardTrigger = ({ className, ...props }: CareerCardTriggerProps) => {
  const t = useIntlayer('career-card');

  return (
    <CareerCardClientTrigger>
      <Button
        iconOnly
        className={cn(
          '-mt-px ml-auto h-auto rounded-none border-t-border border-l-border px-6 text-placeholder transition-none md:px-12 engaged:text-primary',
          className
        )}
        {...props}
      >
        <PiPlusBold className='transition-[rotate] duration-700 ease-backOut group-data-[state=open]/button:rotate-405' />

        <span className='sr-only group-data-[state=open]/button:hidden'>{t.open}</span>

        <span className='sr-only group-data-[state=closed]/button:hidden'>{t.close}</span>
      </Button>
    </CareerCardClientTrigger>
  );
};
