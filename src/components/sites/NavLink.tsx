import { useRouter } from 'next/router';
import { useContext } from 'react';
import Link from 'next/link';
import { getFg, getRadius } from '@/utils/sites';
import { ThemeContext } from '@/contexts/sites';

type Props = {
	href: string;
	children: string;
};

const NavLink: React.FC<Props> = ({ href, children }) => {
	const { radius, color } = useContext(ThemeContext);
	const router = useRouter();

	let path = router.pathname.replace('/_sites/[site]', '');
	if (path === '') {
		path = '/';
	}

	const active = path === href;

	return (
		<Link
			href={href}
			className={`py-2 px-4 dark:hover:bg-neutral-700 transition ${getRadius(
				radius
			)} ${active ? getFg(color) : 'text-neutral-900 dark:text-neutral-100'}`}
		>
			{children}
		</Link>
	);
};

export default NavLink;
