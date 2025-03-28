import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    type?: string;
    className?: string;
    id?: string;
    title?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { placeholder, type, className, id, title, ...rest } = props;
    const styleInput = "w-full bg-white/20 backdrop-blur-xl rounded-full border-1 border-white text-white py-2 px-5 placeholder:text-white placeholder:font-medium focus:outline-none";

    return (
        <input
            type={type}
            placeholder={placeholder}
            id={id}
            title={title}
            ref={ref}
            className={`${className} ${styleInput}`}
            {...rest}
            required
        />
    );
});

Input.displayName = "Input";
export default Input;