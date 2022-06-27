import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { Session } from "next-auth";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../src/pages/api/auth/[...nextauth]";

// The app's context - is generated for each incoming request
export async function createContext(opts?: trpcNext.CreateNextContextOptions) {
	// Create your context based on the request object
	// Will be available as `ctx` in all your resolvers

	async function getSession() {
		if (opts?.req && opts?.res) {
			const session = await getServerSession(
				{ req: opts.req, res: opts.res },
				authOptions
			);

			if (session) {
				return session;
			}
		}

		return null;
	}
	const session = (await getSession()) as Session & { user: { id: string } };

	return {
		session,
	};
}
type Context = trpc.inferAsyncReturnType<typeof createContext>;

// Helper function to create a router with your app's context
export function createRouter() {
	return trpc.router<Context>();
}
