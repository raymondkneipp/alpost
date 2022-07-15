import { useTheme } from '@/store';
import getBgColor from '@/utils/get-bg-color';
import getRadius from '@/utils/get-radius';
import Link from 'next/link';
import cn from 'variant-classnames';

type Color = 'primary' | 'secondary' | 'light' | 'ghost' | 'usa';
type Size = 'sm' | 'md' | 'lg';

type Props = {
	children: React.ReactNode;
	href?: string;
	onClick?: () => void;
	color?: Color;
	size?: Size;
	className?: string;
	target?: string;
};

const Button: React.FC<Props> = ({
	href,
	onClick,
	children,
	color = 'primary',
	size = 'md',
	className = '',
	target = '_self',
}) => {
	const { color: themeColor, radius } = useTheme();

	const variants = {
		$all: `${className} inline-flex font-semibold text-center justify-center items-center transition md:hover:scale-105 md:active:scale-100 font-body ${getRadius(
			radius
		)}`,
		color: {
			primary: `${getBgColor(themeColor)} text-white`,
			secondary:
				'bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400',
			ghost:
				'hover:bg-neutral-200 hover:dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400',
			light: 'bg-neutral-200 text-neutral-900',
			usa: 'text-white bg-gradient-to-r dark:from-red-500 dark:to-sky-500 from-red-700 to-sky-700',
		},
		size: {
			sm: 'py-1 px-2 text-sm',
			md: 'py-2 px-4 text-base',
			lg: 'py-4 px-8',
		},
	};

	if (href) {
		return (
			<Link href={href}>
				<a target={target} className={cn(variants, { color, size })}>
					{children}
				</a>
			</Link>
		);
	}

	return (
		<button className={cn(variants, { color, size })} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
