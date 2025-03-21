import { cn } from "~/shared/utils/cn";

export type IconProps = React.ComponentProps<"span"> & {
	label?: string;
	withShape?: boolean;
	iconColor?: string;
	shapeColor?: string;
	shapeBorderColor?: string;
	shapeRadius?: "sm" | "md" | "full";
	shapeClassName?: string;
	size?: string | number;
	width?: string | number;
	height?: string | number;
};

export const Icon = ({
	label,
	withShape = false,
	iconColor,
	shapeRadius = "full",
	shapeColor,
	shapeBorderColor,
	shapeClassName,
	className,
	size,
	width,
	height,
	children,
	...props
}: IconProps) => {
	const shapeCn = cn([
		"flex items-center justify-center border-2 p-1.5",
		shapeRadius === "sm" && "rounded-md",
		shapeRadius === "md" && "rounded-xl",
		shapeRadius === "full" && "rounded-full",
	]);

	const iconSpan = (
		<span
			role="img"
			aria-label={label}
			className={className}
			{...props}
			style={{
				backgroundColor: iconColor,
				width: width ? width : size,
				height: height ? height : size,
				...props.style,
			}}
		>
			{children}
		</span>
	);

	return (
		<>
			{withShape ? (
				<span
					className={cn(shapeCn, shapeClassName)}
					style={{
						backgroundColor: shapeColor,
						borderColor: shapeBorderColor,
					}}
				>
					{iconSpan}
				</span>
			) : (
				<>{iconSpan}</>
			)}
		</>
	);
};
