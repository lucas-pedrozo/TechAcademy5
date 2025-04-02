import { useForm } from "react-hook-form";

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


  return {
    register,
    handleSubmit,
    watch,
    errors,
    password,
  };
}
