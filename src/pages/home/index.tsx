import type { NextPage } from "next";
import Link from "next/link";
import { trpc } from "@/utils/trpc";

const Home: NextPage = () => {
	const { data, isLoading } = trpc.useQuery(["sites.get-all-sites"]);

	if (isLoading || !data) {
		return <div>Loading...</div>;
	}

	return (
		<div className="bg-red-700 h-screen flex items-center justify-center flex-col space-y-4">
			<h1 className="text-red-100 font-bold text-2xl">Alpost</h1>
			<h2 className="text-red-100 font-bold text-xl">Current Posts</h2>
			<div className="flex flex-col max-w-xs w-full space-y-2">
				{data.map((site) => (
					<a
						href={`http://${site.subdomain}.localhost:3000`}
						className="text-red-300 bg-red-800 rounded-md hover:text-white border border-transparent hover:border-red-900 hover:bg-red-700 p-3"
					>
						{site.name}
					</a>
				))}

				<Link href="/create">
					<a className="bg-red-100 text-red-700 p-3 rounded-md text-center">
						Create new post!
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Home;
