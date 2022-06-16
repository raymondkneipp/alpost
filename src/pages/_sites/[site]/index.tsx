import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { prisma } from "@/db/client";

interface PathProps extends ParsedUrlQuery {
	site: string;
}

interface IndexProps {
	stringifiedData: string;
}

export default function Index({ stringifiedData }: IndexProps) {
	console.log(stringifiedData);
	return (
		<div>
			<h1>site</h1>
		</div>
	);
}

export const getStaticPaths: GetStaticPaths<PathProps> = async () => {
	const subdomains = await prisma.site.findMany({
		select: {
			subdomain: true,
		},
	});

	const allPaths = [...subdomains.map(({ subdomain }) => subdomain)].filter(
		(path) => path
	) as Array<string>;

	return {
		paths: allPaths.map((path) => ({
			params: {
				site: path,
			},
		})),
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<IndexProps, PathProps> = async ({
	params,
}) => {
	if (!params) throw new Error("No path parameters found");

	const { site } = params;

	const data = await prisma.site.findUnique({
		where: {
			subdomain: site,
		},
	});

	if (!data) {
		return { notFound: true, revalidate: 10 };
	}

	return {
		props: {
			stringifiedData: JSON.stringify(data),
		},
		revalidate: 3600,
	};
};
