import { Color, Radius, Theme } from '@prisma/client';
import { createContext, useState } from 'react';

export const ThemeContext = createContext<Theme>({
	id: '',
	color: Color.SKY,
	radius: Radius.MEDIUM,
	siteId: '',
});

type Props = {
	children: React.ReactNode;
	data: Theme;
};

export const ThemeProvider: React.FC<Props> = ({ children, data }) => {
	const [id] = useState(data.id);
	const [color] = useState(data.color);
	const [radius] = useState(data.radius);
	const [siteId] = useState(data.siteId);

	return (
		<ThemeContext.Provider value={{ id, color, radius, siteId }}>
			{children}
		</ThemeContext.Provider>
	);
};
