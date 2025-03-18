import { Router } from "express";
import AUTH_API from "./constants";

const { ROOT, SIGNUP_EP, LOGIN_EP, LOGOUT_EP } = AUTH_API;

type User = {
  name: string;
  lastName: string;
};

const users: User[] = [{ name: "Toronto", lastName: "Uribe" }];

const authRouter = () => {
  const router = Router();

  //Retrieves all users
  router.get(ROOT, (req, res, next) => {
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
  router.post(SIGNUP_EP, (req, res) => {
    res.status(200).json({
      response: {
        data: "Sign up this is"
      }
    });
  });

  //Logs in a user
  router.post(LOGIN_EP, (req, res) => {
    res.status(200).json({
      response: {
        data: "Log in this is"
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
