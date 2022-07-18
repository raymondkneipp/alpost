import { useContext } from 'react';
import Image from 'next/future/image';
import { Container } from '@/components/shared';
import { GeneralContext, ThemeContext } from '@/contexts/sites';
import { ButtonLink } from '@/components/sites';
import { Color } from '@prisma/client';

const Hero: React.FC = () => {
	const { name, subdomain } = useContext(GeneralContext);
	const { color } = useContext(ThemeContext);
	return (
		<div className="w-screen h-screen relative">
			<Image
				src="/shared/american-flag.jpg"
				width={1000}
				height={1000}
				alt="american flag"
				className="h-screen w-screen object-cover object-center absolute inset-0"
			/>

			<div className="bg-black/80 absolute inset-0">
				<Container className="flex flex-col items-center justify-center h-full max-w-screen-md space-y-4">
					<h1 className="text-6xl text-neutral-100 font-medium text-center">
						Welcome to {name} American Legion Post {subdomain}
					</h1>
					<div className="flex items-center justify-center space-x-4">
						<ButtonLink href="/" theme="primary" size="lg">
							Become a Member
						</ButtonLink>
						<ButtonLink href="/" theme="light" size="lg">
							Contact Us
						</ButtonLink>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default Hero;
