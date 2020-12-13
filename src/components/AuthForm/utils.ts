import { ModelAuthForm } from "./AuthForm";

export const formRequestAnswer = (formData: ModelAuthForm) => {
  if (formData.email === "test@test.com" && formData.password === "1") {
    return true;
  }
  return false;
};

export const validateForm = (values: ModelAuthForm) => {
  const errors: ModelAuthForm = {};
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};
