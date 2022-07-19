import {
	Address,
	FAQ,
	News,
	Officers,
	Site,
	Socials,
	Theme,
} from '@prisma/client';
import {
	AddressProvider,
	GeneralProvider,
	OfficersProvider,
	SocialsProvider,
	ThemeProvider,
} from '@/contexts/sites';
import { Footer, Navbar } from '@/components/sites';

import { FAQProvider } from 'contexts/sites/FAQContext';
import { NewsProvider } from 'contexts/sites/NewsContext';
import { NextSeo } from 'next-seo';

type Props = {
	children: React.ReactNode;
	title: string;
	data: Site & {
		theme: Theme;
		address: Address;
		news: News[];
		officers: Officers[];
		socials: Socials;
		faq: FAQ[];
	};
};

const Layout: React.FC<Props> = ({ children, data, title }) => {
	return (
		<>
			<NextSeo
				title={title}
				titleTemplate={`${data.name} American Legion Post ${data.subdomain} | %s`}
				description={data.description}
				additionalLinkTags={[
					{
						rel: 'preconnect',
						href: 'https://fonts.googleapis.com',
					},
					{
						rel: 'preconnect',
						href: 'https://fonts.gstatic.com',
						crossOrigin: 'true',
					},
					{
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500&display=swap',
					},
				]}
				openGraph={{
					type: 'website',
					url: 'https://www.example.com/page',
					title: `${data.name} American Legion Post ${data.subdomain}`,
					description: `${data.description}`,
					images: [
						{
							url: 'https://alpost.org/shared/american-flag.jpg',
							width: 800,
							height: 600,
							alt: 'American Flag',
						},
					],
				}}
			/>
			<GeneralProvider data={data}>
				<ThemeProvider data={data.theme}>
					<AddressProvider data={data.address}>
						<NewsProvider data={data.news}>
							<OfficersProvider data={data.officers}>
								<SocialsProvider data={data.socials}>
									<FAQProvider data={data.faq}>
										<Navbar />
										<main>{children}</main>
										<Footer />
									</FAQProvider>
								</SocialsProvider>
							</OfficersProvider>
						</NewsProvider>
					</AddressProvider>
				</ThemeProvider>
			</GeneralProvider>
		</>
	);
};

export default Layout;
