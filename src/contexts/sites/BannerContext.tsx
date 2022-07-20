import { Banner, Color } from '@prisma/client';
import { createContext, useState } from 'react';

export const BannerContext = createContext<Banner>({
	id: '',
	content: '',
	theme: Color.YELLOW,
	siteId: '',
});

type Props = {
	children: React.ReactNode;
	data: Banner;
};

export const BannerProvider: React.FC<Props> = ({ children, data }) => {
	const [id] = useState(data.id);
	const [content] = useState(data.content);
	const [theme] = useState(data.theme);
	const [siteId] = useState(data.siteId);

	return (
		<BannerContext.Provider
			value={{
				id,
				content,
				theme,
				siteId,
			}}
		>
			{children}
		</BannerContext.Provider>
	);
};
