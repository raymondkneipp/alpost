import { Address, News, Officers, Site, Socials, Theme } from '@prisma/client';
import {
	AddressProvider,
	GeneralProvider,
	OfficersProvider,
	SocialsProvider,
	ThemeProvider,
} from '@/contexts/sites';
import { Footer, Navbar } from '@/components/sites';

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
	);
};

export default Layout;
