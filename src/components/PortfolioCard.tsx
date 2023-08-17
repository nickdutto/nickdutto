'use client';

import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { type ReactNode } from 'react';

const PortfolioCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center">
      <div className="z-10 flex h-[600px] w-[250px] flex-col rounded-md bg-zinc-900 text-center shadow-lg shadow-black/50">
        <div className="flex flex-col items-center py-2">
          <div className="my-2 h-32 w-32 rounded-full border-4 border-blue-500" />
          <h1 className="text-3xl font-bold text-white">Nick Dutton</h1>
          <p>Fullstack Developer</p>
        </div>
        <div className="border-b-2 border-zinc-800" />
        <div className="h-full py-2">
          <ul className="flex flex-col gap-2 text-lg">
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
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
      <div className="z-0 h-[550px] w-[800px] rounded-md bg-zinc-900 p-2">{children}</div>
    </div>
  );
};

export default PortfolioCard;
