import { createContext, useState } from 'react';

import { Site } from '@prisma/client';

export const GeneralContext = createContext<Site>({
	id: '',
	name: '',
	description: '',
	subdomain: '',
});

type Props = {
	children: React.ReactNode;
	data: Site;
};

export const GeneralProvider: React.FC<Props> = ({ children, data }) => {
	const [id] = useState(data.id);
	const [name] = useState(data.name);
	const [description] = useState(data.description);
	const [subdomain] = useState(data.subdomain);

	return (
		<GeneralContext.Provider value={{ id, name, subdomain, description }}>
			{children}
		</GeneralContext.Provider>
	);
};
