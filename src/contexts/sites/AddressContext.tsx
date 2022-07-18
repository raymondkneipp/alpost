import { createContext, useState } from 'react';

import { Address } from '@prisma/client';

export const AddressContext = createContext<Address>({
	id: '',
	street: '',
	city: '',
	state: '',
	zip: '',
	siteId: '',
});

type Props = {
	children: React.ReactNode;
	data: Address;
};

export const AddressProvider: React.FC<Props> = ({ children, data }) => {
	const [id] = useState(data.id);
	const [street] = useState(data.street);
	const [city] = useState(data.city);
	const [state] = useState(data.state);
	const [zip] = useState(data.zip);
	const [siteId] = useState(data.siteId);

	return (
		<AddressContext.Provider value={{ id, street, city, state, zip, siteId }}>
			{children}
		</AddressContext.Provider>
	);
};
