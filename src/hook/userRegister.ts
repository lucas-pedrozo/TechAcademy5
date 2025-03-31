import { useForm } from "react-hook-form";
import { cpf as cpfValidator } from "cpf-cnpj-validator";

interface FormValues {
  name: string;
  cpf: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function useUserRegister() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onSubmit" });

  const password = watch("password");

  const validateCPF = (cpf: string) => {
    const cleanedCPF = cpf.replace(/\D/g, "");

    if (!/^[0-9]+$/.test(cleanedCPF)) return "Apenas números são permitidos";
    if (cleanedCPF.length !== 11) return "CPF deve ter 11 dígitos";
    if (!cpfValidator.isValid(cleanedCPF)) return "CPF inválido";

    return true;
  };

  return {
    register,
    handleSubmit,
    watch,
    errors,
    password,
    validateCPF,
  };
}
