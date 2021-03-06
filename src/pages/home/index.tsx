import {
	Features,
	Hero,
	Preview,
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
			<Preview />
			<Testimonials />
			<Pricing />
			<Waitlist />
		</Layout>
	);
};

export default Home;
