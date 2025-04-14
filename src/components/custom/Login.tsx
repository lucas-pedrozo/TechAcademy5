import GlobalButton from "./buttons/GlobalButton";
import useHookLogin from "@/hook/hookLogin";
import InputPassword from "./InputPassword";
import Input from "./Input";

type Props = {
    className?: string;
};

function Login({ className = "" }: Props) {

    const { register, handleSubmit, errors, handleLogin } = useHookLogin();
    const errorStyle = "text-red-500 text-sm pl-5";

    return (
        <form onSubmit={handleSubmit(handleLogin)} className={`${className} flex-col gap-4 w-full`}>

            <section className="flex flex-col gap-1">
                <Input type="email" id="email" placeholder="Email" {...register.email} />
                {errors.email && <span className={errorStyle}>{errors.email.message}</span>}
            </section>

            <section className="flex flex-col gap-1">
                <InputPassword placeholder="Password" {...register.password} />
                {errors.password && <span className={errorStyle}>{errors.password.message}</span>}
            </section>

            <GlobalButton children={"Login"} buttonPosition="justify-end" />
        </form>
    );
}

export default Login;