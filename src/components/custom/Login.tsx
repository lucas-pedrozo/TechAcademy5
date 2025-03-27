import { useForm, SubmitHandler } from "react-hook-form";
import { ButtonLogin } from "../ui/button";
import Input from "./Input";
import InputPassword from "./InputPassword";

type FormValues = {
    email: string;
    password: string;
};

type Props = {
    className?: string;
};

function Login({ className }: Props) {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        mode: "onBlur"
    });


    const onSubmit: SubmitHandler<FormValues> = (data) => {
        alert(`Email: ${data.email}\nPassword: ${data.password}`);

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={`${className} flex-col gap-4 w-full`}>

            <label htmlFor="email" className="flex flex-col gap-1">
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
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </label>

            <label htmlFor="password" className="flex flex-col gap-1">
                <InputPassword
                    placeholder="Password"
                    {...register("password", {
                        required: "Senha é obrigatória",
                        minLength: { value: 8, message: "Senha Incorreta" }
                    })}
                />
                {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
            </label>

            <ButtonLogin />
        </form>
    );
}

export default Login;