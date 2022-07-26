import { Container } from '@/components/shared';
import { Layout } from '@/layouts/home';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<Layout>
			<Container>
				<p className="text-blue-900 dark:text-blue-300">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis non
					totam optio neque dolore dolores hic! Architecto dolorem magnam
					debitis eveniet maxime, autem dolores eius, dolore facilis rerum
					soluta assumenda.
				</p>
			</Container>
		</Layout>
	);
};

export default Home;
