import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { SitePageProps, _SiteData } from '@/types';

import { Container } from '@/components/shared';
import { Layout } from '@/layouts/sites';
import { News } from '@prisma/client';
import { ParsedUrlQuery } from 'querystring';
import { ThemeContext } from 'contexts/sites/ThemeContext';
import { getFg } from '@/utils/sites';
import { prisma } from '@/prisma';
import { useContext } from 'react';

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
	const data = JSON.parse(stringifiedData) as _SiteData;
	const post = JSON.parse(stringifiedPost) as News;

	const { color } = useContext(ThemeContext);

	return (
		<Layout
			data={data}
			title={post.title}
			titleTemplate={`%s | Post ${data.subdomain}`}
		>
			<section className="py-16">
				<Container className="space-y-4 max-w-prose">
					<h1 className="text-2xl font-medium font-heading md:text-4xl text-neutral-900 dark:text-neutral-100">
						{post.title}
					</h1>

					<p className={`${getFg(color)}`}>
						{new Date(post.createdAt).toDateString()}
					</p>

					<p className="text-neutral-600 dark:text-neutral-400">
						{post.content}
					</p>
				</Container>
			</section>
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
		fallback: false,
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
