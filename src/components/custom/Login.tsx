import { useState, FormEvent } from "react";
import { ButtonLogin } from "../ui/button";
import Input from "./Input";

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
            <Input type="Password" id="password" placeholder="Password" onChange={(e) => setUserPassword(e.target.value)} />

            <ButtonLogin rotate="/login" />
        </form>
    );
}

export default Login;