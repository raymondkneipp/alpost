import { useContext } from 'react';
import Link from 'next/link';
import { getRadius } from '@/utils/sites';
import { ThemeContext } from '@/contexts/sites';

type Props = {
	href: string;
	children: string;
};

const NavLink: React.FC<Props> = ({ href, children }) => {
	const { radius } = useContext(ThemeContext);

	return (
		<Link
			href={href}
			className={`py-2 px-4 dark:text-white dark:hover:bg-neutral-700 transition ${getRadius(
				radius
			)}`}
		>
			{children}
		</Link>
	);
};

export default NavLink;
