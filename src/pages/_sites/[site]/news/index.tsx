import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { LatestNews } from '@/components/sites';
import { Layout } from '@/layouts/sites';
import type { ParsedUrlQuery } from 'querystring';
import { _SiteData } from '@/types';
import { prisma } from '@/prisma';

interface PathProps extends ParsedUrlQuery {
	site: string;
}

interface NewsProps {
	stringifiedData: string;
}

const NewsPage: NextPage<NewsProps> = ({ stringifiedData }) => {
	const data = JSON.parse(stringifiedData) as _SiteData;

	return (
		<Layout data={data} title="News">
			<LatestNews />
		</Layout>
	);
};

export default NewsPage;

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

export const getStaticProps: GetStaticProps<NewsProps, PathProps> = async ({
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
			socials: true,
			faq: true,
			contact: true,
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
