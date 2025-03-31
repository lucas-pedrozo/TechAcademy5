import { useUserRegister } from "@/hook/userRegister";
import { ButtonRegister } from "../ui/Button";
import Input from "./Input";
import InputPassword from "./InputPassword";
import api from "@/service/api";
import axios from "axios";

type Props = {
    className?: string;
};

function Register({ className = "" }: Props) {
    const { register, errors, password, validateCPF, handleSubmit } = useUserRegister();

    const errorStyle = "text-red-500 text-sm pl-5";

    const handleRegister = async (data: { name: string; email: string; cpf: string; password: string; }) => {
        try {
            await api.post("/users", {
                name: data.name,
                cpf: data.cpf,
                email: data.email,
                password: data.password,
            });
            location.reload();
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error?.response?.data.error.map((e: { message: string }) => e.message).join(', ') || "Erro ao cadastrar";
                alert(errorMessage);
            }
        }
    };

    return (
        <form className={`${className} flex-col gap-4 w-full `} onSubmit={handleSubmit(handleRegister)}>
            <section>
                <Input
                    type="text"
                    id="name"
                    placeholder="Name"
                    {...register("name", { required: "Nome é obrigatório" })}
                />
                {errors.name && <span className={errorStyle}>{errors.name.message}</span>}
            </section>

            <section>
                <Input
                    type="text"
                    id="cpf"
                    placeholder="CPF"
                    maxLength={11}
                    {...register("cpf", {
                        required: "CPF é obrigatório",
                        pattern: { value: /^\d+$/, message: "Apenas números são permitidos" },
                        validate: validateCPF
                    })}
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                        const allowedKeys = ["Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight"];
                        if (allowedKeys.includes(e.key)) return;
                        if (!/^\d$/.test(e.key)) {
                            e.preventDefault();
                        }
                    }}
                />
                {errors.cpf && <span className={errorStyle}>{errors.cpf.message}</span>}
            </section>

            <section>
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

            <section>
                <InputPassword
                    placeholder="Confirm Password"
                    {...register("confirmPassword", {
                        required: "Confirmação de senha é obrigatória",
                        validate: (value) => value === password || "As senhas não coincidem"
                    })}
                />
                {errors.confirmPassword && <span className={errorStyle}>{errors.confirmPassword.message}</span>}
            </section>

            <ButtonRegister />

        </form>
    );
}

export default Register;