import Image from "next/image";

const Logo: React.FC = () => {
	return (
		<Image
			src="/American-Legion-Emblem.png"
			layout="fixed"
			width="100"
			height="100"
		/>
	);
};

export default Logo;
