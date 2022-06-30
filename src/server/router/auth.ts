import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { createRouter } from './context';

export const authRouter = createRouter()
	.query('getSession', {
		async resolve({ ctx }) {
			return ctx.session;
		},
	})
	.middleware(async ({ ctx, next }) => {
		if (!ctx.session) {
			throw new TRPCError({ code: 'UNAUTHORIZED' });
		}
		return next();
	});
