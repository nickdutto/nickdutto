import clsx from "clsx";

import { CONTACT_SOCIALS } from "~/shared/data/contact";
import { Icon } from "~/shared/ui/icon";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "~/shared/ui/tooltip";

type NavbarContactProps = Pick<React.ComponentProps<"ul">, "className">;

export const NavbarContact = ({ className }: NavbarContactProps) => {
	return (
		<nav aria-label="contact navigation">
			<ul className={clsx("flex gap-1", className)}>
				<TooltipProvider>
					{CONTACT_SOCIALS.map((item) => (
						<li key={item.name}>
							<Tooltip>
								<TooltipTrigger asChild>
									<a
										href={item.url}
										aria-label={item.name}
										className="inline-flex items-center justify-center size-8 hover:[&>*]:bg-green-500"
									>
										<Icon
											aria-hidden="true"
											className={clsx(
												"size-[18px] sm:size-5 bg-neutral-300",
												item.icon,
											)}
										/>
									</a>
								</TooltipTrigger>
								<TooltipContent>
									<p>{item.name}</p>
								</TooltipContent>
							</Tooltip>
						</li>
					))}
				</TooltipProvider>
			</ul>
		</nav>
	);
};
