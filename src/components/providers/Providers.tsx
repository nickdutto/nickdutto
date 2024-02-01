'use client';

import { NextUIProvider } from '@nextui-org/react';

import { useRouter } from 'next/navigation';
import { Toaster } from 'sonner';

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      {children}
      <Toaster
        toastOptions={{
          classNames: {
            toast: '!bg-[#0b0b0c] !text-default-300 !border !border-[#27272a]',
            success: '!bg-success !text-black !border !border-[#27272a]',
            error: '!bg-danger !text-[#ECEDEE] !border !border-[#27272a]',
          },
        }}
      />
    </NextUIProvider>
  );
};

export default Providers;
