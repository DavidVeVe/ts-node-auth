import { z } from "zod";
import {
  EMAIL_REGEXP,
  INPUT_ERROR_MSG,
  PASSWORD_REGEXP
} from "../shared/constants/auth.constants";

const { name_lastname, email, password } = INPUT_ERROR_MSG;

const signupSchema = z.object({
  firstname: z
    .string({ required_error: name_lastname.required })
    .min(2, name_lastname.minlength)
    .max(20, name_lastname.maxlength)
    .trim(),
  lastname: z
    .string({ required_error: name_lastname.required })
    .min(2, name_lastname.minlength)
    .max(20, name_lastname.maxlength)
    .trim(),
  email: z
    .string({ required_error: email.required })
    .email(email.invalid)
    .toLowerCase()
    .trim()
    .regex(EMAIL_REGEXP, email.invalid),
  password: z
    .string({ required_error: password.required })
    .min(8, password.minlength)
    .max(1024, password.maxlength)
    .regex(PASSWORD_REGEXP, password.invalid)
});

const loginSchema = z.object({
  email: z
    .string({ required_error: email.required })
    .email(email.invalid)
    .toLowerCase()
    .trim()
    .regex(EMAIL_REGEXP, email.invalid),
  password: z
    .string({ required_error: password.required })
    .min(8, password.minlength)
    .max(1024, password.maxlength)
    .regex(PASSWORD_REGEXP, password.invalid)
});

export type SignupInput = z.infer<typeof signupSchema>;
export type LoginInput = z.infer<typeof loginSchema>;

export { signupSchema, loginSchema };
