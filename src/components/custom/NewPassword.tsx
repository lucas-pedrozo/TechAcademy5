import { useUserRegister } from "@/hook/userRegister";
import { ButtonRegister } from "../ui/Button";
import InputPassword from "./InputPassword";
import api from "@/service/api";
import axios from "axios";

const NewPassword = () => {
    const { register, errors, password, handleSubmit } = useUserRegister();
    const errorStyle = "text-red-500 text-sm pl-5";

    const handleRegister = async (data: { password: string; }) => {
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
            location.reload();
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error?.response?.data?.error
                    ? error.response.data.error.map((e: { message: string }) => e.message).join(', ')
                    : "Erro ao cadastrar";
                alert(errorMessage);
            }
        }
    };

    return (
        <form className={`flex flex-col gap-4 w-full `} onSubmit={handleSubmit(handleRegister)}>
            <section>
                <InputPassword
                    placeholder="Password"
                    {...register("password", {
                        required: "Senha é obrigatória",
                        minLength: { value: 8, message: "A senha deve ter pelo menos 8 caracteres" },
                        pattern: {
                            value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&/])[A-Za-z\d@$!%*?&/]{8,}$/,
                            message: "A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial (@$!%*?&/)"
                        }
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

            <ButtonRegister children="Register" />
        </form>
    );
}

export default NewPassword;