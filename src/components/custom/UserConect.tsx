"use client";
import { Link } from "react-router-dom";
import logoUser from "../../assets/logo/lucas.jpg";

import { Button } from "../../components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";

export function UserConect() {
  return (
    <div
      className="flex gap-[10px] items-center bg-[rgba(255,255,255,0.1)] backdrop-blur-xl border-[1px] border-white py-[8px] px-[15px] rounded-[40px] shadow-[0px_2px_10px_rgba(0,0,0,0.6)]
    animate-fade-down animate-once animate-duration-500 animate-delay-400 animate-ease-out
    "
    >
      <img src={logoUser} alt="" className="w-[34px] rounded-3xl" />
      <DropdownMenu>
        <Link to="/Login" className="font-bold hidden text-white text-[1rem] ">
          Log in
        </Link>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex  gap-[8px] items-center">
            <span className="font-bold text-white text-[1rem]">Lucas.p</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
              />
            </svg>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-[10px] mt-4 bg-[rgba(255,255,255,0.2)] backdrop-blur-xl flex flex-col gap-[10px] rounded-[20px] ">
          <DropdownMenuItem className="animate-fade-up animate-once animate-duration-500 animate-delay-150 animate-ease-out">
            <Link to="/#">My Favoritos</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="animate-fade-up animate-once animate-duration-500 animate-delay-200 animate-ease-out">
            <Link to="/#">New Password</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="animate-fade-up animate-once animate-duration-500 animate-delay-250 animate-ease-out">
            <Link to="/#" className="text-red-500">
              Log Out
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="animate-fade-up animate-once animate-duration-500 animate-delay-300 animate-ease-out">
            <Link to="/#">Admin</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
