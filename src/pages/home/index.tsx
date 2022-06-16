import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
	return (
		<div className="bg-red-700 h-screen flex items-center justify-center flex-col space-y-4">
			<h1 className="text-red-100 font-bold text-2xl">Alpost</h1>
			<Link href="/create">
				<a className="bg-red-100 text-red-700 p-4">Create new post!</a>
			</Link>
		</div>
	);
};

export default Home;
