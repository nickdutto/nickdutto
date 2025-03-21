import clsx from "clsx";
import { buttonVariants } from "~/shared/ui/button";
import { Dock, DockIcon } from "~/shared/ui/dock";
import { Icon } from "~/shared/ui/icon";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "~/shared/ui/tooltip";
import { cn } from "~/shared/utils/cn";

const DATA = [
	{
		name: "Email",
		url: "#",
		icon: "icon-[solar--plain-2-bold]",
	},
	{
		name: "GitHub",
		url: "#",
		icon: "icon-[simple-icons--github]",
	},
	{
		name: "LinkedIn",
		url: "#",
		icon: "icon-[simple-icons--linkedin]",
	},
];

export const ContactDock = () => {
	return (
		<nav>
			<TooltipProvider>
				<Dock direction="middle" iconMagnification={40} className="w-full">
					{DATA.map((item) => (
						<DockIcon key={item.name}>
							<Tooltip>
								<TooltipTrigger asChild>
									<a
										href={item.url}
										aria-label={item.name}
										className={cn(
											buttonVariants({ variant: "ghost", size: "icon" }),
											"size-12 rounded-full",
										)}
									>
										<Icon className={clsx("size-4", item.icon)} />
									</a>
								</TooltipTrigger>
								<TooltipContent>
									<p>{item.name}</p>
								</TooltipContent>
							</Tooltip>
						</DockIcon>
					))}
				</Dock>
			</TooltipProvider>
		</nav>
	);
};
