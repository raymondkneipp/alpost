import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { prisma } from "@/db/client";
import { Color, Site } from "@prisma/client";
import getBgColor from "@/utils/get-bg-color";

interface PathProps extends ParsedUrlQuery {
	site: string;
}

interface IndexProps {
	site: Site;
}

export default function Index(props: IndexProps) {
	return (
		<div
			className={`h-screen flex items-center justify-center flex-col ${getBgColor(
				props.site?.color
			)}`}
		>
			<h1 className="text-2xl font-bold text-white">
				Name: {props.site?.name}
			</h1>
			<p className="text-white">id: {props.site?.id}</p>
			<p className="text-white">subdomain: {props.site?.subdomain}</p>
			<p className="text-white">color: {props.site?.color}</p>
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
			site: data,
		},
		revalidate: 3600,
	};
};
