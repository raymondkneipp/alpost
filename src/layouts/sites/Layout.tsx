import { Site } from '@prisma/client';
import { Brand } from '@/components/sites';

type Props = {
	children: React.ReactNode;
	data: Site;
};

const Layout: React.FC<Props> = ({ children, data }) => {
	return (
		<div className="border-8 border-blue-500">
			<Brand post={data.subdomain} />
			{children}
		</div>
	);
};

export default Layout;
