import { BannerContext } from '@/contexts/sites';
import { Container } from '@/layouts/shared';
import { getBg } from '@/utils/sites';
import { useContext } from 'react';

const Banner: React.FC = () => {
	const { content, theme, show } = useContext(BannerContext);

	if (show) {
		return (
			<aside className={`py-2 ${getBg(theme)}`}>
				<Container>
					<p className="text-center text-neutral-100">{content}</p>
				</Container>
			</aside>
		);
	}
	return null;
};

export default Banner;
