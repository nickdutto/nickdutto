'use client';

import {
  Link,
  Navbar as NuiNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

import GithubIcon from '~/components/icon/GithubIcon';
import { nav_links } from '~/data/nav-data';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  return (
    <NuiNavbar isBordered onMenuOpenChange={setMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <h1 className="bg-gradient-to-r from-fuchsia-500 to-blue-600 bg-clip-text text-3xl font-bold text-transparent">
            Nick Dutton
          </h1>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center" className="hidden sm:flex">
        {nav_links.map((link) => (
          <NavbarItem key={link.path} isActive={pathname === link.path}>
            <Link color={pathname === link.path ? 'primary' : 'foreground'} href={link.path}>
              {link.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link
            href="https://github.com/ZippyIO"
            isExternal
            className="flex items-center justify-center"
          >
            <GithubIcon size={20} className="fill-default-600" />
          </Link>
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarMenu>
        {nav_links.map((link) => (
          <NavbarMenuItem key={link.path} className="text-center">
            <Link
              color={pathname === link.path ? 'primary' : 'foreground'}
              href={link.path}
              size="lg"
              className="w-full justify-center text-center"
            >
              {link.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NuiNavbar>
  );
};

export default Navbar;
