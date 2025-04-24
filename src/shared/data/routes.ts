import type { LinkProps } from "@tanstack/react-router";

type NavbarLink = LinkProps & {
	name: string;
};

export const NAVBAR_LINKS: NavbarLink[] = [
	{
		name: "Home",
		to: "/",
	},
	{
		name: "Projects",
		to: "/projects",
	},
	{
		name: "Contact",
		to: "/contact",
	},
];
