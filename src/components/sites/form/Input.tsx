import { getBorder, getPlaceholder, getRadius } from '@/utils/sites';

import { ThemeContext } from '@/contexts/sites';
import { useContext } from 'react';

type Props = {
	type: string;
	id: string;
	placeholder?: string;
	required?: boolean;
};

const Input: React.FC<Props> = ({ type, id, placeholder = '', required }) => {
	const { radius, color } = useContext(ThemeContext);
	return (
		<input
			type={type}
			id={id}
			required={required}
			placeholder={placeholder}
			className={`py-2 px-3 bg-transparent border-2 border-opacity-30 dark:border-opacity-30 focus:border-opacity-100 dark:focus:border-opacity-100 focus:outline-none transition text-neutral-900 dark:text-neutral-100 ${getPlaceholder(
				color
			)} ${getBorder(color)} ${getRadius(radius)}`}
		/>
	);
};
export default Input;
