import { AmericanLegionLogo } from '@/components/shared';

type Props = {
	post: string;
};

const Brand: React.FC<Props> = ({ post }) => {
	return (
		<div className="flex items-center">
			<AmericanLegionLogo />
			<span className="text-xl">{post}</span>
		</div>
	);
};

export default Brand;
