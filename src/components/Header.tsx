"use client";
import logoSoud from "../assets/logo/Mask.png";
import logoUser from "../assets/logo/lucas.jpg";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  PopoverGroup,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="header"
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(20px)",
        borderRadius: "0 0 40px 40px",
        borderBottom: "1px solid white",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.6)",
      }}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-[1240px] items-center justify-between  py-[10px] px-[20px]"
      >
        <div className=" logo">
          <a href="#" className="flex items-center gap-[10px]">
            <img alt="" src={logoSoud} className="@min- w-[40px] " />
            <p className="hidden min-[520px]:block font-bold text-[1.125rem] ">
              HARMONIC SOUND
            </p>
          </a>
        </div>
        <div className="loginUserFixo flex gap-[15px] items-center">
          <PopoverGroup className="hidden lg:flex gap-[15px] items-center">
            <a
              href="#"
              className="text-sm/6 font-bold text-[1rem]  transition duration-500 hover:scale-105 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] hover:drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)] "
            >
              HOME
            </a>
            <a
              href="#"
              className="text-sm/6 font-bold text-[1rem] transition duration-500 hover:scale-105 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] hover:drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)]"
            >
              SOUND
            </a>
            <a
              href="#"
              className="text-sm/6 font-bold text-[1rem] transition duration-500 hover:scale-105 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] hover:drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)]"
            >
              ABOUT
            </a>
            <a
              href="#"
              className="text-sm/6 font-bold text-[1rem] transition duration-500 hover:scale-105 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] hover:drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)]"
            >
              CONTACT
            </a>
          </PopoverGroup>

          <div className="containerUser flex items-center gap-[10px] bg-[rgba(255, 255, 255, 0.2)]  backdrop-blur-xl border-[1px] border-white rounded-[40px] px-[15px] py-[8px] shadow-[0px_2px_10px_rgba(0,0,0,0.6)] ">
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
              className=" inline-flex items-center justify-center rounded-md  "
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
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10  animate-fade-left animate-once animate-duration-500 animate-ease-out">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
