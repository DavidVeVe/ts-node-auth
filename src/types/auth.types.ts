import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { INPUT_ERROR_MSG } from "../shared/constants/authConstants";
import { IUser } from "./user.types";

// type LoginBody = {
//   email: string;
//   password: string;
// };

type AuthFunctionMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

interface AuthMiddleware {
  SignUpMiddleware: AuthFunctionMiddleware;
  LogInMiddleware: AuthFunctionMiddleware;
}

// type User = z.infer<typeof UserSchema>;

interface ILoginInput {
  email: string;
  password: string;
}

interface ISignupInput extends ILoginInput {
  firstname: string;
  lastname: string;
}

interface IAuthResponse {
  token: string;
  user: Omit<IUser, "password">;
}

export { ILoginInput, ISignupInput, IAuthResponse, AuthMiddleware };
