import { useUserLogin } from "@/hook/userLogin";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import InputPassword from "./InputPassword";
import { ButtonLogin } from "../ui/Button";
import api from "@/service/api";
import Input from "./Input";

type Props = {
    className?: string;
};

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

            const { token } = response.data;
            login(token);
            navigate("/home");
            location.reload();
        } catch (error) {
            console.log(error);
            alert('Error, Email or Password incorrect.');
        }
    };

    // ==============================================================================================================

    return (
        <form onSubmit={handleSubmit(handleLogin)} className={`${className} flex-col gap-4 w-full`}>
            <section className="flex flex-col gap-1">
                <Input
                    type="email"
                    id="email"
                    placeholder="Email"
                    {...register("email", {
                        required: "Email is mandatory",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+$/,
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
                        required: "Password is mandatory",
                        minLength: { value: 8, message: "Password must be at least 8 characters long" }
                    })}
                />
                {errors.password && <span className={errorStyle}>{errors.password.message}</span>}
            </section>

            <ButtonLogin />
        </form>
    );
}

export default Login;