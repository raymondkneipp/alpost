import { Address, News, Officers, Site, Theme } from '@prisma/client';
import {
	CTA,
	Hero,
	LatestNews,
	MeetOfficers,
	Statistics,
	UpcomingEvent,
} from '@/components/sites';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { Layout } from '@/layouts/sites';
import type { ParsedUrlQuery } from 'querystring';
import { prisma } from '@/prisma';

interface PathProps extends ParsedUrlQuery {
	site: string;
}

interface IndexProps {
	stringifiedData: string;
}

const HomePage: NextPage<IndexProps> = ({ stringifiedData }) => {
	const data = JSON.parse(stringifiedData) as Site & {
		theme: Theme;
		address: Address;
		news: News[];
		officers: Officers[];
	};

	return (
		<Layout data={data}>
			<Hero />
			<LatestNews simple />
			<UpcomingEvent />
			<Statistics />
			<MeetOfficers simple />
			<CTA />
		</Layout>
	);
};

export default HomePage;

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
		fallback: false, // TODO look into fallback on prod; set to true in platforms
	};
};

export const getStaticProps: GetStaticProps<IndexProps, PathProps> = async ({
	params,
}) => {
	if (!params) throw new Error('No path parameters found');

	const { site } = params;

	const data = await prisma.site.findUnique({
		where: {
			subdomain: site,
		},
		include: {
			theme: true,
			address: true,
			news: {
				orderBy: {
					createdAt: 'desc',
				},
			},
			officers: true,
		},
	});

	if (!data) return { notFound: true, revalidate: 10 };

	return {
		props: {
			stringifiedData: JSON.stringify(data),
		},
		revalidate: 3600,
	};
};
