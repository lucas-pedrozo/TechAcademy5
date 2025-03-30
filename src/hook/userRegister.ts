import { useForm, SubmitHandler } from "react-hook-form";
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

  const validateCPF = (value: string) => {
    const stripped = value.replace(/\D/g, "");
    if (!/^\d+$/.test(stripped)) {
      return "Apenas números são permitidos";
    }
    if (stripped.length !== 11) {
      return "CPF deve ter 11 dígitos";
    }
    return cpfValidator.isValid(stripped) || "CPF inválido";
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const cpfStripped = data.cpf.replace(/\D/g, "");
    alert(
      `Name: ${data.name}\nCPF: ${cpfStripped}\nEmail: ${data.email}\nPassword: ${data.password}`
    );
  };

  return {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    password,
    validateCPF,
    onSubmit,
  };
}
