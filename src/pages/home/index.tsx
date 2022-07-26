import { Container } from '@/components/shared';
import { Layout } from '@/layouts/home';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<Layout>
			<Container>
				<span className="text-2xl font-medium text-red-300 sm:text-4xl font-heading">
					alpost
				</span>
				<div className="bg-blue-900">
					<p className="text-red-300">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis non
						totam optio neque dolore dolores hic! Architecto dolorem magnam
						debitis eveniet maxime, autem dolores eius, dolore facilis rerum
						soluta assumenda.
					</p>
				</div>
			</Container>
		</Layout>
	);
};

export default Home;
