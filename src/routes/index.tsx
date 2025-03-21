import { createFileRoute } from "@tanstack/react-router";
import { Sidebar } from "~/shared/layout/sidebar";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="flex gap-2">
			<Sidebar />

			<main className="text-center p-4">
				<p>Hello, World!</p>
			</main>
		</div>
	);
}
