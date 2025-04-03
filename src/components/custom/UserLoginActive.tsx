import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

// Import logo do usuário
import logoUser from "../../assets/image/lucas.jpg";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";

const UserLoginActive = () => {
    const { logout } = useAuth();
    const [userName, setUserName] = useState<string | null>(null);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);

    // Recupera o nome do usuário do localStorage
    useEffect(() => {
        const fullName = localStorage.getItem("userName");
        const firstName = fullName ? fullName.split(" ")[0] : null;
        setUserName(firstName);

        // Verifica se o usuário é admin
        const userAdmin = localStorage.getItem("userAdmin") === "true";
        setIsAdmin(userAdmin);
    }, []);

    const styleLink = 'bg-black/40 border 1 border-white || px-3 py-1.5 rounded-full || font-semibold text-white text-[14px] || shadow-[0px_2px_10px_rgba(0,0,0,0.6)]';
    const styleLinkOut = 'border 1 border-red-600 || px-3 py-1.5 rounded-full || font-semibold text-red-600 text-[14px] || shadow-[0px_2px_10px_rgba(0,0,0,0.6)]';

    // Animação zoom Link
    const MotionZoom = 'drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] hover:drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)] hover:scale-103 transition duration-200 transform || font-bold';
    const MotionZoomOut = 'bg-black/40 hover:bg-red-600 hover:text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] hover:drop-shadow-[0_2px_6px_red] hover:scale-103 transition duration-200 transform || font-bold';

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1.5 || px-2.5 py-2 || bg backdrop-blur-xl rounded-full bg-white/5 focus:outline-none || border-white/40 border-1 || font-semibold text-[14px] || shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                    <img src={logoUser} alt="User Avatar" className="w-7 rounded-full" />
                    {userName ? userName : "Logged in"}
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <Link to={'/favoritos'} className={`${styleLink} ${MotionZoom}`}>My Favoritos</Link>
                <Link to={'/newPassword'} className={`${styleLink} ${MotionZoom}`}>New Password</Link>
                <button onClick={logout} className={`${styleLinkOut} ${MotionZoomOut}`}>Log out</button>
                {isAdmin && <Link to={'/admin'} className={`${styleLink} ${MotionZoom}`}>Admin</Link>}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserLoginActive;