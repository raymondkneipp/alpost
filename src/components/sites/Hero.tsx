import { useContext } from 'react';
import Image from 'next/future/image';
import { Container } from '@/components/shared';
import { GeneralContext } from '@/contexts/sites';

const Hero: React.FC = () => {
	const { name, subdomain } = useContext(GeneralContext);
	return (
		<div className="w-screen h-screen relative">
			<Image
				src="/shared/american-flag.jpg"
				width={1000}
				height={1000}
				alt="american flag"
				className="h-screen w-screen object-cover object-center absolute inset-0"
			/>

			<div className="bg-neutral-900/75 absolute inset-0">
				<Container className="flex flex-col items-center justify-center h-full max-w-screen-md">
					<h1 className="text-6xl text-neutral-100 font-medium text-center">
						Welcome to {name} American Legion Post {subdomain}
					</h1>
				</Container>
			</div>
		</div>
	);
};

export default Hero;
