import { createContext, useState } from 'react';

import { News } from '@prisma/client';

export const NewsContext = createContext<News[]>([]);

type Props = {
	children: React.ReactNode;
	data: News[];
};

export const NewsProvider: React.FC<Props> = ({ children, data }) => {
	const [news] = useState(data);

	return <NewsContext.Provider value={news}>{children}</NewsContext.Provider>;
};
