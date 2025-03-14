import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface LinkDeskProps {
    to: string;
    title: string;
    children: ReactNode;
    className?: string;
}

const LinkDesk = ({ to, title, children, className }: LinkDeskProps) => {
    return (
        <Link to={to} title={title} className={`text-sm/6 font-bold text-[1rem] transition duration-500 hover:scale-105 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] hover:drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)]
         animate-duration-500 animate-ease-out animate-normal ${className}`}>
            {children}
        </Link >
    );
};

export default LinkDesk;