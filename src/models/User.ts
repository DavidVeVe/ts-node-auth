import { Schema, model, connect } from "mongoose";

interface IUser {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

const emailRegex: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex: RegExp = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\];:'",./?])(?=.*\s)[^\s].*[^\s]$/;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter a valid name."],
    minlength: 3,
    maxlength: 20
  },
  lastName: {
    type: String,
    required: [true, "Plese enter a valid last name."],
    minlength: 3,
    maxlength: 20
  },
  dateAdded: { type: Date, default: Date.now },
  email: {
    type: String,
    required: [true, "Please enter a valid email address."],
    unique: true,
    trim: true,
    match: emailRegex
  },
  password: {
    type: String,
    required: [true, "Please enter a valid password."],
    minlength: 8,
    maxlength: 1024,
    match: passwordRegex
  }
});

const User = model<IUser>("User", userSchema);

export default User;
