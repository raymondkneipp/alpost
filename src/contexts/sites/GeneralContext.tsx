import { Site } from '@prisma/client';
import { createContext, useState } from 'react';

export const GeneralContext = createContext<Site>({
	id: '',
	name: '',
	subdomain: '',
});

type Props = {
	children: React.ReactNode;
	data: Site;
};

export const GeneralProvider: React.FC<Props> = ({ children, data }) => {
	const [id] = useState(data.id);
	const [name] = useState(data.name);
	const [subdomain] = useState(data.subdomain);

	return (
		<GeneralContext.Provider value={{ id, name, subdomain }}>
			{children}
		</GeneralContext.Provider>
	);
};
