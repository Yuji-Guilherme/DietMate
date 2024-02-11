import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Provider } from '@/providers';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Diet Mate',
  description: ''
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
