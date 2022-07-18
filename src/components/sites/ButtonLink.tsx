import { getBg, getRadius } from '@/utils/sites';

import Link from 'next/link';
import { ThemeContext } from '@/contexts/sites';
import cn from 'variant-classnames';
import { useContext } from 'react';

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
		$all: `font-medium transition ${getRadius(radius)}`,
		size: {
			sm: 'py-1 px-2',
			md: 'py-2 px-4',
			lg: 'py-3 px-6 sm:py-4 sm:px-8',
		},
		theme: {
			primary: `${getBg(color)} text-neutral-100 hover:brightness-125`,
			secondary: `bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 hover:brightness-90 dark:hover:brightness-125`,
			light: `bg-neutral-200 text-neutral-900 hover:brightness-125`,
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
