import { AmericanLegionLogo, Container } from '@/components/shared';

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
							<p>
								{name} American Legion Post {subdomain} located on _______ ___,
								____
							</p>
						</div>
					}
				>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
						qui dolore, quo eveniet recusandae vero tempore quam soluta minus,
						impedit a eum dignissimos sequi maiores molestias mollitia adipisci
						sapiente? Modi.
					</p>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
						qui dolore, quo eveniet recusandae vero tempore quam soluta minus,
						impedit a eum dignissimos sequi maiores molestias mollitia adipisci
						sapiente? Modi.
					</p>
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
