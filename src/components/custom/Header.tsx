"use client";
import logoSoud from "../../assets/logo/Mask.png";
import logoUser from "../../assets/logo/lucas.jpg";

import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="bg-[rgba(255,255,255,0.1)] backdrop-blur-xl border-b-[1px] border-neutral-300  rounded-b-[40px] shadow-[0px_2px_10px_rgba(0,0,0,0.6)] text-white
     animate-fade-down animate-once animate-duration-500 animate-ease-out animate-normal
    "
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-[1240px] items-center justify-between  py-[10px] px-[20px] overflow-hidden"
      >
        <div>
          <a href="#" className="flex items-center gap-[10px]">
            <img
              alt=""
              src={logoSoud}
              className="@min- w-[40px]  animate-fade-down animate-once animate-duration-500 animate-delay-200 animate-ease-out animate-normal "
            />
            <p className="hidden min-[520px]:block font-bold text-[1.125rem]  animate-fade-down animate-once animate-duration-500 animate-delay-200 animate-ease-out animate-normal">
              HARMONIC SOUND
            </p>
          </a>
        </div>
        <div className="loginUserFixo flex gap-[15px] items-center">
          <PopoverGroup className="hidden lg:flex gap-[15px] items-center">
            <a
              href="#"
              className="text-sm/6 font-bold text-[1rem]  transition duration-500 hover:scale-105 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] hover:drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)] 
              animate-fade-down animate-once animate-duration-500 animate-delay-200 animate-ease-out animate-normal
              "
            >
              HOME
            </a>
            <a
              href="#"
              className="text-sm/6 font-bold text-[1rem] transition duration-500 hover:scale-105 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] hover:drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)]
              animate-fade-down animate-once animate-duration-500 animate-delay-250 animate-ease-out animate-normal
              "
            >
              SOUND
            </a>
            <a
              href="#"
              className="text-sm/6 font-bold text-[1rem] transition duration-500 hover:scale-105 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] hover:drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)]
              animate-fade-down animate-once animate-duration-500 animate-delay-300 animate-ease-out animate-normal
              "
            >
              ABOUT
            </a>
            <a
              href="Contact"
              className="text-sm/6 font-bold text-[1rem] transition duration-500 hover:scale-105 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] hover:drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)] 
              animate-fade-down animate-once animate-duration-500 animate-delay-350 animate-ease-out animate-normal
              "
            >
              CONTACT
            </a>
          </PopoverGroup>

          <div
            className="containerUser flex items-center gap-[10px] bg-[rgba(255, 255, 255, 0.2)]  backdrop-blur-xl border-[1px] border-white rounded-[40px] px-[15px] py-[8px] shadow-[0px_2px_10px_rgba(0,0,0,0.6)] 
          animate-fade-down animate-once animate-duration-500 animate-delay-400 animate-ease-out animate-normal
          "
          >
            <img
              src={logoUser}
              alt=""
              className="w-[34px] rounded-[50%] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] "
            />
            <a href="" className="font-bold text-[1rem] text-white">
              Lucas.P
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className=" inline-flex items-center justify-center rounded-md animate-fade-left animate-once animate-duration-500 animate-ease-out animate-normal data-closed:translate-y-1   "
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-[52px]" />
            </button>
          </div>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[rgba(255,255,255,0.2)] backdrop-blur-xl  sm:max-w-sm sm:ring-1 p-[20px]  animate-fade-left animate-once animate-duration-500 animate-ease-out">
          <div
            className="flex items-center justify-end pb-[10px]
           animate-fade-left animate-once animate-duration-500 animate-delay-200 animate-ease-out animate-normal
          "
          >
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-red-600"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-8" />
            </button>
          </div>
          <hr
            className="w-full h-[3px] bg-white opacity-100 rounded-full
          animate-fade-left animate-once animate-duration-500 animate-delay-200 animate-ease-out animate-normal
          "
          />
          <div className="pt-[40px] flow-root">
            <div className="-my-6 divide-y ">
              <div className="flex  flex-col gap-[15px] text-center ">
                <a
                  href=""
                  className=" m-0 font-bold text-[1rem] transition duration-500 hover:scale-105 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] hover:drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)]
                   animate-fade-left animate-once animate-duration-500 animate-delay-250 animate-ease-out animate-normal
                  "
                >
                  HOME
                </a>
                <a
                  href=""
                  className=" m-0 font-bold text-[1rem] transition duration-500 hover:scale-105 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] hover:drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)]
                   animate-fade-left animate-once animate-duration-500 animate-delay-300 animate-ease-out animate-normal
                  "
                >
                  SOUND
                </a>
                <a
                  href=""
                  className=" m-0 font-bold text-[1rem] transition duration-500 hover:scale-105 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] hover:drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)]
                   animate-fade-left animate-once animate-duration-500 animate-delay-350 animate-ease-out animate-normal
                  "
                >
                  ABOUT
                </a>
                <a
                  href=""
                  className=" m-0 font-bold text-[1rem] transition duration-500 hover:scale-105 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] hover:drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)]
                   animate-fade-left animate-once animate-duration-500 animate-delay-400 animate-ease-out animate-normal
                  "
                >
                  CONTACT
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
