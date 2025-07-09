import { z } from "zod";

export const LayoutSchema = z.object({
  children: z.any(),
});

export type LayoutType = z.infer<typeof LayoutSchema>;
