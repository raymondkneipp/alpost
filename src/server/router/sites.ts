import { z } from 'zod';
import { createSiteValidator } from '../../shared/create-site-validator';
import { createRouter } from './context';
import { TRPCError } from '@trpc/server';

export const siteRouter = createRouter()
	.query('get-all-sites', {
		async resolve({ ctx }) {
			return await ctx.prisma.site.findMany();
		},
	})
	.query('get-site', {
		async resolve({ ctx }) {
			if (ctx.session) {
				return await ctx.prisma.site.findUnique({
					where: {
						userId: ctx?.session?.user?.id,
					},
				});
			}
		},
	})
	.mutation('create', {
		input: createSiteValidator,
		async resolve({ input, ctx }) {
			if (ctx?.session) {
				return await ctx.prisma.user.update({
					where: {
						id: ctx?.session?.user?.id,
					},
					data: {
						site: {
							create: {
								name: input.name,
								subdomain: input.subdomain,
								street: input.street,
								city: input.city,
								state: input.state,
								zip: input.zip,
								facebook: input.facebook,
								instagram: input.instagram,
								twitter: input.twitter,
								youtube: input.youtube,
								color: input.color,
							},
						},
					},
					include: {
						site: true,
					},
				});
			}
		},
	});
