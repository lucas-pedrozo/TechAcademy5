import { useState } from 'react';

type Props = {
    onClick?: () => void;
}

function ViewPassword({ onClick }: Props) {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible((prev) => !prev);
        if (onClick) onClick();
    };

    return (
        <button
            type="button"
            onClick={toggleVisibility}
            className="ml-2 focus:outline-none relative w-6 h-6"
        >

            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`absolute top-0 left-0 h-6 w-6 text-white transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.27-2.943-9.542-7a10.05 10.05 0 014.1-5.571M9.88 9.88a3 3 0 104.242 4.242M3 3l18 18"
                />
            </svg>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`absolute top-0 left-0 h-6 w-6 text-white transition-opacity duration-300 ${visible ? "opacity-0" : "opacity-100"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7S3.732 16.057 2.458 12z"
                />
            </svg>
        </button>
    );
}

export default ViewPassword;