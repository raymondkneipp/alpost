import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { PathProps, SitePageProps, _SiteData } from '@/types';

import { Container } from '@/components/shared';
import { Layout } from '@/layouts/sites';
import { ListEvents } from '@/components/sites';
import { prisma } from '@/prisma';

const EventsPage: NextPage<SitePageProps> = ({ stringifiedData }) => {
	const data = JSON.parse(stringifiedData) as _SiteData;

	return (
		<Layout data={data} title="Events">
			<section className="py-16">
				<Container>
					<h1 className="items-start text-2xl font-medium font-heading md:text-4xl text-neutral-900 dark:text-neutral-100">
						Upcoming Events
					</h1>

					<ListEvents />
				</Container>
			</section>
		</Layout>
	);
};

export default EventsPage;

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

export const getStaticProps: GetStaticProps<SitePageProps, PathProps> = async ({
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
			banner: true,
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
