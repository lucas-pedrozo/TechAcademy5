import { useUserRegister } from "@/hook/userRegister";
import { ButtonRegister } from "../ui/Button";
import Input from "./Input";
import InputPassword from "./InputPassword";
import api from "@/service/api";
import axios from "axios";

const NewPassword = () => {
    const { register, errors, password, handleSubmit } = useUserRegister();

    const errorStyle = "text-red-500 text-sm pl-5";

    const handleRegister = async (data: { name: string; email: string; cpf: string; password: string; }) => {
        try {
            await api.put("/users", {
                name: data.name,
                password: data.password,
            });
            alert("Cadastro realizado com sucesso!");
            location.reload();
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error?.response?.data.error.map((e: { message: string }) => e.message).join(', ') || "Erro ao cadastrar";
                alert(errorMessage);
            }
        }
    };

    return (
        <form className={`flex flex-col gap-4 w-full `} onSubmit={handleSubmit(handleRegister)}>
            <section>
                <Input
                    type="text"
                    id="name"
                    placeholder="Name Não Obrig"
                    {...register("name", { required: "Nome é obrigatório" })}
                />
                {errors.name && <span className={errorStyle}>{errors.name.message}</span>}
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

            <ButtonRegister children="Register" />

        </form>
    );
}

export default NewPassword;