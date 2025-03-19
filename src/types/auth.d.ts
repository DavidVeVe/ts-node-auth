import { NextFunction, Request, Response } from "express";

type UserType = {
  name: string;
  lastName: string;
} & LoginBody;

type LoginBody = {
  email: string;
  password: string;
};

type AuthFunctionMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

interface AuthMiddleware {
  SignUpMiddleware: AuthFunctionMiddleware;
  LogInMiddleware: AuthFunctionMiddleware;
}

export { UserType, AuthMiddleware, LoginBody };
