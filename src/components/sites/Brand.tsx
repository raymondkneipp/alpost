import { AmericanLegionLogo } from '@/components/shared';
import { GeneralContext } from '@/contexts/sites';
import Link from 'next/link';
import { useContext } from 'react';

const Brand: React.FC = () => {
	const { subdomain } = useContext(GeneralContext);

	return (
		<Link href="/" className="flex items-center">
			<AmericanLegionLogo />
			<span className="text-xl">{subdomain}</span>
		</Link>
	);
};

export default Brand;
