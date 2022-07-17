import type { NextPage } from 'next';
import { Layout } from '@/layouts/home';
import { Container } from '@/components/shared';

const Home: NextPage = () => {
	return (
		<Layout>
			<Container>
				<h1 className="text-red-500">home</h1>
			</Container>
		</Layout>
	);
};

export default Home;
