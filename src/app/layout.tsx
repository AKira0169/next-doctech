import type { Metadata } from 'next';
import './globals.css';
import Layout from './components/Layout/Layout';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  icons: '/doctech.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Layout> {children}</Layout>
      </body>
    </html>
  );
}
