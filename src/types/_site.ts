import {
	Address,
	Contact,
	FAQ,
	News,
	Officers,
	Site,
	Socials,
	Theme,
} from '@prisma/client';

export interface _SiteData extends Site {
	theme: Theme;
	address: Address;
	news: News[];
	officers: Officers[];
	socials: Socials;
	faq: FAQ[];
	contact: Contact;
}
