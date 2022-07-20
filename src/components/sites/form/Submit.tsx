import { getBg, getRadius } from '@/utils/sites';

import { ThemeContext } from '@/contexts/sites';
import { useContext } from 'react';

type Props = {
	children: React.ReactNode;
};

const Submit: React.FC<Props> = ({ children }) => {
	const { radius, color } = useContext(ThemeContext);

	return (
		<button
			type="submit"
			className={`${getBg(
				color
			)} text-neutral-100 py-2 px-4 hover:brightness-125 font-medium font-heading transition text-center ${getRadius(
				radius
			)}`}
		>
			{children}
		</button>
	);
};

export default Submit;
