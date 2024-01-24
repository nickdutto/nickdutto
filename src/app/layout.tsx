import '~/styles/globals.css';

import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { type Metadata } from 'next';

import Navbar from '~/components/layout/Navbar';
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
      <body className="h-full min-h-[100svh] w-full bg-[radial-gradient(#18181b_1.5px,transparent_1.5px)] [background-size:30px_30px]">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
