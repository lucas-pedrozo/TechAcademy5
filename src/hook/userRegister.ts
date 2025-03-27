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
  } = useForm<FormValues>({
    mode: "onChange",
  });
  const password = watch("password");

  const validateCPF = (value: string) => {
    const stripped = value.replace(/[.\-]/g, "");
    return cpfValidator.isValid(stripped) || "CPF inválido";
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const cpfStripped = data.cpf.replace(/[.\-]/g, "");

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
