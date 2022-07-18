import Image from 'next/future/image';

type Props = {
	size?: number;
};
const AmericanLegionLogo: React.FC<Props> = ({ size = 70 }) => {
	return (
		<Image
			src="/shared/American-Legion-Emblem-borderless.png"
			alt="American Legion Emblem"
			priority={true}
			width={size}
			height={size}
		/>
	);
};

export default AmericanLegionLogo;
