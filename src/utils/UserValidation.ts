import { cpf as cpfValidator } from "cpf-cnpj-validator";

export const validateName = (name: string) => {
  return name.trim().length > 0 ? true : "Name is mandatory";
};

export const validateCPF = (cpf: string) => {
  const cleanedCPF = cpf.replace(/\D/g, "");

  if (!/^[0-9]+$/.test(cleanedCPF)) return "Only numbers are allowed";
  if (cleanedCPF.length !== 11) return "CPF must have 11 digits";
  if (!cpfValidator.isValid(cleanedCPF)) return "Invalid CPF";

  return true;
};

export const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? true : "Email is Invalid ";
};

export const validatePassword = (password: string) => {
  if (!password) return "Password is mandatory";
  if (password.length < 8) return "Password must be at least 8 characters long";
  if (!/(?=.*[A-Z])/.test(password))
    return "Password must contain at least one uppercase letter";
  if (!/(?=.*\d)/.test(password))
    return "Password must contain at least one number";
  if (!/(?=.*[@$!%*?&/])/.test(password))
    return "Password must contain at least one special character";

  return true;
};

export const validateConfirmPassword = (
  confirmPassword: string,
  password: string
) => {
  return confirmPassword === password ? true : "Passwords do not match";
};

export const validatePasswordLogin = (password: string) => {
  return password.trim().length > 0 ? true : "Password is mandatory";
};
