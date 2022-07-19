import { GeneralContext, ThemeContext } from '@/contexts/sites';
import { getFg, getRadius } from '@/utils/sites';

import { AmericanLegionLogo } from '@/components/shared';
import Link from 'next/link';
import { useContext } from 'react';

const Brand: React.FC = () => {
	const { subdomain } = useContext(GeneralContext);
	const { color, radius } = useContext(ThemeContext);

	return (
		<Link
			href="/"
			className={`flex items-center space-x-2 ${getRadius(radius)}`}
		>
			<AmericanLegionLogo />
			<span className={`text-xl font-medium font-heading ${getFg(color)}`}>
				Post {subdomain}
			</span>
		</Link>
	);
};

export default Brand;
