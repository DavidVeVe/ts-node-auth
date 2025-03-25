import express, { json } from "express";
import cors from "cors";
import authRouter from "./routes/auth/authRoutes";
import { AUTH_API } from "./shared/constants/authConstants";
import config from "../config";

const { AUTH_EP } = AUTH_API;
const { PORT } = config;

const app = express();

app.use(cors());
app.use(json());

// 1.Add routes CHECK
// 2.Add input validation and sanitization
// 3.Review and add cookies or sesion persistance
// 4.Token and refresh token
// 5.Two step verification
// 6.SSO or SAML
// 7.JWT
// 8.Session management
app.use(AUTH_EP, authRouter);

app.listen(PORT, () => {
  console.log("App running on port: " + PORT);
});
