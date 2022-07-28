import Link from 'next/link';

type Props = {
	href: string;
	children: React.ReactNode;
};

const NavLink: React.FC<Props> = ({ href, children }) => {
	return (
		<Link
			href={href}
			className="px-6 py-3 text-center text-red-700 transition rounded-sm dark:text-red-400 hover:bg-red-700/10 dark:hover:bg-red-400/10"
		>
			{children}
		</Link>
	);
};

export default NavLink;
