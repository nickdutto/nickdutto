import '~/styles/globals.css';

import { type Metadata } from 'next';
import { Poppins } from 'next/font/google';

import ThemeProvider from '~/components/ThemeProvider';
import { cn } from '~/lib/utils';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Nick Dutton',
  description: 'Fullstack Web Developer, Australia',
  icons: {
    icon: '/ico/favicon.ico',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(poppins.className, 'bg-topography')}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
