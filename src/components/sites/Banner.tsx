import { BannerContext } from '@/contexts/sites';
import { Container } from '@/components/shared';
import { getBg } from '@/utils/sites';
import { useContext } from 'react';

const Banner: React.FC = () => {
	const { content, theme } = useContext(BannerContext);

	return (
		<aside className={`py-2 ${getBg(theme)}`}>
			<Container>
				<p className="text-center text-neutral-100">{content}</p>
			</Container>
		</aside>
	);
};

export default Banner;
