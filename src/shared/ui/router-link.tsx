import { Link, type LinkComponentProps } from "@tanstack/react-router";

import { cn } from "~/shared/utils/cn";

type RouterLinkProps = LinkComponentProps & {
	withActiveUnderline?: boolean;
	withActiveTextColour?: boolean;
};

export const RouterLink = ({
	withActiveUnderline = true,
	withActiveTextColour = true,
	...props
}: RouterLinkProps) => {
	const activeClassName = cn([
		withActiveUnderline &&
			"after:bg-green-500 after:content-[''] after:h-[2px] after:w-full",
		withActiveTextColour && "!text-green-500",
		typeof props?.activeProps !== "function" && props?.activeProps?.className,
	]);

	return (
		<Link
			{...props}
			activeProps={{
				className: activeClassName,
			}}
			className={cn(
				"text-neutral-200 hover:text-green-500 flex flex-col gap-0.5",
				props?.className,
			)}
		/>
	);
};
