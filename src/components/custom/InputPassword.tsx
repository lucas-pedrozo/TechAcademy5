import React, { useState } from "react";
import ViewPassword from "./ViewPassword";

interface InputProps {
    placeholder?: string;
    type?: string;
    className?: string;
    id?: string;
    title?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

function InputPassword({ placeholder, className, onChange }: InputProps) {
    const [visible, setVisible] = useState(false);
    const styleInput =
        "text-white placeholder:text-white placeholder:font-medium focus:outline-none";

    const toggleVisibility = () => {
        setVisible((prev) => !prev);
    };

    return (
        <div className="bg-white/20 backdrop-blur-xl border border-white rounded-full py-2 px-5 flex items-center">
            <input
                type={visible ? "text" : "password"}
                placeholder={placeholder}
                id="password"
                title="password"
                className={`${className ? className : ""} ${styleInput} flex-1`}
                onChange={onChange}
            />
            <ViewPassword onClick={toggleVisibility} />
        </div>
    );
}

export default InputPassword;