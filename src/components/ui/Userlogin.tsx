import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import logoUser from "../../assets/logo/lucas.jpg";

const Userlogin = () => {
  return (
    <Popover className="relative animate-fade-down animate-once animate-duration-500 animate-delay-400 animate-ease-out animate-normal ">
      <div className="flex items-center gap-[10px] bg-[rgba(255,255,255,0.1)] backdrop-blur-xl  px-[20px] py-[8px] border-[1px] border-white rounded-[40px] shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
        <img
          src={logoUser}
          alt=""
          className="w-[34px] rounded-4xl shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
        />
        <PopoverButton className="inline-flex items-center gap-x-1 text-[1rem] font-bold focus:outline-none">
          <span>Lucas.P</span>
          <ChevronDownIcon aria-hidden="true" className="size-5" />
        </PopoverButton>
      </div>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-2 flex w-screen max-w-max -translate-x-1/2 transition data-closed:translate-y-2 data-closed:opacity-0 data-enter:duration-500 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
      >
        <div className="  bg-[rgba(255,255,255,0.9)] backdrop-blur-xl border-[1px] shadow-[0_2px_8px_rgba(0,0,0,0.6)] border-white rounded-2xl p-[0.625em] flex flex-col gap-[0.625em] text-center  ">
          <a
            href=""
            className="bg-[rgba(0,0,0,0.5)] rounded-4xl border-[1px] border-black text-white font-bold text-[0.875rem] py-[8px] px-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.6)] hover:shadow-[0_2px_8px_rgba(0,0,0,1)] transition duration-500 trasform hover:scale-105 "
          >
            My favoritos
          </a>
          <a
            href=""
            className="bg-[rgba(0,0,0,0.5)]  rounded-4xl border-[1px] border-black text-white font-bold text-[0.875rem] py-[8px] px-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.6)] hover:shadow-[0_2px_8px_rgba(0,0,0,1)] transition duration-500 trasform hover:scale-105 "
          >
            New Password
          </a>
          <a
            href=""
            className="bg-[rgba(0,0,0,0.5)] rounded-4xl border-[1px] border-black text-red-600 font-bold text-[0.875rem] py-[8px] px-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.6)] hover:shadow-[0_2px_8px_rgba(0,0,0,1)] transition duration-500 trasform hover:scale-105 "
          >
            Log Out
          </a>
          <a
            href=""
            className="bg-[rgba(0,0,0,0.5)] rounded-4xl border-[1px] border-black text-white font-bold text-[0.875rem] py-[8px] px-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.6)] hover:shadow-[0_2px_8px_rgba(0,0,0,1)] transition duration-500 trasform hover:scale-105 "
          >
            Admin
          </a>
        </div>
      </PopoverPanel>
    </Popover>
  );
};

export default Userlogin;
