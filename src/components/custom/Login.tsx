import { useState, FormEvent } from "react";
import { ButtonLogin } from "../ui/button";
import Input from "./Input";
import InputPassword from "./InputPassword";

type Props = {
    className?: string
}

function Login({ className }: Props) {

    const [username, setUserEmail] = useState("");
    const [password, setUserPassword] = useState("");


    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();
        alert(username + " - " + password);
    };

    return (
        <form onSubmit={handleSubmit} className={`${className} flex-col gap-4 || w-full`}>

            <Input type="email" id="email" placeholder="Email" onChange={(e) => setUserEmail(e.target.value)} />
            <InputPassword placeholder="Password" onChange={(e) => setUserPassword(e.target.value)} />

            <ButtonLogin rotate="/newpassword " />
        </form>
    );
}

export default Login;