import Link from 'next/link';

type Props = {
	href: string;
	children: React.ReactNode;
};

const NavLink: React.FC<Props> = ({ href, children }) => {
	return (
		<Link
			href={href}
			className="px-6 py-3 text-center text-blue-900 transition rounded-sm dark:text-blue-300 hover:bg-blue-900/10 dark:hover:bg-blue-300/10"
		>
			{children}
		</Link>
	);
};

export default NavLink;
