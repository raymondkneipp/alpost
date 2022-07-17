import { Site } from '@prisma/client';
import { Brand } from '@/components/sites';
import { GeneralProvider } from '@/contexts/sites';

type Props = {
	children: React.ReactNode;
	data: Site;
};

const Layout: React.FC<Props> = ({ children, data }) => {
	return (
		<GeneralProvider data={data}>
			<div className="border-8 border-blue-500">
				<Brand />
				{children}
			</div>
		</GeneralProvider>
	);
};

export default Layout;
