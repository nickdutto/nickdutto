import {
	HeadContent,
	Outlet,
	Scripts,
	createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import TanstackQueryLayout from "~/shared/tanstack-query/layout";

import fontsCss from "~/shared/styles/fonts.css?url";
import mainCss from "~/shared/styles/main.css?url";

import type { QueryClient } from "@tanstack/react-query";
import { Navbar } from "~/shared/layout/navbar";

type MyRouterContext = {
	queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<MyRouterContext>()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Nick Dutton",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: fontsCss,
			},
			{
				rel: "stylesheet",
				href: mainCss,
			},
		],
	}),

	component: () => (
		<RootDocument>
			<Outlet />

			<TanStackRouterDevtools />

			<TanstackQueryLayout />
		</RootDocument>
	),
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="dark">
			<head>
				<HeadContent />
			</head>

			<body className="flex flex-col min-h-screen">
				<Navbar className="m-2" />

				{children}

				<Scripts />
			</body>
		</html>
	);
}
