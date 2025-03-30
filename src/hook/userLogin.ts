import { useForm, SubmitHandler } from "react-hook-form";

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

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    alert(`Email: ${data.email}\nPassword: ${data.password}`);
  };

  return {
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
  };
}
