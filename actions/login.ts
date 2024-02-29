'use server';

import { LoginSchema, RegisterSchema } from '@/schemas';
import * as z from 'zod';

/* Login Server Action */
export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  console.log(validatedFields);
  if (!validatedFields.success) return { error: 'invalid feilds' };

  return { success: 'success, verification email sent ' };
};
