import { useState } from 'react';
import { ButtonLogin } from "../ui/button";
import Input from "./Input";
import InputPassword from "./InputPassword";

type Props = {
    className?: string
}

function Login({ className }: Props) {

    // verificar se o email é valido

    // cores de aviso
    const campoInvalido = "border-1 border-red-500";
    const campoValido = "border-1 border-green-500";
    const campoVazio = "border-1 border-white";

    // verificação de o email é valido
    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const [email, setEmail] = useState("");
    const emailClass = email === "" ? campoVazio : (validateEmail(email) ? campoValido : campoInvalido);

    return (
        <form action="" className={`${className} flex-col gap-4 || w-full`}>
            <Input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={emailClass} />
            <InputPassword placeholder="Password" />

            <ButtonLogin rotate="/newpassword " />
        </form>
    );
}

export default Login;