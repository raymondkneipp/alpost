import {
	HiCheck,
	HiCreditCard,
	HiDocument,
	HiLocationMarker,
	HiUser,
} from 'react-icons/hi';
import React, { useContext } from 'react';
import { getBg, getRadius } from '@/utils/sites';

import { IconType } from 'react-icons';
import { ThemeContext } from '@/contexts/sites';

type StepItemProps = {
	icon: IconType;
	title: string;
	description: string;
	active?: boolean;
	done?: boolean;
};

const StepItem: React.FC<StepItemProps> = ({
	icon,
	title,
	description,
	active = false,
	done = false,
}) => {
	const { color, radius } = useContext(ThemeContext);

	return (
		<div className="flex items-center justify-between py-4 space-x-8 md:p-8 md:justify-end">
			<div className="flex flex-col space-y-1 md:items-end md:text-right">
				<h6
					className={`font-medium font-heading text-neutral-900 dark:text-neutral-100 ${
						active ? 'opacity-100' : 'opacity-60'
					}`}
				>
					{title}
				</h6>
				<p
					className={`text-sm text-neutral-600 dark:text-neutral-400 ${
						active ? 'opacity-100' : 'opacity-90'
					}`}
				>
					{description}
				</p>
			</div>
			<div
				className={`inline-block p-4 ${getRadius(radius)} ${
					active
						? `${getBg(color)} text-neutral-100 opacity-100`
						: 'bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 opacity-50'
				}`}
			>
				{React.createElement(done ? HiCheck : icon, { size: '24' })}
			</div>
		</div>
	);
};

type Props = {
	steps: string[];
	current: number;
};

const Steps: React.FC<Props> = ({ steps, current }) => {
	return (
		<div className="divide-y divide-neutral-200 dark:divide-neutral-800">
			<StepItem
				icon={HiUser}
				title="Personal"
				description="Contact information"
				active={true}
			/>
			<StepItem
				icon={HiLocationMarker}
				title="Address"
				description="Current mailing address"
			/>
			<StepItem
				icon={HiDocument}
				title="Documents"
				description="Upload a copy of your DD214"
			/>
			<StepItem
				icon={HiCreditCard}
				title="Payment"
				description="Submit payment information"
			/>
		</div>
	);
};

export default Steps;
