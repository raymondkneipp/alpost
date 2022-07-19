import { GeneralContext, ThemeContext } from '@/contexts/sites';

import { ButtonLink } from '@/components/sites';
import { Container } from '@/components/shared';
import Image from 'next/future/image';
import { useContext } from 'react';

const Hero: React.FC = () => {
	const { name, subdomain } = useContext(GeneralContext);
	const { color } = useContext(ThemeContext);
	return (
		<section className="relative w-screen min-h-screen">
			<Image
				src="/shared/american-flag.jpg"
				width={1200}
				height={1200}
				alt="american flag"
				className="absolute inset-0 object-cover object-center w-screen h-screen"
			/>

			<div className="absolute inset-0 bg-black/80">
				<Container className="flex flex-col items-center justify-center h-full max-w-screen-lg space-y-4">
					<h1 className="text-3xl font-medium text-center font-heading md:text-4xl lg:text-6xl text-neutral-100">
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
		</section>
	);
};

export default Hero;
