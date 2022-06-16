import { z } from "zod";

export const createSiteValidator = z.object({
	name: z.string().min(4).max(60),
	subdomain: z.string().min(2).max(4),
});

export type CreateSiteInputType = z.infer<typeof createSiteValidator>;