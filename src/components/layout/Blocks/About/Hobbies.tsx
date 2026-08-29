import { BentoGridItem, BentoGridItemProps } from '@/components/display/BentoGrid';
import { MergeProps } from '@/types/MergeProps';
import { ReactNode } from 'react';
import GradientCard from '@/components/display/Card/Gradient';

export type AboutHobbiesProps = MergeProps<
  { value?: BentoGridItemProps['value']; icon: ReactNode; title: ReactNode; text: ReactNode },
  BentoGridItemProps
>;

export const AboutHobbies = ({ icon, title, text, ...props }: AboutHobbiesProps) => {
  return (
    <BentoGridItem
      value='hobbies'
      {...props}
    >
      <GradientCard
        className='group h-full rounded-none after:rounded-none md:col-span-6 lg:col-span-3'
        gradient='radial-gradient(
                    140% 140% at 0% 100%,
                    #0066ff 0%,
                    #001133 10%,
                    #00aaff 20%,
                    transparent 60%
                  )'
      >
        <GradientCard.Icon>{icon}</GradientCard.Icon>

        <GradientCard.Title>{title}</GradientCard.Title>

        <GradientCard.Text asChild>{text}</GradientCard.Text>
      </GradientCard>
    </BentoGridItem>
  );
};

