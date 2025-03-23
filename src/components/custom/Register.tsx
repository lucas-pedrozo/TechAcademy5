import { ButtonLogin } from "../ui/button";
import Input from "./Input";
import InputPassword from "./InputPassword";
import { useState, FormEvent } from "react";

type Props = {
    className?: string;
}

function Register({ className }: Props) {
    const [username, setUserEmail] = useState("");
    const [password, setUserPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [cpf, setUsercpf] = useState("");
    const [name, setUsername] = useState("");

    // CPF validation function
    const validateCPF = (cpf: string): boolean => {

        cpf = cpf.replace(/\D/g, "");

        if (cpf.length !== 11) return false;
        if (/^(.)\1+$/.test(cpf)) return false;

        const digits = cpf.split("").map(Number);

        let sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += digits[i] * (10 - i);
        }
        let rev = 11 - (sum % 11);
        if (rev >= 10) rev = 0;
        if (rev !== digits[9]) return false;

        sum = 0;
        for (let i = 0; i < 10; i++) {
            sum += digits[i] * (11 - i);
        }
        rev = 11 - (sum % 11);
        if (rev >= 10) rev = 0;
        if (rev !== digits[10]) return false;

        return true;
    };

    // Email validation function using a simple regex
    const validateEmail = (email: string): boolean => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("As senhas não coincidem.");
            return;
        }
        if (!validateEmail(username)) {
            alert("Email inválido.");
            return;
        }
        if (!validateCPF(cpf)) {
            alert("CPF inválido.");
            return;
        }
        alert(username + " - " + password + " - " + cpf + " - " + name);
    };

    return (
        <form onSubmit={handleSubmit} className={`${className} flex-col gap-4 || w-full`}>
            <Input type="name" id="name" placeholder="Name" onChange={(e) => setUsername(e.target.value)} />
            <Input type="texte" id="cpf" placeholder="CPF" onChange={(e) => setUsercpf(e.target.value)} />
            <Input type="email" id="email" placeholder="Email" onChange={(e) => setUserEmail(e.target.value)} />
            <InputPassword placeholder="Password" onChange={(e) => setUserPassword(e.target.value)} />
            <InputPassword placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
            <ButtonLogin />
        </form>
    );
}

export default Register;