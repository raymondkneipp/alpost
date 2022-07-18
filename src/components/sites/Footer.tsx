import { AddressContext, GeneralContext } from '@/contexts/sites';
import {
	AmericanLegionLogo,
	Container,
	DescriptionListItem as DI,
	DescriptionList as DL,
} from '@/components/shared';

import { Anchor } from '@/components/sites';
import { Tall } from '@/layouts/shared';
import { useContext } from 'react';

const Footer: React.FC = () => {
	const { name, subdomain } = useContext(GeneralContext);
	const { street, city, state, zip } = useContext(AddressContext);

	return (
		<footer className="py-8">
			<Container>
				<Tall
					master={
						<div className="space-y-4">
							<AmericanLegionLogo />
							<p className="text-neutral-600 dark:text-neutral-400">
								{name} American Legion Post {subdomain} located on {street}{' '}
								{city}, {state} {zip}
							</p>
						</div>
					}
				>
					<DL title="Pages">
						<DI>
							<Anchor href="/">Home</Anchor>
						</DI>
						<DI>
							<Anchor href="/about">About</Anchor>
						</DI>
						<DI>
							<Anchor href="/news">News</Anchor>
						</DI>
						<DI>
							<Anchor href="/events">Events</Anchor>
						</DI>
						<DI>
							<Anchor href="/contact">Contact</Anchor>
						</DI>
					</DL>

					<DL title="Other">
						<DI>
							<Anchor href="/affiliated">Affiliated Websites</Anchor>
						</DI>
						<DI>
							<Anchor href="/apply">Apply</Anchor>
						</DI>
						<DI>
							<Anchor href="https://app.alpost.org/login">Login</Anchor>
						</DI>
					</DL>
				</Tall>

				<div className="flex flex-col items-center justify-center pt-4 text-center">
					<Anchor href="https://alpost.org">Website by ALPost</Anchor>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
