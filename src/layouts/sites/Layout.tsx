import { Site, Theme } from '@prisma/client';
import { Navbar } from '@/components/sites';
import { GeneralProvider, ThemeProvider } from '@/contexts/sites';

type Props = {
	children: React.ReactNode;
	data: Site & { theme: Theme };
};

const Layout: React.FC<Props> = ({ children, data }) => {
	return (
		<GeneralProvider data={data}>
			<ThemeProvider data={data.theme}>
				<>
					<Navbar />
					{children}
				</>
			</ThemeProvider>
		</GeneralProvider>
	);
};

export default Layout;
