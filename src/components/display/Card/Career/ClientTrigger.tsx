'use client';

import { AccordionTrigger, AccordionTriggerProps } from '@/components/display/Accordion';

export type CareerCardClientTriggerProps = AccordionTriggerProps;

export const CareerCardClientTrigger = (props: CareerCardClientTriggerProps) => {
  return (
    <AccordionTrigger
      asChild
      {...props}
    />
  );
};
