import { withTRPC } from "@trpc/next";
import { AppType } from "next/dist/shared/lib/utils";
import type { AppRouter } from "../backend/router";
import superjson from "superjson";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";

const MyApp: AppType = ({
	Component,
	pageProps: { session, ...pageProps },
}) => {
	return (
		<SessionProvider session={session}>
			<Component {...pageProps} />
		</SessionProvider>
	);
};

function getBaseUrl() {
	if (typeof window !== "undefined") {
		return "";
	}
	if (process.browser) return ""; // Browser should use current path
	if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url

	return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
}

export default withTRPC<AppRouter>({
	config({ ctx }) {
		/**
		 * If you want to use SSR, you need to use the server's full URL
		 * @link https://trpc.io/docs/ssr
		 */

		// const url = process.env.NEXT_PUBLIC_VERCEL_URL
		// 	? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/trpc`
		// 	: "http://localhost:3000/api/trpc";
		const url = `${getBaseUrl()}/api/trpc`;

		return {
			url,
			transformer: superjson,
			/**
			 * @link https://react-query.tanstack.com/reference/QueryClient
			 */
			// queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
		};
	},
	/**
	 * @link https://trpc.io/docs/ssr
	 */
	ssr: true,
})(MyApp);
