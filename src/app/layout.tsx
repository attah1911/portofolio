import { PropsWithChildren } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '@/styles/globals.css';
import 'lenis/dist/lenis.css';

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}

      <SpeedInsights />
    </>
  );
};

export default RootLayout;
