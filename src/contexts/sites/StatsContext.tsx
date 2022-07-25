import { createContext, useState } from 'react';

import { Stat } from '@prisma/client';

export const StatsContext = createContext<Stat[]>([]);

type Props = {
	children: React.ReactNode;
	data: Stat[];
};

export const StatsProvider: React.FC<Props> = ({ children, data }) => {
	const [stats] = useState(data);

	return (
		<StatsContext.Provider value={stats}>{children}</StatsContext.Provider>
	);
};
