import logoSoud from "../../assets/logo/Mask.png";
import { Link } from "react-router-dom";

import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { UserConect } from "./UserConect";
import LinkDesk from "./LinkDesk";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[rgba(255,255,255,0.1)] backdrop-blur-[20px] border-b-[1px] border-gray-300 relative z-1 rounded-b-[40px] shadow-[0px_2px_10px_rgba(0,0,0,0.6)] text-white
animate-fade-down animate-once animate-duration-500 animate-ease-out animate-normal 
    ">
      <nav className="mx-auto flex max-w-[1240px] items-center justify-between py-[10px] px-[20px]">
        <div>
          <Link to="/" className="flex items-center gap-[10px]">
            <img src={logoSoud} className="@min- w-[45px]  animate-fade-down animate-once animate-duration-500 animate-delay-200 animate-ease-out animate-normal " />
            <p className="hidden min-[520px]:block font-bold text-[1.125rem]  animate-fade-down animate-once animate-duration-500 animate-delay-200 animate-ease-out animate-normal">
              HARMONIC SOUND
            </p>
          </Link>
        </div>

        <div className="loginUserFixo flex gap-[15px] items-center">
          <PopoverGroup className="hidden lg:flex gap-[15px] items-center">

            <LinkDesk title="Home" to="/home" className=" animate-delay-250 animate-fade-down ">HOME</LinkDesk>
            <LinkDesk title="sound" to="/soundList" className=" animate-delay-300 animate-fade-down " >SOUND</LinkDesk>
            <LinkDesk title="about" to="/about" className=" animate-delay-350 animate-fade-down " >ABOUT</LinkDesk>
            <LinkDesk title="contact" to="/contact" className=" animate-delay-400 animate-fade-down " >CONTACT</LinkDesk>
          </PopoverGroup>

          <UserConect />

          <div className="flex lg:hidden">
            <button
              type="button" onClick={() => setMobileMenuOpen(true)}
              className=" inline-flex items-center justify-center rounded-md animate-fade-left animate-once animate-duration-500 animate-ease-out animate-normal data-closed:translate-y-1 ">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-[52px]" />
            </button>
          </div>
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[rgba(255,255,255,0.2)] backdrop-blur-xl  sm:max-w-sm sm:ring-1 p-[20px]  animate-fade-left animate-once animate-duration-500 animate-ease-out">
          <div
            className="flex items-center justify-between pb-[10px]
            animate-fade-left animate-once animate-duration-500 animate-delay-200 animate-ease-out animate-normal
          "
          >
            <span className="font-bold text-[1rem] ">HARMONIC SOUND</span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-red-600"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-8" />
            </button>
          </div>

          <hr className="w-full h-[3px] bg-white opacity-100 rounded-full animate-fade-left animate-once animate-duration-500 animate-delay-200 animate-ease-out animate-normal" />

          <div className="pt-[40px] flow-root">
            <div className="-my-6 divide-y ">
              <div className="flex  flex-col gap-[15px] text-center ">
                <LinkDesk title="Home" to="/home" className=" animate-delay-250 animate-fade-left">HOME</LinkDesk>
                <LinkDesk title="sound" to="/soundList" className=" animate-delay-300 animate-fade-left" >SOUND</LinkDesk>
                <LinkDesk title="about" to="/about" className=" animate-delay-350 animate-fade-left" >ABOUT</LinkDesk>
                <LinkDesk title="contact" to="/contact" className=" animate-delay-400 animate-fade-left" >CONTACT</LinkDesk>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
export default Header;
