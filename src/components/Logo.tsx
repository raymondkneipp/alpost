import Image from "next/image";

const Logo: React.FC = () => {
	return (
		<Image
			src="/American-Legion-Emblem.png"
			layout="fixed"
			width="80"
			height="80"
			objectFit="contain"
			alt="American Legion Logo"
			priority={true}
		/>
	);
};

export default Logo;
