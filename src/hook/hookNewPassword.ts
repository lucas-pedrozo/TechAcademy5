import api from "@/service/api";
import axios from "axios";
import { useForm } from "react-hook-form";

import {
  validatePassword,
  validateConfirmPassword,
} from "@/utils/UserValidation";
import { useNavigate } from "react-router-dom";

interface FormValues {
  password: string;
  confirmPassword: string;
}

export function useHookNewPassword() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onSubmit" });

  const password = watch("password");
  const nevagate = useNavigate();

  const handleNewPassword = async (data: { password: string }) => {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        alert("Usuário não encontrado.");
        return;
      }

      await api.put(`/users/${userId}`, {
        password: data.password,
      });
      alert("Cadastro realizado com sucesso!");
      nevagate("/login");
      location.reload();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error?.response?.data?.error
          ? error.response.data.error
              .map((e: { message: string }) => e.message)
              .join(", ")
          : "Erro ao cadastrar";
        alert(errorMessage);
      }
    }
  };

  return {
    register: {
      password: register("password", {
        required: "Password is mandatory",
        validate: validatePassword,
      }),
      confirmPassword: register("confirmPassword", {
        required: "Confirm password is mandatory",
        validate: (value) => validateConfirmPassword(value, password),
      }),
    },
    handleSubmit,
    handleNewPassword,
    watch,
    errors,
    password,
  };
}
