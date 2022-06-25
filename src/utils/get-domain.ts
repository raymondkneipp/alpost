export default function getDomain(subdomain: string) {
	let domain: string;
	let proto: string;
	if (process.env.NODE_ENV === "development") {
		proto = "http";
		domain = "localhost:3000";
	} else {
		proto = "https";
		domain = "alpost.org";
	}

	return `${proto}://${subdomain}.${domain}`;
}
