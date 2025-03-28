import express, { json } from "express";
import cors from "cors";
import authRouter from "./routes/auth/auth.routes";
import { AUTH_API } from "./shared/constants/auth.constants";
import config from "../config";
import passport from "passport";
import { errorHandler } from "./middlewares/auth/errorHandler";
import { connectToDB } from "./config/db";

const { AUTH_EP } = AUTH_API;
const { PORT } = config;

const app = express();

app.use(cors());
app.use(json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

app.use(errorHandler);

// 1.Add routes CHECK
// 2.Add input validation and sanitization
// 3.Review and add cookies or sesion persistance
// 4.Token and refresh token
// 5.Two step verification
// 6.SSO or SAML
// 7.JWT
// 8.Session management
app.use(AUTH_EP, authRouter);
connectToDB();

app.listen(PORT, () => {
  console.log("App running on port: " + PORT);
});
