import { Container } from '@/components/shared';

const Waitlist: React.FC = () => {
	return (
		<section id="waitlist" className="py-12 bg-red-700 dark:bg-red-400">
			<Container>
				<h2 className="text-2xl font-medium sm:text-3xl md:text-4xl font-heading text-neutral-100 dark:text-neutral-900">
					Join The Waitlist
				</h2>
				<p className="text-lg text-neutral-200 dark:text-neutral-800">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab et atque
					excepturi vel a deleniti cum, voluptatem sed facilis.
				</p>
			</Container>
		</section>
	);
};

export default Waitlist;
