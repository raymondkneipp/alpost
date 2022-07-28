import { Container } from '@/layouts/shared';
import ButtonLink from './ButtonLink';

const Preview: React.FC = () => {
	return (
		<section id="preview" className="py-12 bg-red-700 dark:bg-red-400">
			<Container className="flex flex-col items-center justify-center max-w-lg space-y-6 text-center">
				<h2 className="text-2xl font-medium sm:text-3xl md:text-4xl font-heading text-neutral-100 dark:text-neutral-900">
					Explore The Demo
				</h2>
				<p className="text-lg text-neutral-200 dark:text-neutral-800">
					You can get an idea of what your online legion experience could be
					like by looking at this sample site.
				</p>
				<ButtonLink href="https://demo.alpost.org" theme="secondary">
					View Demo
				</ButtonLink>
			</Container>
		</section>
	);
};

export default Preview;
