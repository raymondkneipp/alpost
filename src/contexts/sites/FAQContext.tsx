import { createContext, useState } from 'react';

import { FAQ } from '@prisma/client';

export const FAQContext = createContext<FAQ[]>([]);

type Props = {
	children: React.ReactNode;
	data: FAQ[];
};

export const FAQProvider: React.FC<Props> = ({ children, data }) => {
	const [faq] = useState(data);

	return <FAQContext.Provider value={faq}>{children}</FAQContext.Provider>;
};
