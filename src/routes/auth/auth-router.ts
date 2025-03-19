import { Router } from "express";
import { AUTH_API } from "./constants";
import authMiddlewares from "../../middlewares/auth/authMiddleware";
import { User } from "../../types/auth";

const { ROOT, SIGNUP_EP, LOGIN_EP, LOGOUT_EP } = AUTH_API;

const users: User[] = [
  {
    name: "Toronto",
    lastName: "Uribe",
    email: "toronto@gmail.com",
    password: "123456"
  }
];

const { SignUpMiddleware, LogInMiddleware } = authMiddlewares;

const authRouter = () => {
  const router = Router();
  //Retrieves all users
  router.get(ROOT, async (req, res, next) => {
    try {
      res.status(200).json({
        response: {
          data: users
        }
      });
    } catch (error) {
      console.log(error);
    }
  });

  //Creates new user
  router.post(SIGNUP_EP, SignUpMiddleware, (req, res) => {
    res.status(200).json({
      response: {
        data: "User successfully created."
      }
    });
  });

  //Logs in a user
  router.post(LOGIN_EP, LogInMiddleware, (req, res) => {
    res.status(200).json({
      response: {
        data: "User"
      }
    });
  });

  //Logs a user out
  router.post(LOGOUT_EP, (req, res) => {
    res.status(200).json({
      response: {
        data: "Log out this is"
      }
    });
  });

  return router;
};

export default authRouter();
