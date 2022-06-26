import type { NextPage } from "next";
import {
	Hero,
	Navbar,
	Pricing,
	Testimonials,
	Footer,
	Features,
} from "@/components/home";

const Home: NextPage = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Features />
			<Testimonials />
			<Pricing />
			<Footer />
		</>
	);
};

export default Home;
