import * as trpc from "@trpc/server";
import superjson from "superjson";

import { siteRouter } from "./sites";

export const appRouter = trpc
	.router()
	.transformer(superjson)
	.merge("sites.", siteRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
