import { useUserLogin } from "@/hook/userLogin";
import { ButtonLogin } from "../ui/Button";
import Input from "./Input";
import InputPassword from "./InputPassword";

type Props = {
    className?: string;
};

function Login({ className }: Props) {

    const {
        register,
        handleSubmit,
        formState: { errors },
        onSubmit,
    } = useUserLogin();

    const SyError = "text-red-500 text-sm pl-5";

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={`${className} flex-col gap-4 w-full`}>

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
                {errors.email && <span className={SyError}>{errors.email.message}</span>}
            </section>

            <section>
                <InputPassword
                    placeholder="Password"
                    {...register("password", {
                        required: "Senha é obrigatória",
                        minLength: { value: 8, message: "A senha deve ter pelo menos 8 caracteres" }
                    })}
                />
                {errors.password && <span className={SyError}>{errors.password.message}</span>}
            </section>

            <ButtonLogin />
        </form>
    );
}

export default Login;