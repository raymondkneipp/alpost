import { Hero, Waitlist } from '@/components/home';

import { Layout } from '@/layouts/home';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<Layout>
			<Hero />
			<Waitlist />
		</Layout>
	);
};

export default Home;
