import { Brand as AlpostBrand } from '@/components/home';
import {
	AmericanLegionLogo,
	Container,
	DescriptionList as DL,
	DescriptionListItem as DI,
} from '@/components/shared';
import {
	AddressContext,
	GeneralContext,
	SocialsContext,
} from '@/contexts/sites';
import React, { useContext } from 'react';
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaPinterest,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa';

import { Anchor } from '@/components/sites';
import { Tall } from '@/layouts/shared';
import Link from 'next/link';
import { IconType } from 'react-icons';

type SocialItemProps = {
	account: string;
	link: string;
	icon: IconType;
};

const SocialItem: React.FC<SocialItemProps> = ({ link, account, icon }) => {
	return (
		<DI>
			<Anchor href={link}>
				<span className="inline-flex items-center space-x-2">
					{React.createElement(icon)}
					<span>{account}</span>
				</span>
			</Anchor>
		</DI>
	);
};

const Footer: React.FC = () => {
	const { name, subdomain } = useContext(GeneralContext);
	const { street, city, state, zip } = useContext(AddressContext);
	const { facebook, twitter, instagram, youtube, pinterest, linkedin } =
		useContext(SocialsContext);

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
					<div className="flex flex-wrap justify-between gap-8 sm:justify-around col-span-full">
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
								<Anchor href="/apply">Apply</Anchor>
							</DI>
							<DI>
								<Anchor href="https://app.alpost.org/login">Login</Anchor>
							</DI>
						</DL>

						<DL title="Socials">
							<SocialItem
								account="Facebook"
								link={facebook}
								icon={FaFacebook}
							/>
							<SocialItem account="Twitter" link={twitter} icon={FaTwitter} />
							<SocialItem
								account="Instagram"
								link={instagram}
								icon={FaInstagram}
							/>
							<SocialItem account="YouTube" link={youtube} icon={FaYoutube} />
							<SocialItem
								account="Pinterest"
								link={pinterest}
								icon={FaPinterest}
							/>
							<SocialItem
								account="LinkedIn"
								link={linkedin}
								icon={FaLinkedin}
							/>
						</DL>
					</div>
				</Tall>

				<div className="flex flex-col items-center justify-center pt-4 text-center">
					{/* <Anchor href="https://alpost.org">Website by ALPost</Anchor> */}
					<Link href="https://alpost.org">
						<AlpostBrand />
					</Link>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
