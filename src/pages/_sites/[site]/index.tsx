import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { prisma } from "@/db/client";
import { Site } from "@prisma/client";
import getBgColor from "@/utils/get-bg-color";
import { Footer, Navbar, Text } from "@/components";
import { useEffect } from "react";
import { useSocials, useTheme } from "@/store";

interface PathProps extends ParsedUrlQuery {
	site: string;
}

interface IndexProps {
	site: Site;
}

export default function Index(props: IndexProps) {
	const { setColor, color } = useTheme();
	const { setSocials } = useSocials();

	useEffect(() => {
		setColor(props.site.color);

		const { facebook, instagram, twitter, youtube } = props.site;
		setSocials({ facebook, instagram, twitter, youtube });
	}, [props]);

	return (
		<>
			<div
				className={`h-screen flex items-center justify-center flex-col ${getBgColor(
					color
				)}`}
			>
				<Navbar post={props.site?.subdomain} />
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
					color: {color}
				</Text>
			</div>

			<Footer />
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
