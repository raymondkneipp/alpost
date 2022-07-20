import { Container } from '@/components/shared';
import { ThemeContext } from '@/contexts/sites';
import { getBg } from '@/utils/sites';
import { useContext } from 'react';

const Banner: React.FC = () => {
	const { color } = useContext(ThemeContext);
	return (
		<aside className={`py-2 ${getBg(color)}`}>
			<Container>
				<p className="text-center text-neutral-100">
					Important information should go here so all can see!
				</p>
			</Container>
		</aside>
	);
};

export default Banner;
