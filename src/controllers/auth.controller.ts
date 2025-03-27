import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";
import { SignupInput, LoginInput } from "../schemas/auth.schema";

class AuthController {
  static async signup(req: Request<{}, {}, SignupInput>, res: Response) {
    try {
      const { email, password, firstname, lastname } = req.body;

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          status: "error",
          message: "Email alreay registered"
        });
      }

      const hashedPassword = await bcrypt.hash(
        password,
        Number(process.env.SALT_ROUNDS)
      );

      const user = await User.create({
        email,
        password: hashedPassword,
        firstname,
        lastname
      });

      const token = jwt.sign({ sub: user._id }, process.env.JWT_SECRET!, {
        expiresIn: process.env.JWT_EXPIRES_IN
      });

      res.status(201).json({
        status: "success",
        data: {
          token,
          user
        }
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: "Error creating user"
      });
    }
  }

  static async login(req: Request<{}, {}, LoginInput>, res: Response) {
    try {
      const user = req.user;
      const token = jwt.sign({ sub: user._id }, process.env.JWT_SECRET!, {
        expiresIn: process.env.JWT_EXPIRES_IN
      });

      res.status(201).json({
        status: "success",
        data: {
          token,
          user
        }
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: "Error logging in"
      });
    }
  }

  static async logout(req: Request, res: Response) {
    res.json({
      status: "success",
      message: "Logged out successfully"
    });
  }

  static async getProfile(req: Request, res: Response) {
    try {
      const user = await User.findById(req.user._id);
      res.json({
        status: "succcess",
        data: { user }
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: "Error fetching profile"
      });
    }
  }
}
