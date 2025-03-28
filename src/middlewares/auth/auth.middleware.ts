import { NextFunction, Request, Response } from "express";
import { Error } from "mongoose";
import User from "../../models/User";
import { INPUT_ERROR_MSG } from "../../shared/constants/auth.constants";
import { ISignupInput, AuthMiddleware } from "../../types/auth.types";
import passport from "passport";
import { IUser } from "../../types/user.types";

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate(
    "jwt",
    { session: false },
    (err: Error, user: IUser) => {
      if (err) return next(err);
      if (!user) {
        return res.status(401).json({
          status: "error",
          message: "Unauthorized",
        });
      }
      req.user = user;
      next();
    }
  )(req, res, next);
};

const authorizeAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user && (req.user as IUser).role === "admin") {
    next();
  } else {
    res.status(403).json({
      status: "error",
      message: "Forbidden: Admin access required",
    });
  }
};

export { authenticate, authorizeAdmin };

// const signupErrorHandler = (err: any) => {
//   console.log(err);
//   if (err && err.errors) {
//     const errorsObj = {};
//     for (let prop in err.errors) {
//       const error = { errorMessage: err.errors[prop].properties.message };
//       Object.assign(errorsObj, { [prop]: error });
//     }
//     return errorsObj;
//   }
//   return;
// };

// const authMiddlewares: AuthMiddleware = {
//   SignUpMiddleware: async (req: any, res: any, next: any) => {
//     const { email, password, firstname, lastname } = req.body as ISignupInput;
//     const user = new User({ email, password, firstname, lastname });
//     console.log(user);
//     const errors = signupErrorHandler(user.validateSync());
//     console.log(errors);

//     if (errors) {
//       res.status(400).json({
//         error: {
//           message: INPUT_ERROR_MSG.validation,
//           errors,
//         },
//       });
//     }

//     next();
//   },

//   LogInMiddleware: async (req, resizeBy, next) => {
//     next();
//   },
// };

// export default authMiddlewares;
