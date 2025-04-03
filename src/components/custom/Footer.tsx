import api from "@/service/api";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
const Footer = () => {
    const styleLinkOut = 'border 1 border-red-600 || px-3 py-1.5 rounded-full || font-semibold text-red-600 text-[14px] || shadow-[0px_2px_10px_rgba(0,0,0,0.6)]';
    const MotionZoomOut = 'bg-black/40 hover:bg-red-600 hover:text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] hover:drop-shadow-[0_2px_6px_red] hover:scale-103 transition duration-200 transform || font-bold';

    const { logout } = useAuth();

    const handleRegister = async () => {
        try {
            const userId = localStorage.getItem("userId");

            if (!userId) {
                alert("Usuário não encontrado.");
                return;
            }

            const confirmation = confirm("Tem certeza de que deseja excluir seu cadastro? Esta ação não pode ser desfeita.");
            if (!confirmation) {
                return logout();
            }

            await api.delete(`/users/${userId}`);
            alert("Cadastro excluído com sucesso!");
            logout(); // Deslogando o usuário após a exclusão

            location.reload();
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error?.response?.data.error.map((e: { message: string }) => e.message).join(', ') || "Erro ao excluir cadastro";
                alert(errorMessage);
            }
        }
    };

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
                    <button onClick={handleRegister} className={`${styleLinkOut} ${MotionZoomOut}`}>Delet User</button>
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
