import { getBorder, getFg, getPlaceholder, getRadius } from '@/utils/sites';

import { ThemeContext } from '@/contexts/sites';
import { useContext } from 'react';

type Props = {
	id: string;
	placeholder?: string;
	required?: boolean;
};

const Textarea: React.FC<Props> = ({ id, placeholder = '', required }) => {
	const { radius, color } = useContext(ThemeContext);

	return (
		<textarea
			rows={6}
			id={id}
			required={required}
			placeholder={placeholder}
			className={`py-2 px-3 bg-transparent border-2 border-opacity-30 dark:border-opacity-30 focus:border-opacity-100 dark:focus:border-opacity-100 focus:outline-none transition ${getPlaceholder(
				color
			)} ${getFg(color)} ${getBorder(color)} ${getRadius(radius)}`}
		></textarea>
	);
};
export default Textarea;
