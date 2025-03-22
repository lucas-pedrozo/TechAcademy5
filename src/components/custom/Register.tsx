import { ButtonLogin } from "../ui/button";
import Input from "./Input";

type Props = {
    className?: string
}

function Register({ className }: Props) {

    return (
        <form action="" className={` ${className} flex-col gap-4 || w-full`}>

            <Input type="name" id="name" placeholder="Name" />
            <Input type="texte" id="cpf" placeholder="CPF" />
            <Input type="email" id="email" placeholder="Email" />
            <Input type="Password" id="password" placeholder="Password" />

            <ButtonLogin />
        </form>
    );
}

export default Register;