import { Error } from "mongoose";
import User from "../../models/User";
import { INPUT_ERROR_MSG } from "../../shared/constants/authConstants";
import { AuthMiddleware, User as UserType } from "../../types/auth.types";

const signupErrorHandler = (err: any) => {
  console.log(err);
  if (err && err.errors) {
    const errorsObj = {};
    for (let prop in err.errors) {
      const error = { errorMessage: err.errors[prop].properties.message };
      Object.assign(errorsObj, { [prop]: error });
    }
    return errorsObj;
  }
  return;
};

const authMiddlewares: AuthMiddleware = {
  SignUpMiddleware: async (req: any, res: any, next: any) => {
    const { email, password, firstname, lastname } = req.body as UserType;
    const user = new User({ email, password, firstname, lastname });
    console.log(user);
    const errors = signupErrorHandler(user.validateSync());
    console.log(errors);

    if (errors) {
      res.status(400).json({
        error: {
          message: INPUT_ERROR_MSG.validation,
          errors,
        },
      });
    }

    next();
  },

  LogInMiddleware: async (req, resizeBy, next) => {
    next();
  },
};

export default authMiddlewares;
