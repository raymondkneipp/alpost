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

import type { ParsedUrlQuery } from 'querystring';

export interface _SiteData extends Site {
	theme: Theme;
	address: Address;
	news: News[];
	officers: Officers[];
	socials: Socials;
	faq: FAQ[];
	contact: Contact;
}

export interface PathProps extends ParsedUrlQuery {
	site: string;
}
