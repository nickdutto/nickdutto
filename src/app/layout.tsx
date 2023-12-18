import '~/styles/globals.css';

import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { type Metadata } from 'next';

import Providers from '~/components/providers/Providers';

export const metadata: Metadata = {
  title: 'Nick Dutton',
  description: 'Fullstack Web Developer, Australia',
  icons: {
    icon: '/ico/favicon.ico',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="flex w-full flex-col items-center">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
