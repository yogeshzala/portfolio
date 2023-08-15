import { emailRegEx } from "./constant";

export const testEmail = (email) => {
  if (!email) {
    return "Email can't be empty !";
  } else if (!emailRegEx.test(email)) {
    return "Must be a valid email !";
  }
};
