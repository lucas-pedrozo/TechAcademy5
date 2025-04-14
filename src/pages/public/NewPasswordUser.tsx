import ImageLogin from "@/assets/image/ImagemLogin.png";
import NewPassword from "@/components/custom/NewPassword";

function NewPasswordUser() {

    // animation end form
    const MotionForm = "animate-fade-left animate-duration-500 animate-ease-out animate-normal"
    const MotionImage = "animate-fade-right animate-duration-500 animate-ease-out animate-normal || shadow-[0_0_8px_rgba(0,0,0,0.6)]"
    const MotionContainer = "animate-fade-up animate-duration-500 animate-ease-out animate-normal || shadow-[0_0_8px_rgba(0,0,0,0.6)]"

    return (
        <main className="min-h-[86vh] w-full flex justify-center items-center pt-10">
            <section className={`w-full max-w-[500px] min-[880px]:max-w-[860px]  mb-10 p-2.5 flex  items-center gap-2.5 bg-white/10 backdrop-blur-sm rounded-3xl border border-white || overflow-hidden || ${MotionContainer}`}>

                <img src={ImageLogin} alt="imagem Login" className={`rounded-2xl hidden min-[880px]:flex || ${MotionImage} animate-delay-100 `} />

                <div className={`w-full ${MotionForm} animate-delay-100 `}>
                    <h2 className="text-4xl font-bold text-center pb-8" style={{ letterSpacing: "10px" }}>NEW PASSWORD</h2>

                    <NewPassword />

                </div>
            </section>
        </main >
    );
}

export default NewPasswordUser;