import { z } from "zod";

export const createSiteValidator = z.object({
	name: z.string().min(3).max(60),
	subdomain: z.string().min(3).max(3),
});

export type CreateSiteInputType = z.infer<typeof createSiteValidator>;
