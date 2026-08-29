'use client';

import { ClipboardControl, ClipboardTrigger } from '@/components/input/Clipboard';
import { MagneticButton, MagneticButtonProps } from '@/components/input/Button/Magnetic';
import { TooltipTrigger } from '@/components/feedback/Tooltip';
import { PiCheckBold, PiClipboardTextFill } from 'react-icons/pi';

export type EmailClipboardTriggerProps = Omit<MagneticButtonProps, 'children'>;

export const EmailClipboardTrigger = (props: EmailClipboardTriggerProps) => {
  return (
    <ClipboardControl>
      <TooltipTrigger>
        <ClipboardTrigger>
          <MagneticButton
            iconOnly
            color='primary'
            {...props}
          >
            <PiClipboardTextFill className='transition-transform duration-300 ease-backOut group-data-copied/button:translate-x-[200%]' />

            <PiCheckBold className='absolute translate-x-[-200%] transition-transform duration-300 ease-backOut group-data-copied/button:translate-x-0' />
          </MagneticButton>
        </ClipboardTrigger>
      </TooltipTrigger>
    </ClipboardControl>
  );
};
