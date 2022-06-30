import { Text } from '@/components/shared';
import React from 'react';

type DItemProps = {
	children: React.ReactNode;
};

export const DItem: React.FC<DItemProps> = ({ children }) => {
	return <Text element="dd">{children}</Text>;
};

type DListProps = {
	children: React.ReactNode;
	title: string;
};

export const DList: React.FC<DListProps> = ({ children, title }) => {
	return (
		<dl className="flex flex-col space-y-4">
			<Text element="dt" variant="h6" cap>
				{title}
			</Text>
			{children}
		</dl>
	);
};
