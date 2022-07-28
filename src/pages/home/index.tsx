import {
	Features,
	Hero,
	Pricing,
	Testimonials,
	Waitlist,
} from '@/components/home';

import { Layout } from '@/layouts/home';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<Layout>
			<Hero />
			<Features />
			<Testimonials />
			<Pricing />
			<Waitlist />
		</Layout>
	);
};

export default Home;
