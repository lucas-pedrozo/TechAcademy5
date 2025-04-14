import useHookRegister from "@/hook/hookRegister";

import Input from "./Input";
import InputPassword from "./InputPassword";
import GlobalButton from "./buttons/GlobalButton";

type Props = {
    className?: string;
};

const Register = ({ className = "" }: Props) => {

    const { register, errors, handleSubmit, handleRegister } = useHookRegister();
    const errorStyle = "text-red-500 text-sm pl-5";

    return (
        <form className={`${className} flex-col gap-4 w-full `} onSubmit={handleSubmit(handleRegister)}>
            <section className="flex flex-col gap-1">
                <Input type="text" id="name" placeholder="Name" {...register.name} />
                {errors.name && <span className={errorStyle}>{errors.name.message}</span>}
            </section>

            <section className="flex flex-col gap-1">
                <Input type="text" id="cpf" placeholder="CPF" {...register.cpf} />
                {errors.cpf && <span className={errorStyle}>{errors.cpf.message}</span>}
            </section>

            <section className="flex flex-col gap-1">
                <Input type="email" id="email" placeholder="Email" {...register.email} />
                {errors.email && <span className={errorStyle}>{errors.email.message}</span>}
            </section>

            <section className="flex flex-col gap-1">
                <InputPassword placeholder="Password" {...register.password} />
                {errors.password && <span className={errorStyle}>{errors.password.message}</span>}
            </section>

            <section className="flex flex-col gap-1">
                <InputPassword placeholder="Confirm Password" {...register.confirmPassword} />
                {errors.confirmPassword && <span className={errorStyle}>{errors.confirmPassword.message}</span>}
            </section>

            <GlobalButton children={"Register"} buttonPosition="justify-end" />
        </form>
    );
}

export default Register;