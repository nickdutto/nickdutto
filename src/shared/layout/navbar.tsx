import { NAVBAR_LINKS } from "~/shared/data/routes";
import { NavbarContact } from "~/shared/layout/navbar-contact";
import { RouterLink } from "~/shared/ui/router-link";
import { cn } from "~/shared/utils/cn";

type NavbarProps = React.ComponentProps<"header">;

export const Navbar = (props: NavbarProps) => {
	return (
		<header
			{...props}
			className={cn(
				"flex flex-col sm:flex-row justify-between sm:items-center p-3 border-2 rounded-xl",
				props?.className,
			)}
		>
			<div className="flex items-center flex-row gap-1.5">
				<h1 className="text-xl font-normal text-green-500 font-protest-guerrilla">
					NICK DUTTON
				</h1>

				<NavbarContact className="sm:hidden" />
			</div>

			<nav aria-label="main navigation">
				<ul className="flex gap-4">
					{NAVBAR_LINKS.map((link) => (
						<li key={link.to}>
							<RouterLink to={link.to} className="font-medium">
								{link.name}
							</RouterLink>
						</li>
					))}
				</ul>
			</nav>

			<NavbarContact className="hidden sm:flex" />
		</header>
	);
};
