import { Color, Radius } from '@prisma/client';
import { z } from 'zod';

export const updateThemeValidator = z.object({
	color: z.nativeEnum(Color),
	radius: z.nativeEnum(Radius),
});

export type UpdateThemeInputType = z.infer<typeof updateThemeValidator>;
