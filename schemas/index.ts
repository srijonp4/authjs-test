import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string({ required_error: 'password is required' }).min(1, {
    message: 'password is required',
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z
    .string({ required_error: 'password is required' })
    .min(8, {
      message: 'minimum password length is 8 ',
    })
    .max(32, { message: 'password must be within 32 characters' }),
  name: z.string().min(1, {
    message: 'name is required',
  }),
});
