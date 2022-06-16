import type { NextPage } from "next";
import Link from "next/link";
import { trpc } from "@/utils/trpc";
import getBgColor from "@/utils/get-bg-color";
import getDomain from "@/utils/get-domain";
import { Container } from "@/components";

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
		<div className="bg-black min-h-screen flex items-center justify-center flex-col">
			<Container>
				<h1 className="text-white font-bold text-2xl mb-5 border-b border-neutral-600 pb-1">
					Alpost
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
					{data.map((site) => (
						<a
							key={site.id}
							href={getDomain(site)}
							className={`text-gray-200 rounded-md hover:text-white border border-neutral-600 hover:border-white p-3 h-36 flex items-stretch justify-between flex-col ${getBgColor(
								site.color
							)}`}
						>
							<div className="flex items-start justify-between">
								<div>{site.name}</div>
								<div>{site.subdomain}</div>
							</div>
							<div className="text-sm">{getDomain(site)}</div>
						</a>
					))}
				</div>
				<Link href="/create">
					<a className="inline-block mt-5 bg-white text-black p-3 rounded-md text-center">
						Create new post!
					</a>
				</Link>
			</Container>
		</div>
	);
};

export default Home;
