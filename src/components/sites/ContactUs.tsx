import { AddressContext, ContactContext } from '@/contexts/sites';
import { Anchor, ContactForm } from '@/components/sites';
import {
	Container,
	DescriptionListItem as DI,
	DescriptionList as DL,
} from '@/components/shared';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';
import React, { useContext } from 'react';

import { IconType } from 'react-icons';
import { Tall } from '@/layouts/shared';

type ContactMethodProps = {
	icon: IconType;
	content: string;
	href: string;
};
const ContactMethod: React.FC<ContactMethodProps> = ({
	icon,
	content,
	href,
}) => {
	return (
		<DI>
			<Anchor href={href}>
				<span className="flex space-x-2">
					{React.createElement(icon, { size: 24 })}
					<span className="select-all">{content}</span>
				</span>
			</Anchor>
		</DI>
	);
};

const ContactUs: React.FC = () => {
	const { street, city, state, zip } = useContext(AddressContext);
	const { email, phone } = useContext(ContactContext);

	return (
		<section className="py-16">
			<Container>
				<Tall
					master={
						<>
							<h2 className="items-start text-2xl font-medium font-heading md:text-4xl text-neutral-900 dark:text-neutral-100">
								Contact Us
							</h2>
							<p className="text-lg text-neutral-600 dark:text-neutral-400">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
								minima nisi adipisci numquam molestias nam quas minus dolore
							</p>
							<DL title="Other Ways to Reach Us">
								<ContactMethod
									icon={HiPhone}
									content={phone}
									href={`tel:${phone}`}
								/>
								<ContactMethod
									icon={HiMail}
									content={email}
									href={`mailto:${email}`}
								/>
								<ContactMethod
									icon={HiLocationMarker}
									content={`${street} ${city}, ${state} ${zip}`}
									href={`https://www.google.com/maps/search/${encodeURIComponent(
										`${street} ${city}, ${state} ${zip}`
									)}`}
								/>
							</DL>
						</>
					}
				>
					<ContactForm />
				</Tall>
			</Container>
		</section>
	);
};

export default ContactUs;
