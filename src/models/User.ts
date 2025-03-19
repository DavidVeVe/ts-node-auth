import { Schema, model, connect } from "mongoose";
import { User } from "../types/auth";
import { INPUT_ERROR_MSG } from "../routes/auth/constants";

const { name_lastname, email, password } = INPUT_ERROR_MSG;

const emailRegex: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex: RegExp = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\];:'",./?])(?=.*\s)[^\s].*[^\s]$/;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, name_lastname.required],
    minlength: [3, name_lastname.minlength],
    maxlength: [20, name_lastname.maxlength]
  },
  lastName: {
    type: String,
    required: [true, name_lastname.required],
    minlength: [3, name_lastname.minlength],
    maxlength: [20, name_lastname.maxlength]
  },
  dateAdded: { type: Date, default: Date.now },
  email: {
    type: String,
    required: [true, email.required],
    unique: [true, email.unique],
    trim: true,
    match: [emailRegex, email.match]
  },
  password: {
    type: String,
    required: [true, password.required],
    minlength: [8, password.minlength],
    maxlength: [1024, password.maxlength],
    match: [passwordRegex, password.match]
  }
});

const User = model<User>("User", userSchema);

export default User;
