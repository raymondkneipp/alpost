import type { NextPage } from "next";
import Link from "next/link";
import { trpc } from "@/utils/trpc";
import getBgColor from "@/utils/get-bg-color";
import getDomain from "@/utils/get-domain";
import { Button, Container, Logo, Pricing, Text, Wide } from "@/components";
import getRadius from "@/utils/get-radius";

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
		<div className="min-h-screen flex items-center justify-center flex-col">
			<Container spacer>
				<Wide
					master={
						<>
							<Logo />
							<div>
								<Text variant="h1">ALPost</Text>
								<Text size="lg">Welcome to American Legion Post Creator!</Text>
							</div>
						</>
					}
				>
					<>
						{data.map((site) => (
							<a
								key={site.id}
								href={getDomain(site)}
								className={`transition-colors text-gray-200 hover:text-white border border-neutral-600 hover:border-white p-3 h-36 flex items-stretch justify-between flex-col ${getBgColor(
									site.color
								)} ${getRadius(site.radius)}`}
							>
								<div className="flex items-start justify-between">
									<Text color="light">{site.name}</Text>
									<Text color="light" variant="h5">
										{site.subdomain}
									</Text>
								</div>
								<Text color="light" size="sm">
									{getDomain(site)}
								</Text>
							</a>
						))}
						<Button href="/create" size="lg" color="primary">
							Create a New Post!
						</Button>
					</>
				</Wide>
			</Container>
			<Pricing />
		</div>
	);
};

export default Home;
