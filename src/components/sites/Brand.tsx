import { AmericanLegionLogo } from '@/components/shared';
import { GeneralContext } from '@/contexts/sites';
import { useContext } from 'react';

const Brand: React.FC = () => {
	const { subdomain } = useContext(GeneralContext);

	return (
		<div className="flex items-center">
			<AmericanLegionLogo />
			<span className="text-xl">{subdomain}</span>
		</div>
	);
};

export default Brand;
