import Image from "next/image";

const Logo: React.FC = () => {
	return (
		<Image
			src="/favicon.svg"
			width={50}
			height={50}
			layout="fixed"
			priority={true}
			alt="ALPost logo"
		/>
	);
};

export default Logo;
