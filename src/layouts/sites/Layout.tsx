import { Site } from '@prisma/client';
import { Brand, Navbar } from '@/components/sites';
import { GeneralProvider } from '@/contexts/sites';

type Props = {
	children: React.ReactNode;
	data: Site;
};

const Layout: React.FC<Props> = ({ children, data }) => {
	return (
		<GeneralProvider data={data}>
			<>
				<Navbar />
				{children}
			</>
		</GeneralProvider>
	);
};

export default Layout;
