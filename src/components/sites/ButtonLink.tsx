import { Color } from '@prisma/client';
import Link from 'next/link';
import cn from 'variant-classnames';
import { getBg, getFg, getRadius } from '@/utils/sites';
import { useContext } from 'react';
import { ThemeContext } from '@/contexts/sites';

type Size = 'sm' | 'md' | 'lg';
type Theme = 'primary' | 'secondary' | 'light';

type Props = {
	href: string;
	children: string;
	theme?: Theme;
	size?: Size;
};

const ButtonLink: React.FC<Props> = ({
	href,
	children,
	theme = 'secondary',
	size = 'md',
}) => {
	const { radius, color } = useContext(ThemeContext);

	const variants = {
		$all: `text-neutral-100 font-medium transition ${getRadius(
			radius
		)} hover:brightness-125`,
		size: {
			sm: 'py-1 px-2',
			md: 'py-2 px-4',
			lg: 'py-4 px-8',
		},
		theme: {
			primary: `${getBg(color)}`,
			secondary: `bg-neutral-800`,
			light: `bg-neutral-200 text-neutral-900`,
		},
	};

	const classes = cn(variants, { size, theme });

	return (
		<Link href={href} className={classes}>
			{children}
		</Link>
	);
};

export default ButtonLink;
