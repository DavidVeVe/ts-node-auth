import User from "../../models/User";
import { AuthMiddleware, UserType } from "../../types/auth";

const authMiddlewares: AuthMiddleware = {
  SignUpMiddleware: async (req, res, next) => {
    const { email, password } = req.body as UserType;
    const user = new User({ email, password });
    console.log(user);
    console.log(req.body);
    next();
  },

  LogInMiddleware: async (req, resizeBy, next) => {
    next();
  }
};

export default authMiddlewares;
