'use server';

import { RegisterSchema } from '@/schemas';
import * as z from 'zod';
import bcrypt from 'bcryptjs';
import { db } from '@/lib/db';
import { error } from 'console';
import { getUserByEmail } from '@/data/user';
/* Register Server Action */

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) return { error: 'invalid feilds' };

  const { email, password, name } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { error: 'email already in use' };
  }

  try {
    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    //todo: send verification token to user
    return { success: 'success, verification email sent ' };
  } catch (err) {
    console.error('Error creating user:', err);
    return { error: 'Failed to create user' };
  }
};
