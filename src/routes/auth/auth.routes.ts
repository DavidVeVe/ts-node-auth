import { Router } from "express";
import { AUTH_API } from "../../shared/constants/auth.constants";
import { validateRequest } from "../../middlewares/auth/validation.middleware";
import { IUser } from "../../types/user.types";
import { loginSchema, signupSchema } from "../../schemas/auth.schema";
import { AuthController } from "../../controllers/auth.controller";
import passport from "passport";
import { authenticate } from "../../middlewares/auth/auth.middleware";

const { ROOT, SIGNUP_EP, LOGIN_EP, LOGOUT_EP, PROFILE } = AUTH_API;

// const { SignUpMiddleware, LogInMiddleware } = authMiddlewares;

const authRouter = () => {
  const router = Router();
  //Retrieves all users
  router.get(ROOT, async (req, res, next) => {
    try {
      res.status(200).json({
        response: {
          data: []
        }
      });
    } catch (error) {
      console.log(error);
    }
  });

  //Creates new user
  router.post(SIGNUP_EP, validateRequest(signupSchema), AuthController.signup);

  //Logs in a user
  router.post(
    LOGIN_EP,
    validateRequest(loginSchema),
    passport.authenticate("local", { session: false }),
    AuthController.login
  );

  //Logs a user out
  router.post(LOGOUT_EP, authenticate, AuthController.logout);

  router.post(PROFILE, authenticate, AuthController.getProfile);

  return router;
};

export default authRouter();
