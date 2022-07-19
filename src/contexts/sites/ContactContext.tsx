import { createContext, useState } from 'react';

import { Contact } from '@prisma/client';

export const ContactContext = createContext<Contact>({
	id: '',
	email: '',
	phone: '',
	siteId: '',
});

type Props = {
	children: React.ReactNode;
	data: Contact;
};

export const ContactProvider: React.FC<Props> = ({ children, data }) => {
	const [id] = useState(data.id);
	const [email] = useState(data.email);
	const [phone] = useState(data.phone);
	const [siteId] = useState(data.siteId);

	return (
		<ContactContext.Provider value={{ id, phone, email, siteId }}>
			{children}
		</ContactContext.Provider>
	);
};
