const AUTH_API = {
  VERSION: "/v1",
  ROOT: "/",
  AUTH_EP: "/auth", //EP stands for endpoint
  SIGNUP_EP: "/signup",
  LOGIN_EP: "/login",
  LOGOUT_EP: "/logout"
};

const INPUT_ERROR_MSG = {
  name_lastname: {
    required: "Name filed is required.",
    minlength: "Name should have at least 3 characters.",
    maxlength: "Name should have maximun 20 characters."
  },
  email: {
    required: "Email field is required.",
    unique: "This email address is already registered.",
    match: "Please enter a valid email address."
  },
  password: {
    required: "Password field is required.",
    minlength: "Password should have at least 8 characters.",
    maxlength: "Password should have maximun 1024 characters.",
    match:
      "Password should have at least one of the following: number, uppercase letter, white space, special character."
  }
};

export { AUTH_API, INPUT_ERROR_MSG };
