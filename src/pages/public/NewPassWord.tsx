import imagemLogin from "../../assets/banners/ImagemLogin.webp";
import { Link } from "react-router-dom";

export default function NewPassWord() {
  return (
    <section className="py-[6em] px-[0.625em]">
      <div
        className="bg-[rgba(255,255,255,0.2)] backdrop-blur-xl border-[1px] border-white shadow-[0px_2px_10px_rgba(0,0,0,0.6)]  p-[10px] max-w-[420px]  min-[880px]:max-w-[860px] m-auto rounded-[20px] flex items-center gap-[20px] overflow-hidden
          animate-fade-up animate-once animate-duration-500 animate-ease-out animate-normal
        "
      >
        <img
          src={imagemLogin}
          alt="imagem login"
          className="rounded-[20px] hidden min-[880px]:block shadow-[0px_2px_10px_rgba(0,0,0,0.6)]
              animate-fade-right animate-once animate-duration-500 animate-delay-300 animate-ease-out animate-normal
            "
        />
        <div
          className="w-full py-[50px] min-[880px]:py-0
            animate-fade-left animate-once animate-duration-500 animate-delay-300 animate-ease-out animate-normal
          "
        >
          <h3
            className="text-center text-[2.5rem] font-bold tracking-wide m-0 pb-[2.5rem]"
            style={{ letterSpacing: "13px" }}
          >
            NEW
            PASSWORD
          </h3>
          <form action="" className="flex flex-col gap-[20px]   ">
            <input
              type="email"
              id="email"
              title="email"
              placeholder="E-mail"
              className="px-[20px] w-full h-[40px] rounded-[40px] text-[rgba(0,0,0,0.8)] font-medium bg-[rgba(255,255,255,0.2)] shadow-[0px_2px_10px_rgba(0,0,0,0.6)] border-[1px] border-white placeholder:text-[rgba(0,0,0,0.8)] placeholder:text-[1rem] placeholder:font-medium placeholder:tracking-wide focus:outline-none focus:border-white "
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              title="password"
              className="px-[20px] w-full h-[40px] rounded-[40px] text-[rgba(0,0,0,0.8)]  bg-[rgba(255,255,255,0.2)] shadow-[0px_2px_10px_rgba(0,0,0,0.6)] border-[1px] border-white placeholder:text-[rgba(0,0,0,0.8)] placeholder:text-[1rem] placeholder:font-medium placeholder:tracking-wide focus:outline-none focus:border-white "
            />
            <div className="flex justify-between pt-[10px] pl-[20px] pr-[10px] ">
              <Link to="/login" className="flex items-center">
                Return To Login Screen
              </Link>
              <button
                type="submit"
                className="bg-white py-[8px] px-[20px] rounded-[40px] text-black font-bold text-[1rem] cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.6)] hover:shadow-[0_0_8px_rgba(255,255,255,0.6)] transition duration-500 trasform hover:scale-105 "
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
