import { z } from 'zod';

export const ContactValidator = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

export type ContactPayload = z.infer<typeof ContactValidator>;
