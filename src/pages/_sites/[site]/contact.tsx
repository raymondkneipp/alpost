import {
	Address,
	FAQ,
	News,
	Officers,
	Site,
	Socials,
	Theme,
} from '@prisma/client';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { Contact } from '@/components/sites';
import { Layout } from '@/layouts/sites';
import type { ParsedUrlQuery } from 'querystring';
import { prisma } from '@/prisma';

interface PathProps extends ParsedUrlQuery {
	site: string;
}

interface ContactProps {
	stringifiedData: string;
}

const ContactPage: NextPage<ContactProps> = ({ stringifiedData }) => {
	const data = JSON.parse(stringifiedData) as Site & {
		theme: Theme;
		address: Address;
		news: News[];
		officers: Officers[];
		socials: Socials;
		faq: FAQ[];
	};

	return (
		<Layout data={data} title="News">
			<Contact />
		</Layout>
	);
};

export default ContactPage;

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

export const getStaticProps: GetStaticProps<ContactProps, PathProps> = async ({
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
