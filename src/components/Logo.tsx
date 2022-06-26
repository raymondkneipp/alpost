import Image from "next/image";

type Props = {
	size?: number;
};

const Logo: React.FC<Props> = ({ size = 80 }) => {
	return (
		<Image
			src="/American-Legion-Emblem-borderless.png"
			layout="fixed"
			width={size}
			height={size}
			objectFit="contain"
			alt="American Legion Logo"
			priority={true}
		/>
	);
};

export default Logo;
