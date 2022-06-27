import * as trpc from "@trpc/server";
import { z } from "zod";
import superjson from "superjson";
import { prisma } from "../../db/client";
import { createRouter } from "./context";

export const newsRouter = createRouter()
	.transformer(superjson)
	.query("get-all-news", {
		input: z.object({ subdomain: z.string() }),
		async resolve({ input }) {
			const news = prisma.site.findUnique({
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
