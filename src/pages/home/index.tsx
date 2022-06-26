import type { NextPage } from "next";
import { Hero, Navbar, Pricing, Testimonials } from "@/components/home";

const Home: NextPage = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Testimonials />
			<Pricing />
		</>
	);
};

export default Home;
