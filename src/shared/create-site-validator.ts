import { Color, Radius } from "@prisma/client";
import { z } from "zod";

export const createSiteValidator = z.object({
	name: z.string().min(4).max(60),
	subdomain: z.string().min(2).max(4),
	street: z.string().min(2).max(60),
	city: z.string().min(2).max(60),
	state: z.string().min(2).max(60),
	zip: z.string().min(5).max(5),
	facebook: z.literal("").or(z.string().url()),
	instagram: z.literal("").or(z.string().url()),
	twitter: z.literal("").or(z.string().url()),
	youtube: z.literal("").or(z.string().url()),
	color: z.nativeEnum(Color),
	radius: z.nativeEnum(Radius),
});

export type CreateSiteInputType = z.infer<typeof createSiteValidator>;
