import Link from 'next/link';

type Props = {
	href: string;
	children: string;
};

const NavLink: React.FC<Props> = ({ href, children }) => {
	return (
		<Link href={href} className="py-2 px-4 hover:bg-red-500">
			{children}
		</Link>
	);
};

export default NavLink;
