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
			className={`py-2 px-4 hover:bg-red-500 ${getRadius(radius)}`}
		>
			{children}
		</Link>
	);
};

export default NavLink;
