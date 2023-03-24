import { object, string, date } from "yup";

const passwordRules = /^(?=.{6,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W])/;

export const userSchema = object({
  email: string().email("Please enter email").required("required"),
  password: string().min(6).matches(passwordRules, {message: "Please create a stronger password"}).required("required"),
  createdOn: date().default(() => new Date()),
});