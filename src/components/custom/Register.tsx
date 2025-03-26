import { ButtonRegister } from "../ui/button";
import Input from "./Input";
import InputPassword from "./InputPassword";
import { useRegister } from "@/hook/useRegister";

type Props = {
    className?: string;
};

function Register({ className }: Props) {
    const {
        useremail,
        cpf,
        setUserEmail,
        setUsername,
        handleCpfChange,
        handleSubmit,
        setUserPassword,
        setConfirmPassword,
    } = useRegister();

    return (
        <form onSubmit={handleSubmit} className={`${className} flex-col gap-4 w-full`}>
            <Input
                type="name"
                id="name"
                placeholder="Name"
                onChange={(e) => setUsername(e.target.value)}
            />
            <Input
                type="text"
                id="cpf"
                placeholder="CPF"
                onChange={handleCpfChange}
                value={cpf}
            />
            <Input
                type="email"
                id="email"
                placeholder="Email"
                onChange={(e) => setUserEmail(e.target.value)}
                value={useremail}
            />
            <InputPassword
                placeholder="Password"
                onChange={(e) => setUserPassword(e.target.value)}
            />
            <InputPassword
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <ButtonRegister rotate="/newpassword" />
        </form>
    );
}

export default Register;