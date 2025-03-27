const AUTH_API = {
  VERSION: "/v1",
  ROOT: "/",
  AUTH_EP: "/auth", //EP stands for endpoint
  SIGNUP_EP: "/signup",
  LOGIN_EP: "/login",
  LOGOUT_EP: "/logout",
};

const INPUT_ERROR_MSG = {
  name_lastname: {
    required: "Name and last name fileds are required.",
    minlength: "Name and last name should have at least 2 characters.",
    maxlength: "Name and last nameshould have maximun 20 characters.",
  },
  email: {
    required: "Email field is required.",
    unique: "This email address is already registered.",
    invalid: "Please enter a valid email address.",
  },
  password: {
    required: "Password field is required.",
    minlength: "Password should have at least 8 characters.",
    maxlength: "Password should have maximun 1024 characters.",
    invalid:
      "Password should have at least one of the following: number, uppercase letter, white space, special character.",
  },
  validation: "Input validation errors.",
};

const EMAIL_REGEXP: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEXP: RegExp = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\];:'",./?])(?=.*\s)[^\s].*[^\s]$/;

export { AUTH_API, INPUT_ERROR_MSG, EMAIL_REGEXP, PASSWORD_REGEXP };
