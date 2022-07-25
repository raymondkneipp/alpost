import {
	Address,
	Banner,
	Contact,
	FAQ,
	News,
	Officers,
	Site,
	Socials,
	Stat,
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
	banner: Banner;
	stats: Stat[];
}

export interface PathProps extends ParsedUrlQuery {
	site: string;
}

export interface SitePageProps {
	stringifiedData: string;
}
