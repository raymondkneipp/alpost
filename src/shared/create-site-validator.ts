import { z } from "zod";

export const createSiteValidator = z.object({
	name: z.string().min(3).max(60),
	subdomain: z.number().min(99).max(999),
});

export type CreateSiteInputType = z.infer<typeof createSiteValidator>;
