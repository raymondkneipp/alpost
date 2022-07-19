import { createContext, useState } from 'react';

import { Socials } from '@prisma/client';

export const SocialsContext = createContext<Socials>({
	id: '',
	facebook: '',
	twitter: '',
	instagram: '',
	youtube: '',
	pinterest: '',
	linkedin: '',
	siteId: '',
});

type Props = {
	children: React.ReactNode;
	data: Socials;
};

export const SocialsProvider: React.FC<Props> = ({ children, data }) => {
	const [id] = useState(data.id);
	const [facebook] = useState(data.facebook);
	const [twitter] = useState(data.twitter);
	const [instagram] = useState(data.instagram);
	const [youtube] = useState(data.youtube);
	const [pinterest] = useState(data.pinterest);
	const [linkedin] = useState(data.linkedin);
	const [siteId] = useState(data.siteId);

	return (
		<SocialsContext.Provider
			value={{
				id,
				facebook,
				twitter,
				instagram,
				youtube,
				pinterest,
				linkedin,
				siteId,
			}}
		>
			{children}
		</SocialsContext.Provider>
	);
};
