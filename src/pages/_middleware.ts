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

	if (hostname === "localhost:3000" || hostname === "alpost.vercel.app") {
		url.pathname = `/home${pathname}`;
		return NextResponse.rewrite(url);
	}
}
