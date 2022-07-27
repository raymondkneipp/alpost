import Link from 'next/link';

type Props = {
	href: string;
	children: React.ReactNode;
};

const Anchor: React.FC<Props> = ({ href, children }) => {
	return (
		<Link
			href={href}
			className="text-blue-900 underline transition dark:text-blue-300 decoration-blue-900/25 dark:decoration-blue-300/25 hover:decoration-blue-900 dark:hover:decoration-blue-300"
		>
			{children}
		</Link>
	);
};

export default Anchor;
