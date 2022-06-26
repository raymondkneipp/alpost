import type { NextPage } from "next";
import { Hero, Navbar, Pricing, Testimonials, Footer } from "@/components/home";

const Home: NextPage = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Testimonials />
			<Pricing />
			<Footer />
		</>
	);
};

export default Home;
