import { Address, News, Site, Theme } from '@prisma/client';
import {
	AddressProvider,
	GeneralProvider,
	ThemeProvider,
} from '@/contexts/sites';
import { Footer, Navbar } from '@/components/sites';

import { NewsProvider } from 'contexts/sites/NewsContext';

type Props = {
	children: React.ReactNode;
	data: Site & { theme: Theme; address: Address; news: News[] };
};

const Layout: React.FC<Props> = ({ children, data }) => {
	return (
		<GeneralProvider data={data}>
			<ThemeProvider data={data.theme}>
				<AddressProvider data={data.address}>
					<NewsProvider data={data.news}>
						<>
							<Navbar />
							{children}
							<Footer />
						</>
					</NewsProvider>
				</AddressProvider>
			</ThemeProvider>
		</GeneralProvider>
	);
};

export default Layout;
