import { GeneralContext, ThemeContext } from '@/contexts/sites';

import { ButtonLink } from '@/components/sites';
import { Container } from '@/components/shared';
import Image from 'next/future/image';
import { useContext } from 'react';

const Hero: React.FC = () => {
	const { name, subdomain } = useContext(GeneralContext);
	const { color } = useContext(ThemeContext);
	return (
		<div className="relative w-screen h-screen">
			<Image
				src="/shared/american-flag.jpg"
				width={1000}
				height={1000}
				alt="american flag"
				className="absolute inset-0 object-cover object-center w-screen h-screen"
			/>

			<div className="absolute inset-0 bg-black/80">
				<Container className="flex flex-col items-center justify-center h-full max-w-screen-sm space-y-4">
					<h1 className="text-3xl font-medium text-center md:text-4xl lg:text-6xl text-neutral-100">
						Welcome to {name} American Legion Post {subdomain}
					</h1>
					<div className="flex flex-wrap items-center justify-center gap-4">
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
