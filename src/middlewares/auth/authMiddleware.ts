import User from "../../models/User";
import { AuthMiddleware, UserType } from "../../types/auth";

const authMiddlewares: AuthMiddleware = {
  SignUpMiddleware: async (req, res, next) => {
    const { email, password, name, lastName } = req.body as UserType;
    const user = new User({ email, password, name, lastName });
    const errors = user.validateSync();

    //TODO: Hash password
    if (errors && Object.keys(errors).length > 0) {
      res.status(400).json({
        errors: errors.errors
      });
    }

    console.log("Successfully created");
    next();
  },

  LogInMiddleware: async (req, resizeBy, next) => {
    next();
  }
};

export default authMiddlewares;
