import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { SitePageProps, _SiteData } from '@/types';

import { News } from '@prisma/client';
import { ParsedUrlQuery } from 'querystring';
import { prisma } from '@/prisma';

interface PageProps extends SitePageProps {
	stringifiedPost: string;
}

interface PathProps extends ParsedUrlQuery {
	site: string;
	id: string;
}

const NewsPostPage: NextPage<PageProps> = ({
	stringifiedData,
	stringifiedPost,
}) => {
	console.log('data', typeof stringifiedData);
	console.log('post', typeof stringifiedPost);
	const data = JSON.parse(stringifiedData) as _SiteData;
	const post = JSON.parse(stringifiedPost) as News;

	return (
		// <Layout data={data} title="CHANGE ME">
		<div className="space-y-10">
			<h1>{post.title}</h1>

			<h1>{data.name}</h1>
		</div>
		// </Layout>
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

	console.log('--------------------------------------------');
	console.log();
	console.log('DATA:', typeof data);
	console.log();
	console.log('STRINGIFIED_DATA:', typeof JSON.stringify(data));
	console.log();
	console.log('PARSED_DATA:', typeof JSON.parse(JSON.stringify(data)));
	console.log();
	console.log('POST:', typeof post);
	console.log();
	console.log('STRINGIFIED_POST:', typeof JSON.stringify(post));
	console.log();
	console.log('PARSED_POST:', typeof JSON.parse(JSON.stringify(post)));
	console.log();
	console.log('--------------------------------------------');

	return {
		props: {
			stringifiedData: JSON.stringify(data),
			stringifiedPost: JSON.stringify(post),
		},
		revalidate: 3600,
	};
};
