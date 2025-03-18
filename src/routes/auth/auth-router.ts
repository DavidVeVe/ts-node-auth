import { Router } from "express";
import USER_PATHS from "./constants.js";

const { ROOT, SIGNUP, LOGIN, LOGOUT } = USER_PATHS;

type User = {
  name: string;
  lastName: string;
};

const users: User[] = [{ name: "Carolina", lastName: "Uribe" }];

const authRouter = () => {
  const router = Router();

  //Retrieves all users
  router.get(ROOT, (req, res) => {
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
  router.post(SIGNUP, (req, res) => {
    res.status(200).json({
      response: {
        data: "Sign up this is"
      }
    });
  });

  //Logs in a user
  router.post(LOGIN, (req, res) => {
    res.status(200).json({
      response: {
        data: "Log in this is"
      }
    });
  });

  //Logs a user out
  router.post(LOGOUT, (req, res) => {
    res.status(200).json({
      response: {
        data: "Log out this is"
      }
    });
  });

  return router;
};

export default authRouter();
