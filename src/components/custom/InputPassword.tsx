import { useState, forwardRef } from "react";
import ViewPassword from "./ViewPassword";

interface InputProps {
    placeholder?: string;
    type?: string;
    className?: string;
    id?: string;
    title?: string;
    value?: string;
}

const InputPassword = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { placeholder, className, id, title, value, ...rest } = props;
    const [visible, setVisible] = useState(false);
    const styleInput = "text-white placeholder:text-white placeholder:font-medium focus:outline-none";

    const toggleVisibility = () => {
        setVisible((prev) => !prev);
    };

    return (
        <div>
            <div className={`${className ?? ""} bg-white/20 backdrop-blur-xl rounded-full border-1 border-white py-2 px-5 flex items-center`}>
                <input
                    type={visible ? "text" : "password"}
                    id={id}
                    title={title}
                    value={value}
                    placeholder={placeholder}
                    className={`${styleInput} flex-1`}
                    ref={ref}
                    {...rest}
                />
                <ViewPassword onClick={toggleVisibility} />
            </div>
        </div>
    );
});

InputPassword.displayName = "InputPassword";
export default InputPassword;