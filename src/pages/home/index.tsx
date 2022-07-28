import { Features, Hero, Pricing, Waitlist } from '@/components/home';

import { Layout } from '@/layouts/home';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<Layout>
			<Hero />
			<Features />
			<Pricing />
			<Waitlist />
		</Layout>
	);
};

export default Home;
