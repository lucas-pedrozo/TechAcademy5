import { useState, FormEvent } from "react";

export function useRegister() {
  const [useremail, setUserEmail] = useState("");
  const [password, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cpf, setUsercpf] = useState("");
  const [name, setUsername] = useState("");

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateCPF = (cpf: string): boolean => {
    const cleaned = cpf.replace(/\D/g, "");
    if (cleaned.length !== 11) return false;
    if (/^(.)\1+$/.test(cleaned)) return false;
    const digits = cleaned.split("").map(Number);
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

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let digits = e.target.value.replace(/\D/g, "");
    if (digits.length > 11) digits = digits.slice(0, 11);
    if (digits.length > 9)
      digits = digits.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
    else if (digits.length > 6)
      digits = digits.replace(/(\d{3})(\d{3})(\d+)/, "$1.$2.$3");
    else if (digits.length > 3)
      digits = digits.replace(/(\d{3})(\d+)/, "$1.$2");
    setUsercpf(digits);
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }
    if (password.length < 8) {
      alert("A senha deve ter pelo menos 8 dígitos.");
      return;
    }
    if (!validateEmail(useremail)) {
      alert("Email inválido.");
      return;
    }
    if (!validateCPF(cpf)) {
      alert("CPF inválido.");
      return;
    }

    const cpfClean = cpf.replace(/[.\-]/g, "");
    alert(useremail + " - " + password + " - " + cpfClean + " - " + name);
    window.location.href = "/login";
  };

  return {
    useremail,
    password,
    confirmPassword,
    cpf,
    name,
    setUserEmail,
    setUserPassword,
    setConfirmPassword,
    setUsercpf,
    setUsername,
    handleCpfChange,
    handleSubmit,
  };
}
