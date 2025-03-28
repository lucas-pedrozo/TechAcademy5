import { useUserRegister } from "@/hook/userRegister";
import { ButtonRegister } from "../ui/button";
import Input from "./Input";
import InputPassword from "./InputPassword";

type Props = {
    className?: string;
};

function Register({ className }: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        password,
        validateCPF,
        onSubmit
    } = useUserRegister();

    const SyError = "text-red-500 text-sm pl-5";

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={`${className} flex-col gap-4 w-full `}
        >
            <label>
                <Input
                    type="name"
                    id="name"
                    placeholder="Name"
                    {...register("name", { required: "Nome é obrigatório" })}
                />
                {errors.name && <span className={SyError}>{errors.name.message}</span>}
            </label>

            <label>
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
                {errors.cpf && <span className={SyError}>{errors.cpf.message}</span>}
            </label>

            <label>
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
                {errors.email && <span className={SyError}>{errors.email.message}</span>}
            </label>

            <label>
                <InputPassword
                    placeholder="Password"
                    {...register("password", {
                        required: "Senha é obrigatória",
                        minLength: { value: 8, message: "A senha deve ter pelo menos 8 caracteres" }
                    })}
                />
                {errors.password && <span className={SyError}>{errors.password.message}</span>}
            </label>

            <label>
                <InputPassword
                    placeholder="Confirm Password"
                    {...register("confirmPassword", {
                        required: "Confirmação de senha é obrigatória",
                        validate: (value) => value === password || "As senhas não coincidem"
                    })}
                />
                {errors.confirmPassword && <span className={SyError}>{errors.confirmPassword.message}</span>}
            </label>

            <ButtonRegister />

        </form>
    );
}

export default Register;