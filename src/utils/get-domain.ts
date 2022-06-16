import { Site } from "@prisma/client";

export default function getDomain(site: Site) {
	let domain: string;
	let proto: string;
	if (process.env.NODE_ENV === "development") {
		proto = "http";
		domain = "localhost:3000";
	} else {
		proto = "https";
		domain = "alpost.org";
	}

	return `${proto}://${site.subdomain}.${domain}`;
}
