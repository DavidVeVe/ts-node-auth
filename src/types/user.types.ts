interface IUser {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: "user" | "admin";
  createdAt: Date;
  updatedAt: Date;
}

// interface IUserInput {
//   firstname?: string;
//   lastname?: string;
//   email: string;
//   password: string;
// }

// export { IUser, IUserInput };
export { IUser };
