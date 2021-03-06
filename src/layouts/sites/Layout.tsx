import {
	AddressProvider,
	BannerProvider,
	ContactProvider,
	GeneralProvider,
	OfficersProvider,
	SocialsProvider,
	StatsProvider,
	ThemeProvider,
} from '@/contexts/sites';
import { Banner, Footer, Navbar } from '@/components/sites';

import { FAQProvider } from 'contexts/sites/FAQContext';
import { NewsProvider } from 'contexts/sites/NewsContext';
import { NextSeo } from 'next-seo';
import { _SiteData } from '@/types';

type Props = {
	children: React.ReactNode;
	title: string;
	data: _SiteData;
	titleTemplate?: string;
};

const Layout: React.FC<Props> = ({ children, data, title, titleTemplate }) => {
	return (
		<>
			<NextSeo
				title={title}
				titleTemplate={
					titleTemplate ||
					`${data.name} American Legion Post ${data.subdomain} | %s`
				}
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
					{
						rel: 'icon',
						type: 'image/svg+xml',
						href: '/shared/favicon.svg',
					},
					{
						rel: 'icon',
						type: 'image/png',
						href: '/shared/favicon.png',
					},
				]}
				openGraph={{
					type: 'website',
					url: `https://${data.subdomain}.alpost.org`,
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
										<ContactProvider data={data.contact}>
											<BannerProvider data={data.banner}>
												<StatsProvider data={data.stats}>
													<Banner />
													<Navbar />
													<main>{children}</main>
													<Footer />
												</StatsProvider>
											</BannerProvider>
										</ContactProvider>
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
