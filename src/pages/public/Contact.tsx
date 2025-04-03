import Input from "@/components/custom/Input";
import { ButtonContact } from "@/components/ui/Button";

function Contact() {

    const styleInput = 'bg-white/20 backdrop-blur-xl min-h-[300px] || border-1 border-white rounded-2xl || text-white || p-2 || placeholder:text-white placeholder:font-medium focus:outline-none';


    // animation end form
    const MotionForm = "animate-fade-up animate-duration-500 animate-ease-out animate-normal"
    const MotionContainer = "animate-fade-up animate-duration-500 animate-ease-out animate-normal || shadow-[0_0_8px_rgba(0,0,0,0.6)]"



    return (
        <main className="py-14 px-2.5">
            <section className={`max-w-[700px] mx-auto p-2.5 flex flex-col gap-2.5 bg-white/10 backdrop-blur-sm rounded-3xl border border-white || overflow-hidden ${MotionForm} `}>
                <h2 className="text-4xl font-bold text-center || pb-2.5">CONTACT</h2>
                <form action="" className="flex flex-col gap-4 || w-full">
                    <Input placeholder="Name" id="name" className={`w-full ${MotionContainer}`} title="Your Name" />
                    <Input placeholder="Email" id="name" className={`w-full ${MotionContainer}`} title="Your Name" />
                    <textarea name="" placeholder="Escreva sua mensagem" id="" className={`${styleInput} ${MotionContainer}`}></textarea>
                    <ButtonContact />
                </form>
            </section>
        </main>
    )
}

export default Contact;