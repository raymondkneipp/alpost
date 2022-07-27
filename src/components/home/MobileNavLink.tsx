import Link from 'next/link';

type Props = {
	href: string;
	children: string;
	[x: string]: any;
};

const MobileNavLink: React.FC<Props> = ({ href, children, ...rest }) => {
	return (
		<Link
			href={href}
			className="px-4 py-2 rounded-sm text-neutral-900 dark:text-neutral-100"
			{...rest}
		>
			{children}
		</Link>
	);
};

export default MobileNavLink;
