import * as yup from "yup";

const passwordRules = /^(?=.{6,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W])/;

export const userSchema = yup.object().shape({
  email: yup.string().email("Please enter email").required("Email is required"),
  password: yup.string().min(6).matches(passwordRules, {message: "Please create a stronger password"}).required("Password is required"),
  
});
export const passwordResetSchema = yup.object().shape({
  email: yup.string().email("Please enter email").required("Email is required"),
  
});