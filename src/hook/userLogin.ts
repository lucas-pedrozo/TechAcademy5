import { useForm } from "react-hook-form";

interface FormValues {
  email: string;
  password: string;
}

export function useUserLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onSubmit" });

  return {
    register,
    handleSubmit,
    errors,
  };
}
