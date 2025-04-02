import { useUserLogin } from "@/hook/userLogin";
import { ButtonLogin } from "../ui/Button";
import Input from "./Input";
import InputPassword from "./InputPassword";

import api from "@/service/api";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";


type Props = {
    className?: string;
};

interface LoginResponse {
    token: string;
}

function Login({ className = "" }: Props) {
    const { register, handleSubmit, errors } = useUserLogin();
    const errorStyle = "text-red-500 text-sm pl-5";
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (data: { email: string; password: string }) => {
        try {
            const response = await api.post("/login", {
                email: data.email,
                password: data.password,
            });
            const token = response.data as LoginResponse;
            login(token.token);
            console.log(token);
            navigate("/home");
            location.reload();
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error?.response?.data || "email ou senha incorretos";
                alert(errorMessage);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(handleLogin)} className={`${className} flex-col gap-4 w-full`}>
            <section className="flex flex-col gap-1">
                <Input
                    type="email"
                    id="email"
                    placeholder="Email"
                    {...register("email", {
                        required: "Email é obrigatório",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Email inválido"
                        }
                    })}
                />
                {errors.email && <span className={errorStyle}>{errors.email.message}</span>}
            </section>

            <section>
                <InputPassword
                    placeholder="Password"
                    {...register("password", {
                        required: "Senha é obrigatória",
                        minLength: { value: 8, message: "A senha deve ter pelo menos 8 caracteres" }
                    })}
                />
                {errors.password && <span className={errorStyle}>{errors.password.message}</span>}
            </section>

            <ButtonLogin />
        </form>
    );
}

export default Login;
