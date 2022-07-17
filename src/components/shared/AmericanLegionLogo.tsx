import Image from 'next/future/image';

type Props = {
	size?: number;
};
const AmericanLegionLogo: React.FC<Props> = ({ size = 80 }) => {
	return (
		<Image
			src="/shared/American-Legion-Emblem-borderless.png"
			width={size}
			height={size}
		/>
	);
};

export default AmericanLegionLogo;
