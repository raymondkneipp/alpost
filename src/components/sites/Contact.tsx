import {
	Container,
	DescriptionListItem as DI,
	DescriptionList as DL,
} from '@/components/shared';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';
import React, { useContext } from 'react';

import { AddressContext } from '@/contexts/sites';
import { Anchor } from '@/components/sites';
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
					<span>{content}</span>
				</span>
			</Anchor>
		</DI>
	);
};

const Contact: React.FC = () => {
	const { street, city, state, zip } = useContext(AddressContext);

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
									content="456-456-4567"
									href="tel:435-456-4564"
								/>
								<ContactMethod
									icon={HiMail}
									content="rerflas@lsdfj.dsf"
									href="mailto:aslkdf@saldf.asdfl"
								/>
								<ContactMethod
									icon={HiLocationMarker}
									content={`${street} ${city}, ${state} ${zip}`}
									href="google.com"
								/>
							</DL>
						</>
					}
				>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
						perspiciatis consectetur possimus voluptatibus nam? Minus voluptates
						soluta voluptate quis cupiditate, fuga adipisci autem, magni iure ea
						dolor dolorem non quo.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
						perspiciatis consectetur possimus voluptatibus nam? Minus voluptates
						soluta voluptate quis cupiditate, fuga adipisci autem, magni iure ea
						dolor dolorem non quo.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
						perspiciatis consectetur possimus voluptatibus nam? Minus voluptates
						soluta voluptate quis cupiditate, fuga adipisci autem, magni iure ea
						dolor dolorem non quo.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
						perspiciatis consectetur possimus voluptatibus nam? Minus voluptates
						soluta voluptate quis cupiditate, fuga adipisci autem, magni iure ea
						dolor dolorem non quo.
					</p>
				</Tall>
			</Container>
		</section>
	);
};

export default Contact;
