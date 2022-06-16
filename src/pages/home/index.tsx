import type { NextPage } from "next";
import Link from "next/link";
import { trpc } from "@/utils/trpc";
import getBgColor from "@/utils/get-bg-color";

const Home: NextPage = () => {
	const { data, isLoading } = trpc.useQuery(["sites.get-all-sites"]);

	if (isLoading || !data) {
		return <div>Loading...</div>;
	}

	let domain: string;
	let proto: string;
	if (process.env.NODE_ENV === "development") {
		proto = "http";
		domain = "localhost:3000";
	} else {
		proto = "https";
		domain = "alpost.org";
	}

	return (
		<div className="bg-black h-screen flex items-center justify-center flex-col space-y-4">
			<h1 className="text-red-100 font-bold text-2xl">Alpost</h1>
			<h2 className="text-red-100 font-bold text-xl">Current Posts</h2>
			<div className="flex flex-col max-w-xs w-full space-y-2">
				{data.map((site) => (
					<a
						key={site.id}
						href={`${proto}://${site.subdomain}.${domain}`}
						className={`text-gray-300 rounded-md hover:text-white border border-transparent hover:border-white p-3 ${getBgColor(
							site.color
						)}`}
					>
						{site.name}
					</a>
				))}

				<Link href="/create">
					<a className="bg-white text-black p-3 rounded-md text-center">
						Create new post!
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Home;
