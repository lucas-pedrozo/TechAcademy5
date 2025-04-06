import emailjs from 'emailjs-com';
import Input from "@/components/custom/Input";
import { ButtonContact } from "@/components/ui/Button";

function Contact() {
    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs.sendForm('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', e.target as HTMLFormElement, 'SEU_PUBLIC_KEY')
            .then((result) => {
                console.log('Email enviado:', result.text);
            }, (error) => {
                console.log('Erro ao enviar:', error.text);
            });
    };

    return (
        <main className="py-14 px-2.5">
            <section className="max-w-[700px] mx-auto p-2.5 flex flex-col gap-2.5 bg-white/10 backdrop-blur-sm rounded-3xl border border-white overflow-hidden">
                <h2 className="text-4xl font-bold text-center pb-2.5">CONTACT</h2>
                <form onSubmit={sendEmail} className="flex flex-col gap-4 w-full">
                    <Input placeholder="Name" id="name" className="w-full" title="Your Name" />
                    <Input placeholder="Email" id="email" className="w-full" title="Your Email" />
                    <textarea name="message" placeholder="Escreva sua mensagem" className="bg-white/20 min-h-[300px] border-1 border-white rounded-2xl text-white p-2 placeholder:text-white"></textarea>
                    <ButtonContact />
                </form>
            </section>
        </main>
    );
}

export default Contact;