import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { LabeledInput, Steps, Submit } from '@/components/sites';
import { PathProps, SitePageProps, _SiteData } from '@/types';

import { Container } from '@/components/shared';
import { Layout } from '@/layouts/sites';
import { prisma } from '@/prisma';

const ApplyPage: NextPage<SitePageProps> = ({ stringifiedData }) => {
	const data = JSON.parse(stringifiedData) as _SiteData;

	return (
		<Layout data={data} title="Apply">
			<section className="py-16">
				<Container>
					<h1 className="items-start text-2xl font-medium font-heading md:text-4xl text-neutral-900 dark:text-neutral-100">
						Membership Application
					</h1>

					<div className="flex flex-col py-8 divide-y md:divide-x md:divide-y-0 md:flex-row divide-neutral-200 dark:divide-neutral-800">
						<Steps steps={['Personal', 'DD214', 'Payment']} current={2} />
						<div className="flex flex-col flex-1 pt-8 space-y-4 md:px-8 md:pt-0">
							<LabeledInput label="First Name" />
							<LabeledInput label="Last Name" />
							<LabeledInput label="Email" />
							<LabeledInput label="Phone" />
							<Submit>Next</Submit>
						</div>
					</div>
				</Container>
			</section>
		</Layout>
	);
};

export default ApplyPage;

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
