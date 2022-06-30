import { z } from 'zod';
import { createRouter } from './context';

export const newsRouter = createRouter().query('get-all-news', {
	input: z.object({ subdomain: z.string() }),
	async resolve({ input, ctx }) {
		const news = ctx.prisma.site.findUnique({
			where: {
				subdomain: input.subdomain,
			},
			select: {
				news: true,
			},
		});

		return news;
	},
});
