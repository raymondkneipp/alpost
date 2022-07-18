import {
	AmericanLegionLogo,
	Container,
	DescriptionListItem as DI,
	DescriptionList as DL,
} from '@/components/shared';

import { GeneralContext } from '@/contexts/sites';
import { Tall } from '@/layouts/shared';
import { useContext } from 'react';

const Footer: React.FC = () => {
	const { name, subdomain } = useContext(GeneralContext);

	return (
		<footer className="py-8">
			<Container>
				<Tall
					master={
						<div className="space-y-4">
							<AmericanLegionLogo />
							<p className="text-neutral-700 dark:text-neutral-300">
								{name} American Legion Post {subdomain} located on _______ ___,
								____
							</p>
						</div>
					}
				>
					<DL title="Pages">
						<DI>Home</DI>
					</DL>
				</Tall>

				<div className="flex flex-col items-center justify-center text-center">
					<a href="https://alpost.org" className="p-4">
						Website by ALPost
					</a>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
