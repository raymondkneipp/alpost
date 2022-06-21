import * as trpc from "@trpc/server";
import superjson from "superjson";

import { siteRouter } from "./sites";
import { newsRouter } from "./news";

export const appRouter = trpc
	.router()
	.transformer(superjson)
	.merge("sites.", siteRouter)
	.merge("news.", newsRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
