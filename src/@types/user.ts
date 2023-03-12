import { z } from "zod";

const User = z.object({
  id: z.string().uuid(),
  fullName: z.string(),
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  createdAt: z.string(),
  updatedAt: z.string()
});

const SafeUser = User.omit({ password: true });

export type SafeUser = z.infer<typeof SafeUser>;
export type User = z.infer<typeof User>;


