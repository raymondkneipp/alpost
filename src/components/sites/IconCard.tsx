import React, { useContext } from 'react';
import { getBg, getRadius } from '@/utils/sites';

import { IconType } from 'react-icons';
import { ThemeContext } from '@/contexts/sites';

interface Props {
	icon: IconType;
	title: string;
	content: string;
	stack?: boolean;
	light?: boolean;
	center?: boolean;
}

const IconCard: React.FC<Props> = ({
	icon,
	title,
	content,
	stack = false,
	center = false,
}) => {
	const { color, radius } = useContext(ThemeContext);

	return (
		<article
			className={`flex space-x-6 ${
				stack ? 'flex-col space-x-0 space-y-6' : ''
			} ${center ? 'items-center text-center' : 'items-start'}`}
		>
			<div className={`inline-block p-4 ${getRadius(radius)} ${getBg(color)}`}>
				{React.createElement(icon, { color: 'white', size: '24' })}
			</div>
			<div className="space-y-2">
				<h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">
					{title}
				</h3>
				<p className="text-neutral-600 dark:text-neutral-400">{content}</p>
			</div>
		</article>
	);
};

export default IconCard;
