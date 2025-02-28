import "./Header.css";
import logoLucas from "../assets/lucas.jpg";
import logo from "../assets/Mask.png";

import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const showAlert = () => {
    window.location.href = "/";
  };

  return (
    <header className="header">
      <nav aria-label="Global">
        <div className="containerLogo flex lg:flex-1">
          <a onClick={showAlert} className=" flex items-center">
            <img alt="lOGO " src={logo} />
            <p>HARMONIC SOUND</p>
          </a>
        </div>

        <div className="navLinks">
          <PopoverGroup className="popover hidden lg:flex">
            <a href="#" className="link">
              HOME
            </a>
            <a href="#" className="link">
              SOUDN
            </a>
            <a href="#" className="link">
              ABOUT
            </a>
            <a href="#" className="link">
              CONTACT
            </a>
          </PopoverGroup>

          <div className="containerUser">
            <img src={logoLucas} alt="" className="imgUser" />
            {/* <a href="" className="loginUser ">
              Log In
            </a> */}
            <Popover className="relative Popover ">
              <PopoverButton className="inline-flex items-center gap-x-1 font-bold ">
                <span>Lucas.P</span>
                <ChevronDownIcon aria-hidden="true" className="size-5" />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max  -translate-x-1/2 px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                style={{ paddingTop: "20px" }}
              >
                <p>lucas</p>
              </PopoverPanel>
            </Popover>
          </div>

          <div className="flex lg:hidden ">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className=" inline-flex "
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-10" />
            </button>
          </div>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden "
      >
        <div className="fixed inset-0 z-10 " />
        <DialogPanel
          id="styleNavbarMobile"
          className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto sm:max-w-sm sm:ring-1  "
        >
          <div className="flex ButtonCloseMenu ">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-red-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-bold "
                >
                  HOME
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-bold "
                >
                  SOUND
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-bold "
                >
                  ABOUT
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-bold "
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
