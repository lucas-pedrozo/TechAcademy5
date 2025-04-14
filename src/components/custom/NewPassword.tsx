import { useHookNewPassword } from "@/hook/hookNewPassword";
import InputPassword from "./InputPassword";
import GlobalButton from "./buttons/GlobalButton";

const NewPassword = () => {
    const { register, errors, handleSubmit, handleNewPassword } = useHookNewPassword();
    const errorStyle = "text-red-500 text-sm pl-5";


    return (
        <form className={`flex flex-col gap-4 w-full `} onSubmit={handleSubmit(handleNewPassword)}>
            <section className="flex flex-col gap-1">
                <InputPassword placeholder="Password" {...register.password} />
                {errors.password && <span className={errorStyle}>{errors.password.message}</span>}
            </section>

            <section className="flex flex-col gap-1">
                <InputPassword placeholder="Confirm Password" {...register.confirmPassword} />
                {errors.confirmPassword && <span className={errorStyle}>{errors.confirmPassword.message}</span>}
            </section>
            <GlobalButton children={"New Pass"} buttonPosition="justify-end" />
        </form>
    );
}

export default NewPassword;