import {
	HeadContent,
	Outlet,
	Scripts,
	createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import TanstackQueryLayout from "~/shared/tanstack-query/layout";

import interCss from "~/shared/styles/inter.css?url";
import mainCss from "~/shared/styles/main.css?url";

import type { QueryClient } from "@tanstack/react-query";

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
				title: "TanStack Start Starter",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: interCss,
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
			<body>
				{children}
				<Scripts />
			</body>
		</html>
	);
}
