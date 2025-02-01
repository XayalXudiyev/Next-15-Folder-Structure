import * as z from "zod";

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;

export const registerFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  passwordConfirmation: z.string().min(6),
});

export type RegisterFormValues = z.infer<typeof registerFormSchema>;

export const validationErrorsSchema = z.object({
  email: z.array(z.string()),
  password: z.array(z.string()),
  passwordConfirmation: z.array(z.string()),
});

export type ValidationErrors = z.infer<typeof validationErrorsSchema>;

