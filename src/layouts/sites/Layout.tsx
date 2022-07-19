import { Address, News, Officers, Site, Socials, Theme } from '@prisma/client';
import {
	AddressProvider,
	GeneralProvider,
	OfficersProvider,
	SocialsProvider,
	ThemeProvider,
} from '@/contexts/sites';
import { Footer, Navbar } from '@/components/sites';

import Head from 'next/head';
import { NewsProvider } from 'contexts/sites/NewsContext';

type Props = {
	children: React.ReactNode;
	data: Site & {
		theme: Theme;
		address: Address;
		news: News[];
		officers: Officers[];
		socials: Socials;
	};
};

const Layout: React.FC<Props> = ({ children, data }) => {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<GeneralProvider data={data}>
				<ThemeProvider data={data.theme}>
					<AddressProvider data={data.address}>
						<NewsProvider data={data.news}>
							<OfficersProvider data={data.officers}>
								<SocialsProvider data={data.socials}>
									<>
										<Navbar />
										{children}
										<Footer />
									</>
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
