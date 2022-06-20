import { Container, Logo, NavLink, Text } from "@/components";
import { useTheme } from "@/store";
import getBgColor from "@/utils/get-bg-color";
import Link from "next/link";
import cn from "variant-classnames";

type Color = "primary" | "dark" | "light";
type Size = "sm" | "md" | "lg";

type Props = {
	children: React.ReactNode;
	href?: string;
	onClick?: () => void;
	color?: Color;
	size?: Size;
};

const Button: React.FC<Props> = ({
	href,
	onClick,
	children,
	color = "primary",
	size = "md",
}) => {
	const { color: themeColor } = useTheme();

	const variants = {
		$all: "inline-flex rounded-md font-bold text-center justify-center items-center transition hover:scale-105 active:scale-95",
		color: {
			primary: `${getBgColor(themeColor)} text-white`,
			dark: "bg-neutral-800 text-white",
			light: "bg-neutral-200 text-neutral-900",
		},
		size: {
			sm: "py-1 px-2 text-sm",
			md: "py-2 px-4 text-base",
			lg: "py-4 px-8",
		},
	};

	if (href) {
		return (
			<Link href={href}>
				<a className={cn(variants, { color, size })}>{children}</a>
			</Link>
		);
	}

	return <button className={cn(variants, { color, size })}>{children}</button>;
};

export default Button;
