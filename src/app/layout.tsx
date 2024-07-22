import ToastContainer from '@/container/ToastContainer';
import '@/style/globals.css';
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

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <RecoilProvider>
        <body className={inter.className}>{children}</body>
        <ToastContainer />
      </RecoilProvider>
    </html>
  );
};

export default RootLayout;
