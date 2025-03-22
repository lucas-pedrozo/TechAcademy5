import * as React from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"

// import logo user
import logoUser from "../../assets/image/lucas.jpg"


const UserLoginActive = () => {

    const styleLink = 'bg-black/40 border 1 border-white || px-3 py-1.5 rounded-full || font-mediaum text-white || shadow-[0px_2px_10px_rgba(0,0,0,0.6)] ]';

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className=" flex items-center gap-1.5 || px-2.5 py-2 || bg-[rgba(255,255,255,0.2)] backdrop-blur-xl rounded-full focus:outline-none || border-white- border-1 || font-bold">
                    <img src={logoUser} alt="" className="w-8 rounded-full" />
                    Lucas.P
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>

                <Link to={'/favoritos'} className={`${styleLink}`} >My Favoritos</Link>

                <Link to={'/alterarSenha'} className={`${styleLink}`}>New Password</Link>

                <Link to={'/logout'} className={`${styleLink}`}>Log out</Link>

                <Link to={'/admin'} className={`${styleLink}`}>Admin</Link>

            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default UserLoginActive;