'use server';

import { RegisterSchema } from '@/schemas';
import * as z from 'zod';
/* Register Server Action */

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  console.log(validatedFields);
  if (!validatedFields.success) return { error: 'invalid feilds' };

  return { success: 'success, verification email sent ' };
};
