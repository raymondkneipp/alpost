import Link from 'next/link';

type Props = {
	href: string;
	children: React.ReactNode;
};

const ButtonLink: React.FC<Props> = ({ href, children }) => {
	return (
		<Link
			href={href}
			className="px-6 py-3 text-center transition bg-red-700 rounded-sm dark:bg-red-400 text-neutral-100 dark:text-neutral-900 hover:bg-red-600 dark:hover:bg-red-300 whitespace-nowrap"
		>
			{children}
		</Link>
	);
};

export default ButtonLink;
