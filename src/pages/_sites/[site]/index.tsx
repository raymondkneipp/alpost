import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { prisma } from "@/db/client";
import { Site } from "@prisma/client";
import getBgColor from "@/utils/get-bg-color";
import { Footer, Navbar, Text } from "@/components";

interface PathProps extends ParsedUrlQuery {
	site: string;
}

interface IndexProps {
	site: Site;
}

export default function Index(props: IndexProps) {
	return (
		<>
			<div
				className={`h-screen flex items-center justify-center flex-col ${getBgColor(
					props.site?.color
				)}`}
			>
				<Navbar post={props.site?.subdomain} color={props.site?.color} />
				<Text variant="h1" color="light">
					Name: {props.site?.name}
				</Text>
				<Text variant="p" color="light">
					id: {props.site?.id}
				</Text>
				<Text variant="p" color="light">
					subdomain: {props.site?.subdomain}
				</Text>
				<Text variant="a" color="light" href="/">
					color: {props.site?.color}
				</Text>
			</div>

			<Footer
				content={`${props.site?.name} American Legion Post ${props.site?.subdomain} located on INSET ADDRESS HERE`}
			/>
		</>
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
