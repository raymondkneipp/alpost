import * as trpc from "@trpc/server";
import { z } from "zod";
import superjson from "superjson";
import { prisma } from "../../db/client";
import { createSiteValidator } from "../../shared/create-site-validator";

export const siteRouter = trpc
	.router()
	.transformer(superjson)
	.query("get-all-sites", {
		async resolve() {
			return await prisma.site.findMany();
		},
	})
	.mutation("create", {
		input: createSiteValidator,
		async resolve({ input }) {
			return await prisma.site.create({
				data: {
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
			});
		},
	});
