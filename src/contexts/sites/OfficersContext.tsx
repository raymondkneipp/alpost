import { createContext, useState } from 'react';

import { Officers } from '@prisma/client';

export const OfficersContext = createContext<Officers[]>([]);

type Props = {
	children: React.ReactNode;
	data: Officers[];
};

export const OfficersProvider: React.FC<Props> = ({ children, data }) => {
	const [officers] = useState(data);

	return (
		<OfficersContext.Provider value={officers}>
			{children}
		</OfficersContext.Provider>
	);
};
