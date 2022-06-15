import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
	// clone request url
	const url = req.nextUrl.clone();

	// get pathname of request url '/example-pathname'
	const { pathname } = req.nextUrl;

	// get hostname of request 'demo.alpost.org', 'demo.localhost:3000'
	const hostname = req.headers.get("host");

	if (!hostname) {
		return new Response(null, {
			status: 400,
			statusText: "No hostname found in request headers",
		});
	}

	const currentHost =
		process.env.NODE_ENV === "production" && process.env.VERCEL === "1"
			? hostname.replace(".alpost.org", "").replace("alpost.vercel.app", "")
			: hostname.replace(".localhost:3000", "");

	// logging
	console.log({ pathname, hostname, currentHost });

	if (pathname.startsWith("/_sites")) {
		return new Response(null, {
			status: 404,
		});
	}

	if (
		hostname === "localhost:3000" ||
		hostname === "alpost.vercel.app" ||
		hostname === "alpost.org"
	) {
		url.pathname = `/home${pathname}`;
		return NextResponse.rewrite(url);
	}

	url.pathname = `/_sites/${currentHost}${pathname}`;
	console.log({ pathname, hostname, currentHost, newUrl: url.pathname });
	return NextResponse.rewrite(url);
}
