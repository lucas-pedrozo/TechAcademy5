import { useState, useEffect } from "react";
import Login from "@/components/custom/Login";
import Register from "@/components/custom/Register";
import ImageLogin from "@/assets/image/ImagemLogin.png";

function LoginUser() {

    // True: Login ativo; false: Register ativo
    const [isLoginActive, setIsLoginActive] = useState(true);

    // UseEffect para quando ouver  a troca detenas
    useEffect(() => {
        console.log(isLoginActive ? "Login ativo" : "Register ativo");
    }, [isLoginActive]);

    // Style dos button
    const styleButtonActive = "bg-white rounded-full px-5 py-2 font-bold text-black shadow-[0_2px_8px_rgba(0,0,0,0.6)] hover:shadow-[0_0_8px_rgba(255,255,255,0.6)] transition duration-500 transform hover:scale-105";
    const styleButtonNull = "bg-black rounded-full px-5 py-2 font-bold text-white shadow-[0_2px_8px_rgba(0,0,0,0.6)] hover:shadow-[0_0_8px_rgba(255,255,255,0.6)] transition duration-500 transform hover:scale-105";

    // animation end form
    const MotionForm = "animate-fade-left animate-duration-500 animate-ease-out animate-normal"
    const MotionImage = "animate-fade-right animate-duration-500 animate-ease-out animate-normal || shadow-[0_0_8px_rgba(0,0,0,0.6)]"
    const MotionContainer = "animate-fade-up animate-duration-500 animate-ease-out animate-normal || shadow-[0_0_8px_rgba(0,0,0,0.6)]"





    return (
        <main className="py-14 px-2.5">
            <section className={`max-w-[500px] min-[880px]:max-w-[860px] mx-auto mb-10 p-2.5 flex  items-center gap-2.5 bg-white/10 backdrop-blur-sm rounded-3xl border border-white || overflow-hidden || ${MotionContainer}`}>

                <img src={ImageLogin} alt="imagem Login" className={`rounded-2xl hidden min-[880px]:flex || ${MotionImage} animate-delay-100 `} />

                <div key={isLoginActive.toString()} className={`w-full ${MotionForm} animate-delay-100 `}>
                    <h2 className="text-4xl font-bold text-center pb-8" style={{ letterSpacing: "10px" }} >{isLoginActive ? "LOGIN" : "REGISTER"}</h2>

                    <div className="flex justify-center gap-5 pb-8">
                        <button onClick={() => setIsLoginActive(true)} className={`${isLoginActive ? styleButtonActive : styleButtonNull} cursor-pointer`}>Log in</button>

                        <button onClick={() => setIsLoginActive(false)} className={`${!isLoginActive ? styleButtonActive : styleButtonNull} cursor-pointer`}>Register</button>
                    </div>

                    {isLoginActive ? (<Login className="flex" />) : (<Register className="flex" />)}
                </div>
            </section>

            <div className="bg-white/20 backdrop-blur-xl rounded-2xl || border-1 border-white || p-5 m-auto || max-w-[600px] || flex flex-col gap-2.5 ">
                <div>
                    <input type="checkbox" />  <label htmlFor="checkbox"
                    >Read the policy terms and features of our system,<span className="font-bold"> Policy Terms</span></label>
                </div>
                <div>
                    <input type="checkbox" />  <label htmlFor="checkbox">Read the policy terms and features of our system,<span className="font-bold"> Policy Terms</span></label>
                </div>
            </div>
        </main >
    );
}

export default LoginUser;