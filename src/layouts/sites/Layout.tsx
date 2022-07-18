import { Address, Site, Theme } from '@prisma/client';
import {
	AddressProvider,
	GeneralProvider,
	ThemeProvider,
} from '@/contexts/sites';
import { Footer, Navbar } from '@/components/sites';

type Props = {
	children: React.ReactNode;
	data: Site & { theme: Theme; address: Address };
};

const Layout: React.FC<Props> = ({ children, data }) => {
	return (
		<GeneralProvider data={data}>
			<ThemeProvider data={data.theme}>
				<AddressProvider data={data.address}>
					<>
						<Navbar />
						{children}
						<Footer />
					</>
				</AddressProvider>
			</ThemeProvider>
		</GeneralProvider>
	);
};

export default Layout;
