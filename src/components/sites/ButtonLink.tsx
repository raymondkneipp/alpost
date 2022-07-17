import { Color } from '@prisma/client';
import Link from 'next/link';
import { getBg } from '@/utils/sites';

type Props = {
	href: string;
	children: string;
	color?: Color;
};

const ButtonLink: React.FC<Props> = ({
	href,
	children,
	color = Color.NEUTRAL,
}) => {
	return (
		<Link href={href} className={`text-neutral-100 py-2 px-4 ${getBg(color)}`}>
			{children}
		</Link>
	);
};

export default ButtonLink;
