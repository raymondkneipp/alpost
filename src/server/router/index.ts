import superjson from 'superjson';
import { createRouter } from './context';

import { siteRouter } from './sites';
import { newsRouter } from './news';
import { authRouter } from './auth';

export const appRouter = createRouter()
	.transformer(superjson)
	.merge('sites.', siteRouter)
	.merge('news.', newsRouter)
	.merge('auth.', authRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
