import React from 'react';
import type { IconType } from 'react-icons';

type Props = {
	icon: IconType;
	title: string;
	children: string;
};

const IconCard: React.FC<Props> = ({ icon, title, children }) => {
	return (
		<article className="flex items-start space-x-6">
			<div className="inline-flex p-4 bg-red-700 rounded-sm dark:bg-red-400 text-neutral-100 dark:text-neutral-900">
				{React.createElement(icon, { size: 24 })}
			</div>
			<div className="flex flex-col space-y-1">
				<h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100 font-heading">
					{title}
				</h3>
				<p className="text-blue-900 dark:text-blue-300">{children}</p>
			</div>
		</article>
	);
};

export default IconCard;
