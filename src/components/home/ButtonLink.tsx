import Link from 'next/link';
import cn from 'variant-classnames';

type Theme = 'primary' | 'secondary';

type Props = {
	href: string;
	children: React.ReactNode;
	theme?: Theme;
	[x: string]: any;
};

const ButtonLink: React.FC<Props> = ({
	href,
	children,
	theme = 'primary',
	...rest
}) => {
	const variants = {
		$all: 'px-6 py-3 text-center transition rounded-sm whitespace-nowrap',
		theme: {
			primary:
				'bg-red-700 dark:bg-red-400 text-neutral-100 dark:text-neutral-900 hover:bg-red-600 dark:hover:bg-red-300',
			secondary:
				'bg-neutral-100 dark:bg-neutral-900 text-red-700 dark:text-red-400 hover:bg-neutral-200 dark:hover:bg-neutral-800',
		},
	};

	const classes = cn(variants, { theme });

	return (
		<Link {...rest} href={href} className={classes}>
			{children}
		</Link>
	);
};

export default ButtonLink;
