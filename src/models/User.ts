import { Schema, model, connect } from "mongoose";
import { IUser } from "../types/user.types";
import {
  INPUT_ERROR_MSG,
  EMAIL_REGEXP,
  PASSWORD_REGEXP,
} from "../shared/constants/authConstants";

const { name_lastname, email, password } = INPUT_ERROR_MSG;

const userSchema = new Schema<IUser>(
  {
    firstname: {
      type: String,
      required: [true, name_lastname.required],
      minlength: [3, name_lastname.minlength],
      maxlength: [20, name_lastname.maxlength],
    },
    lastname: {
      type: String,
      required: [true, name_lastname.required],
      minlength: [3, name_lastname.minlength],
      maxlength: [20, name_lastname.maxlength],
    },
    email: {
      type: String,
      required: [true, email.required],
      unique: [true, email.unique],
      trim: true,
      match: [EMAIL_REGEXP, email.invalid],
    },
    password: {
      type: String,
      required: [true, password.required],
      minlength: [8, password.minlength],
      maxlength: [1024, password.maxlength],
      match: [PASSWORD_REGEXP, password.invalid],
    },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { types: Date },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function(doc, ret) {
        delete ret.Password;
        return ret;
      },
    },
  }
);

const User = model<IUser>("User", userSchema);

export default User;
