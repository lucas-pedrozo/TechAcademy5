
interface InputProps {
    placeholder?: string;
    type?: string;
    className?: string;
    id?: string;
    title?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

function Input({ placeholder, type, className, id, title, onChange }: InputProps) {

    const styleInput = 'bg-white/20 backdrop-blur-xl || border-1 border-white rounded-full || text-white || py-2 px-5 || placeholder:text-white placeholder:font-medium focus:outline-none';

    return (
        <input type={type} placeholder={placeholder} id={id} title={title} className={`${className} ${styleInput}`} onChange={onChange} required />
    );
}



export default Input;