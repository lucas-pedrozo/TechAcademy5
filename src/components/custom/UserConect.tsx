import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "../../components/ui/dropdown-menu";

import logoUser from "../../assets/logo/lucas.jpg";

export function UserConect() {
  const isUserLogged = false;

  return (
    <>
      <Link to="/login" className={`font-bold text-white items-center gap-[8px] bg-[rgba(255,255,255,0.1)] backdrop-blur-xl border-[1px] border-white py-[8px] px-[15px] pr-[14px] rounded-[40px] shadow-[0px_2px_10px_rgba(0,0,0,0.6)]
      animate-fade-down animate-once animate-duration-500 animate-delay-400 animate-ease-out
           ${!isUserLogged ? "flex" : "hidden"}`}>
        <img
          src={logoUser}
          alt="Name User"
          title="Name User"
          className="w-[34px] rounded-3xl"
        />
        Log in
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className={`items-center gap-[8px] focus:outline-none focus:ring-0 focus-visible:ring-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-xl border-[1px] border-white py-[8px] px-[15px] rounded-[40px] shadow-[0px_2px_10px_rgba(0,0,0,0.6)]
            animate-fade-down animate-once animate-duration-500 animate-delay-400 animate-ease-out
             ${!isUserLogged ? "hidden" : "flex"} `}>
            <img
              src={logoUser}
              alt="Name User"
              title="Name User"
              className="w-[34px] rounded-3xl"
            />

            <span className="font-bold text-white text-[1rem]">Lucas.p</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-white w-[16px]">
              <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
            </svg>

          </Button>

        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-[10px] mt-4 bg-[rgba(255,255,255,0.2)] backdrop-blur-xl flex flex-col gap-[10px] rounded-[20px] text-center ">

          <DropdownMenuItem className="animate-fade-up animate-duration-500 animate-delay-150 animate-ease-out">
            <Link to="/#">My Favoritos</Link>
          </DropdownMenuItem>

          <DropdownMenuItem className="animate-fade-up animate-duration-500 animate-delay-200 animate-ease-out">
            <Link to="/#">New Password</Link>
          </DropdownMenuItem>

          <DropdownMenuItem className="animate-fade-up animate-duration-500 animate-delay-250 animate-ease-out">
            <Link to="/#" className="text-red-500">
              Log Out
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem className="animate-fade-up animate-duration-500 animate-delay-300 animate-ease-out">
            <Link to="/#">Admin</Link>
          </DropdownMenuItem>

        </DropdownMenuContent>
      </DropdownMenu>

    </>
  );
}
