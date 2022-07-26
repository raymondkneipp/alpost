import Image from 'next/future/image';

const Logo: React.FC = () => {
	return (
		<picture>
			<source
				srcSet="/home/logo-dark.svg"
				media="(prefers-color-scheme: dark)"
			/>
			<Image src="/home/logo.svg" width="60" height="30" />
		</picture>
	);
};

export default Logo;
