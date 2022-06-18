import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { prisma } from "@/db/client";
import { Site } from "@prisma/client";
import getBgColor from "@/utils/get-bg-color";
import { Footer, Hero, Navbar, Text } from "@/components";
import { useEffect } from "react";
import { useAddress, usePost, useSocials, useTheme } from "@/store";

interface PathProps extends ParsedUrlQuery {
	site: string;
}

interface IndexProps {
	site: Site;
}

export default function Index(props: IndexProps) {
	const { setColor, color } = useTheme();
	const { setSocials } = useSocials();
	const { setName, setNum } = usePost();
	const { setAddress } = useAddress();

	console.log(props);

	useEffect(() => {
		setColor(props.site?.color);

		const facebook = props.site?.facebook;
		const instagram = props.site?.instagram;
		const twitter = props.site?.twitter;
		const youtube = props.site?.youtube;
		setSocials({ facebook, instagram, twitter, youtube });

		setName(props.site?.name);
		setNum(props.site?.subdomain);

		const street = props.site?.street;
		const city = props.site?.city;
		const state = props.site?.state;
		const zip = props.site?.zip;

		setAddress({ street, city, state, zip });
	}, [props]);

	return (
		<>
			<Navbar post={props.site?.subdomain} />
			<Hero />

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
