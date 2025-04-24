import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="flex gap-2">
			<p>Hello, World!</p>
		</div>
	);
}
