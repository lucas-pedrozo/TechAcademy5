import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "@/service/api";

import { validateEmail, validatePasswordLogin } from "@/utils/UserValidation";

interface FormValues {
  email: string;
  password: string;
}

function useHookLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onSubmit" });

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (data: FormValues) => {
    try {
      const response = await api.post("/login", {
        email: data.email,
        password: data.password,
      });

      const { token } = response.data;
      login(token);
      alert("Login done with success!");
      navigate("/home");
      window.location.reload();
    } catch (error) {
      alert("Error email or password.");
      console.log(error);
    }
  };

  return {
    register: {
      email: register("email", {
        required: "Email is mandatory",
        validate: validateEmail,
      }),
      password: register("password", {
        required: "Password is mandatory",
        validate: validatePasswordLogin,
      }),
    },
    handleSubmit,
    handleLogin,
    errors,
  };
}

export default useHookLogin;
