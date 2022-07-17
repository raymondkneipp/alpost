import { Layout } from '@/layouts/sites';
import type { NextPage } from 'next';
import { prisma } from '@/prisma';
import type { GetStaticPaths, GetStaticProps } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import { Container } from '@/components/shared';
import { Site, Theme } from '@prisma/client';

interface PathProps extends ParsedUrlQuery {
	site: string;
}

interface IndexProps {
	stringifiedData: string;
}

const Site: NextPage<IndexProps> = ({ stringifiedData }) => {
	const data = JSON.parse(stringifiedData) as Site & { theme: Theme };

	return (
		<Layout data={data}>
			<Container>
				<h1>sites</h1>
			</Container>
		</Layout>
	);
};

export default Site;

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
	if (!params) throw new Error('No path parameters found');

	const { site } = params;

	const data = await prisma.site.findUnique({
		where: {
			subdomain: site,
		},
		include: { theme: true },
	});

	if (!data) return { notFound: true, revalidate: 10 };

	return {
		props: {
			stringifiedData: JSON.stringify(data),
		},
		revalidate: 3600,
	};
};
