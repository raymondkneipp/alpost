import { ButtonLink } from '@/components/home';
import { Container } from '@/layouts/shared';

const Hero: React.FC = () => {
	return (
		<section className="py-24">
			<Container className="flex flex-col items-center max-w-screen-md space-y-6 text-center">
				<h1 className="text-3xl font-medium text-neutral-900 dark:text-neutral-100 sm:text-5xl md:text-6xl font-heading">
					The <span className="text-red-700 dark:text-red-400">Best</span>{' '}
					American Legion Website Builder
				</h1>
				<p className="text-lg text-blue-900 dark:text-blue-300">
					Feature-rich and easy-to-use online website builder that allows the
					creation of a web presence for American Legion Posts.
				</p>
				<div className="flex flex-wrap items-center justify-center gap-6">
					<ButtonLink href="#waitlist">Join Waitlist</ButtonLink>
					<ButtonLink
						href="https://demo.alpost.org"
						theme="secondary"
						target="_blank"
					>
						View Demo
					</ButtonLink>
				</div>
			</Container>
		</section>
	);
};

export default Hero;
