import { ButtonLink, NavLink } from '@/components/home';
import { Container } from '@/layouts/shared';

const Hero: React.FC = () => {
	return (
		<section className="py-24">
			<Container className="flex flex-col items-center max-w-screen-md space-y-6 text-center">
				<h1 className="text-3xl font-medium text-neutral-900 dark:text-neutral-100 sm:text-5xl md:text-6xl font-heading">
					The <span className="text-red-700 dark:text-red-400">Best</span>{' '}
					American Legion Website Builder
				</h1>
				<p className="text-blue-900 dark:text-blue-300">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
					et obcaecati magnam necessitatibus dolorem doloribus doloremque sit
					harum.
				</p>
				<div className="flex flex-wrap items-center justify-center gap-6">
					<ButtonLink href="#waitlist">Join Waitlist</ButtonLink>
					<NavLink href="https://demo.alpost.org">View Demo</NavLink>
				</div>
			</Container>
		</section>
	);
};

export default Hero;
