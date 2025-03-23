import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"

// import logo user
import logoUser from "../../assets/image/lucas.jpg"


const UserLoginActive = () => {

    const styleLink = 'bg-black/40 border 1 border-white || px-3 py-1.5 rounded-full || font-semibold text-white text-[14px] || shadow-[0px_2px_10px_rgba(0,0,0,0.6)]';

    //animation zoom Link
    const MotionZoom = 'drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] hover:drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)] hover:scale-103 transition duration-200 transform || font-bold';

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className=" flex items-center gap-1.5 || px-2.5 py-2 || bg backdrop-blur-xl rounded-full bg-white/5 full focus:outline-none || border-white/40 border-1 || font-semibold text-[14px] || shadow-[0_0_10px_rgba(255,255,255,0.1)] ">
                    <img src={logoUser} alt="" className="w-7 rounded-full" />
                    Lucas.P
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>

                <Link to={'/favoritos'} className={`${styleLink} ${MotionZoom}`} >My Favoritos</Link>

                <Link to={'/alterarSenha'} className={`${styleLink} ${MotionZoom}`}>New Password</Link>

                <Link to={'/logout'} className={`${styleLink} ${MotionZoom}`}>Log out</Link>

                <Link to={'/admin'} className={`${styleLink} ${MotionZoom}`}>Admin</Link>

            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default UserLoginActive;