import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';
import GradientCard, { GradientCardProps } from '@/components/display/Card/Gradient';
import { PrimaryHeroCardProps } from '@/components/layout/Heros/Primary/Cards';

export type PrimaryHeroCenterProps = MergeProps<
  { gradient?: GradientCardProps['gradient'] } & PrimaryHeroCardProps,
  GradientCardProps
>;

export const PrimaryHeroCenter = ({
  icon,
  text,
  title,
  className,
  ...props
}: PrimaryHeroCenterProps) => {
  return (
    <GradientCard
      data-card
      className={cn('group min-h-64 md:col-span-full lg:col-span-6', className)}
      gradient='radial-gradient(
            140% 140% at 50% 0%,
            #00aaff 0%,
            #00aaff 25%,
            transparent 37.5%,
            #0066ff 50%,
            #001133 75%
          )'
      {...props}
    >
      <GradientCard.Icon className='*:transition-transform *:duration-700 *:ease-backOut group-hover:*:rotate-x-360'>
        {icon}
      </GradientCard.Icon>

      <GradientCard.Title as='h2'>{title}</GradientCard.Title>

      <GradientCard.Text>{text}</GradientCard.Text>
    </GradientCard>
  );
};

