'use client';

import { NextUIProvider } from '@nextui-org/react';

import { useRouter } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  const router = useRouter();

  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
};

export default Providers;
