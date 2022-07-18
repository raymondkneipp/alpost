import Link from 'next/link';
import { ThemeContext } from '@/contexts/sites';
import { getRadius } from '@/utils/sites';
import { useContext } from 'react';

type Props = {
	href: string;
	children: React.ReactNode;
};

const Anchor: React.FC<Props> = ({ href, children }) => {
	const { radius } = useContext(ThemeContext);
	return (
		<Link
			href={href}
			className={`${getRadius(
				radius
			)} text-neutral-600 dark:text-neutral-400 underline underline-offset-2 decoration-neutral-300 dark:decoration-neutral-700 hover:decoration-neutral-600 dark:hover:decoration-neutral-400 transition`}
		>
			{children}
		</Link>
	);
};

export default Anchor;
