
interface InputProps {
    placeholder?: string;
    type?: string;
    className?: string;
    id?: string;
    title?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string
}

function Input({ placeholder, type, className, id, title, onChange, value }: InputProps) {

    const styleInput = 'bg-white/20 backdrop-blur-xl || rounded-full border-1 border-whitep || text-white || py-2 px-5 || placeholder:text-white placeholder:font-medium focus:outline-none';

    return (
        <input type={type} placeholder={placeholder} id={id} title={title} className={`${className} ${styleInput}`} onChange={onChange} value={value} required />
    );
}



export default Input;