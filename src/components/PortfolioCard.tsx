'use client';

import clsx from 'clsx';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type ReactNode } from 'react';

const PortfolioCard = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="flex items-center">
      <div className="z-10 flex h-[600px] w-[250px] flex-col rounded-md bg-zinc-900 text-center shadow-lg shadow-black/50">
        <div className="flex flex-col items-center py-2">
          <div className="my-2 h-32 w-32 rounded-full border-4 border-blue-600/90" />
          <h1 className="text-3xl font-semibold text-white">Nick Dutton</h1>
          <p className="text-zinc-400">Fullstack Developer</p>
        </div>
        <div className="border-b-2 border-zinc-800" />
        <div className="h-full py-2">
          <ul className="flex flex-col gap-2 text-lg">
            <li>
              <Link
                href="/"
                className={clsx([
                  'block py-1',
                  pathname === '/' && 'bg-blue-600/90 text-zinc-100',
                  pathname !== '/' && 'text-zinc-300 hover:bg-zinc-950/30',
                ])}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={clsx([
                  'block py-1',
                  pathname === '/projects' && 'bg-blue-600/90 text-zinc-100',
                  pathname !== '/projects' && 'text-zinc-300 hover:bg-zinc-950/30',
                ])}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={clsx([
                  'block py-1',
                  pathname === '/contact' && 'bg-blue-600/90 text-zinc-100',
                  pathname !== '/contact' && 'text-zinc-300 hover:bg-zinc-950/30',
                ])}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="border-t-2 border-zinc-800" />
        <div className="flex items-center justify-around gap-4 px-8 py-3 text-zinc-400">
          <a
            href="https://github.com/ZippyIO"
            target="_blank"
            className="block rounded-md p-2 transition-transform hover:bg-zinc-950/30 active:scale-95"
          >
            <Github size={20} className="" />
          </a>
          <a
            href=""
            target="_blank"
            className="block rounded-md p-2 transition-transform hover:bg-zinc-950/30 active:scale-95"
          >
            <Twitter size={20} />
          </a>
          <a
            href=""
            target="_blank"
            className="block rounded-md p-2 transition-transform hover:bg-zinc-950/30 active:scale-95"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
      <div className="z-0 h-[550px] w-[800px] rounded-r-md bg-zinc-900">{children}</div>
    </div>
  );
};

export default PortfolioCard;
