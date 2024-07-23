import ToastContainer from '@/container/ToastContainer';
import '@/style/globals.css';
import { CommonProps } from '@/types/common';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import RecoilProvider from './RecoilProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'web招待状',
  description: 'ユンソン・じゅあんの結婚式に招待します。',
  icons: {
    icon: '/image/icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const RootLayout: React.FC<CommonProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilProvider>
          {children}
          <ToastContainer />
        </RecoilProvider>
      </body>
    </html>
  );
};

export default RootLayout;
