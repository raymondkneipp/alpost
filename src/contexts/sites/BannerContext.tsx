import { createContext, useState } from 'react';

import { Banner } from '@prisma/client';

export const BannerContext = createContext<Banner>({
	id: '',
	content: '',
	siteId: '',
});

type Props = {
	children: React.ReactNode;
	data: Banner;
};

export const BannerProvider: React.FC<Props> = ({ children, data }) => {
	const [id] = useState(data.id);
	const [content] = useState(data.content);
	const [siteId] = useState(data.siteId);

	return (
		<BannerContext.Provider
			value={{
				id,
				content,
				siteId,
			}}
		>
			{children}
		</BannerContext.Provider>
	);
};
