import { ContactDock } from "~/shared/layout/contact-dock";

export const Sidebar = () => {
	return (
		<section className="border-r p-4 rounded-lg h-screen w-80">
			<header className="flex flex-col gap-4">
				<section>
					<h1 className="text-2xl font-bold">Nick Dutton</h1>
					<p className="font-medium text-gray-300 text-sm">Web Developer</p>

					<p className="font-medium text-gray-300 text-sm">
						Canberra, Australia
					</p>
				</section>

				<section>
					<h2 className="font-semibold text-lg">Languages</h2>
				</section>

				<section>
					<h2 className="font-semibold text-lg">Tech</h2>
				</section>
			</header>

			<ContactDock />
		</section>
	);
};
