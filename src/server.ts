import express, { json } from "express";
import cors from "cors";
import authRouter from "./routes/auth/auth-router";
import USER_PATHS from "./routes/auth/constants";
import config from "../config";

const { USER_API } = USER_PATHS;
const { PORT } = config;

const app = express();

app.use(cors());
app.use(json());

// 1.Add routes
// 2.Add input validation and sanitization
// 3.Review and add cookies or sesion persistance
// 4.Token and refresh token
// 5.Two step verification
// 6.SSO or SAML
// 7.JWT
// 8.Session management
app.use(USER_API, authRouter);

app.listen(PORT, () => {
  console.log("App running on port: " + PORT);
});
