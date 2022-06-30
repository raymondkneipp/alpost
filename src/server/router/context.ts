import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../pages/api/auth/[...nextauth]';
import { prisma } from 'server/db/client';
import { Session } from 'next-auth';

export async function createContext(opts?: trpcNext.CreateNextContextOptions) {
	const req = opts?.req;
	const res = opts?.res;

	const session =
		opts &&
		((await getServerSession(opts, authOptions)) as Session & {
			user: { id: string };
		});

	return {
		req,
		res,
		session,
		prisma,
	};
}
type Context = trpc.inferAsyncReturnType<typeof createContext>;

// Helper function to create a router with your app's context
export function createRouter() {
	return trpc.router<Context>();
}
