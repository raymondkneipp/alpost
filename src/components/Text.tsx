import React from "react";
import cn from "variant-classnames";

export type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
type Element = Variant | "span" | "a";
export type Color = "dark" | "light" | "primary";
export type Size = "sm" | "md" | "lg";

type Props = {
	variant?: Variant;
	element?: Element;
	color?: Color;
	size?: Size;
	className?: string;
	children: React.ReactNode;
	[rest: string]: any;
};

const Text: React.FC<Props> = ({
	variant = "p",
	element = variant,
	color = "dark",
	size = "md",
	className = "",
	children,
	...rest
}) => {
	const headingColors = {
		dark: "text-neutral-900 dark:text-neutral-100",
		light: "text-white dark:text-neutral-100",
		primary: "text-red-700 dark:text-red-500",
	};

	const regularColors = {
		dark: "text-neutral-700 dark:text-neutral-300",
		light: "text-neutral-100 dark:text-neutral-300",
		primary: "text-red-700 dark:text-red-500",
	};

	const variants = {
		$all: className,
		variant: {
			h1: {
				$all: "font-bold",
				color: headingColors,
				size: {
					sm: "text-3xl sm:text-3xl md:text-4xl lg:text-5xl",
					md: "text-4xl sm:text-4xl md:text-5xl lg:text-6xl",
					lg: "text-5xl sm:text-5xl md:text-6xl lg:text-7xl",
				},
			},
			h2: {
				$all: "font-bold",
				color: headingColors,
				size: {
					sm: "text-2xl  sm:text-2xl md:text-3xl lg:text-4xl",
					md: "text-3xl sm:text-3xl md:text-4xl lg:text-5xl",
					lg: "text-4xl sm:text-4xl md:text-5xl lg:text-6xl",
				},
			},
			h3: {
				$all: "font-bold",
				color: headingColors,
				size: {
					sm: "text-xl  sm:text-xl  md:text-2xl lg:text-3xl",
					md: "text-2xl  sm:text-2xl md:text-3xl lg:text-4xl",
					lg: "text-3xl sm:text-3xl md:text-4xl lg:text-5xl",
				},
			},
			h4: {
				$all: "font-bold",
				color: headingColors,
				size: {
					sm: "text-lg  sm:text-lg  md:text-xl  lg:text-2xl",
					md: "text-xl  sm:text-xl  md:text-2xl lg:text-3xl",
					lg: "text-2xl sm:text-2xl md:text-3xl lg:text-4xl",
				},
			},
			h5: {
				$all: "font-bold",
				color: headingColors,
				size: {
					sm: "text-base sm:text-base md:text-lg  lg:text-xl",
					md: "text-lg   sm:text-lg   md:text-xl  lg:text-2xl",
					lg: "text-xl   sm:text-xl   md:text-2xl lg:text-3xl",
				},
			},
			h6: {
				$all: "font-bold text-sm",
				color: headingColors,
				size: {
					sm: "text-sm   sm:text-sm   md:text-base lg:text-lg",
					md: "text-base sm:text-base md:text-lg   lg:text-xl",
					lg: "text-lg   sm:text-lg   md:text-xl   lg:text-2xl",
				},
			},
			p: {
				$all: "",
				color: regularColors,
				size: {
					sm: "text-sm",
					md: "text-base",
					lg: "text-lg",
				},
			},
		},
	};

	return React.createElement(
		element,
		{
			className: cn(variants, { variant, color, size }),
			...rest,
		},
		children
	);
};

export default Text;
