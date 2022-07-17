import { Layout } from '@/layouts/sites';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { prisma } from '@/prisma';
import type { GetStaticPaths, GetStaticProps } from 'next';
import type { ParsedUrlQuery } from 'querystring';

interface PathProps extends ParsedUrlQuery {
	site: string;
}

interface IndexProps {
	stringifiedData: string;
}

const Site: NextPage<IndexProps> = ({ stringifiedData }) => {
	return (
		<Layout>
			<h1>site</h1>
			<p>{stringifiedData}</p>
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
		// include: {},
	});

	if (!data) return { notFound: true, revalidate: 10 };

	return {
		props: {
			stringifiedData: JSON.stringify(data),
		},
		revalidate: 3600,
	};
};
