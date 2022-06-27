import * as trpc from "@trpc/server";
import { z } from "zod";
import superjson from "superjson";
import { prisma } from "../../db/client";
import { createSiteValidator } from "../../shared/create-site-validator";
import { createRouter } from "./context";

export const siteRouter = createRouter()
	.transformer(superjson)
	.query("get-site", {
		async resolve({ ctx }) {
			if (ctx?.session && ctx?.session?.user && ctx?.session?.user?.id) {
				return await prisma.site.findUnique({
					where: {
						userId: ctx?.session?.user?.id,
					},
				});
			}
		},
	})
	.query("get-all-sites", {
		async resolve() {
			return await prisma.site.findMany();
		},
	})
	.mutation("create", {
		input: createSiteValidator,
		async resolve({ input, ctx }) {
			if (ctx?.session && ctx?.session?.user && ctx?.session?.user?.id) {
				return await prisma.user.update({
					where: {
						id: ctx.session.user.id,
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
