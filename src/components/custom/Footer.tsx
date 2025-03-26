import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className=" bg-[rgba(255,255,255,0.1)] backdrop-blur-xl border-t-[1px] border-white p-10 rounded-t-[40px] shadow-[0px_-2px_10px_rgba(0,0,0,0.6)] ">
            <h2 className="text-center font-bold text-2xl">HARMONIC SOUND</h2>
            <div className="flex justify-center min-[500px]:justify-between flex-col min-[500px]:flex-row gap-[20px]   p-6 ">
                <div className="flex flex-col gap-[0.9375em] text-center min-[500px]:text-start ">
                    <h6 className="underline font-bold text-[1.3rem]">Altencation</h6>
                    <Link
                        to="/login"
                        className="text-[1rem] font-medium drop-shadow-[0px_2px_10px_rgba(0,0,0,0.6)] transition hover:scale-105 hover:drop-shadow-[0px_2px_10px_rgba(255,255,255,1)] duration-500"
                    >
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="text-[1rem] font-medium drop-shadow-[0px_2px_10px_rgba(0,0,0,0.6)] transition hover:scale-105 hover:drop-shadow-[0px_2px_10px_rgba(255,255,255,1)] duration-500"
                    >
                        Register
                    </Link>
                    <Link
                        to="/forgotMyPassoword"
                        className="text-[1rem] font-medium drop-shadow-[0px_2px_10px_rgba(0,0,0,0.6)] transition hover:scale-105 hover:drop-shadow-[0px_2px_10px_rgba(255,255,255,1)] duration-500"
                    >
                        forgot my password
                    </Link>
                    <Link
                        to="/contact"
                        className="text-[1rem] font-medium drop-shadow-[0px_2px_10px_rgba(0,0,0,0.6)] transition hover:scale-105 hover:drop-shadow-[0px_2px_10px_rgba(255,255,255,1)] duration-500"
                    >
                        Contact
                    </Link>
                </div>
                <div className="flex flex-col gap-[0.9375em] text-center min-[500px]:text-end ">
                    <h6 className="underline font-bold text-[1.3rem]">User Policies</h6>
                    <Link
                        to="/"
                        className="text-[1rem] font-medium drop-shadow-[0px_2px_10px_rgba(0,0,0,0.6)] transition hover:scale-105 hover:drop-shadow-[0px_2px_10px_rgba(255,255,255,1)] duration-500"
                    >
                        User Terms
                    </Link>
                    <Link
                        to="/about"
                        className="text-[1rem] font-medium drop-shadow-[0px_2px_10px_rgba(0,0,0,0.6)] transition hover:scale-105 hover:drop-shadow-[0px_2px_10px_rgba(255,255,255,1)] duration-500"
                    >
                        About
                    </Link>
                    <Link
                        to="/admin"
                        className="text-[1rem] font-medium drop-shadow-[0px_2px_10px_rgba(0,0,0,0.6)] transition hover:scale-105 hover:drop-shadow-[0px_2px_10px_rgba(255,255,255,1)] duration-500"
                    >
                        Admin
                    </Link>
                </div>
            </div>
            <hr className="opacity-50" />
            <p className="font-normal text-white text-[0.9rem]  opacity-80  pt-[0.95em] px-6">
                © 2024 Your Company, Inc. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
