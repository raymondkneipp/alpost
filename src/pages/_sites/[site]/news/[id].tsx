import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { PathProps, SitePageProps, _SiteData } from '@/types';

import { Layout } from '@/layouts/sites';
import { News } from '@prisma/client';
import { prisma } from '@/prisma';

interface PageProps extends SitePageProps {
	stringifiedPost: string;
}

const NewsPostPage: NextPage<PageProps> = ({
	stringifiedData,
	stringifiedPost,
}) => {
	const data = JSON.parse(stringifiedData) as _SiteData;
	const post = JSON.parse(stringifiedPost) as News;

	console.log(post);

	return (
		<Layout data={data} title={post.title}>
			<h1>{stringifiedPost}</h1>
		</Layout>
	);
};

export default NewsPostPage;

export const getStaticPaths: GetStaticPaths<PathProps> = async () => {
	const posts = await prisma.news.findMany({
		select: {
			id: true,
			site: {
				select: {
					subdomain: true,
				},
			},
		},
	});

	return {
		paths: posts.flatMap((post) => {
			if (post.site === null || post.site.subdomain === null) return [];

			return {
				params: {
					site: post.site.subdomain,
					id: post.id,
				},
			};
		}),
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<SitePageProps, PathProps> = async ({
	params,
}) => {
	if (!params) throw new Error('No path parameters found');

	const { site, id } = params;

	if (typeof id !== 'string') throw new Error('ID must be a string');

	const post = (await prisma.news.findFirst({
		where: {
			site: {
				subdomain: site,
			},
			id,
		},
	})) as News | null;

	if (!post) return { notFound: true, revalidate: 10 };

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
			banner: true,
		},
	});

	if (!data) return { notFound: true, revalidate: 10 };

	return {
		props: {
			stringifiedData: JSON.stringify(data),
			stringifiedPost: JSON.stringify(post),
		},
		revalidate: 3600,
	};
};
