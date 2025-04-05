import { ButtonCreate, ButtonUpdate } from "@/components/ui/Button";
import { useEffect } from "react";
import AOS from "aos";

// interface author {
//     id: number,
//     name: string,
// }


function AdminAuthor() {

    const styleInput = "w-full bg-white/20 backdrop-blur-xl rounded-full border-1 border-white text-white py-2 px-5 placeholder:text-white placeholder:font-medium focus:outline-none";
    const styleForm = "flex flex-col gap-2.5 w-full";
    const styleAuthor = "flex flex-col gap-1.5 bg-white/20 backdrop-blur-xl rounded-2xl border-1 border-white font-bold text-white py-2 px-5 || max-w-[300px]";
    const styleHr = "h-[3px] rounded-full";


    useEffect(() => {
        AOS.init({ duration: 500 });
        AOS.init({ delay: 0 });
    })





    return (
        <main className="py-14 px-2.5 mx-auto max-w-[1220px]">
            <section className="flex gap-2.5 flex-col min-[600px]:flex-row" data-aos="fade-up">
                <div className="w-full">
                    <form action="" className={`${styleForm}`}>
                        <input type="text" className={`${styleInput}`} placeholder="Name Author" />
                        <ButtonUpdate />
                    </form>
                </div>
                <div className="w-full" data-aos="fade-up">
                    <form action="" className={`${styleForm}`}>
                        <input type="number" className={styleInput} placeholder="Name Author" />
                        <input type="text" className={styleInput} placeholder="Name Author" />
                        <ButtonCreate />
                    </form>
                </div>
            </section>

            <div className="py-7">
                <hr className={styleHr} data-aos="fade-up" />
            </div>v

            <section className="flex flex-wrap gap-3 justify-center items-center">
                <div className={`${styleAuthor}`} data-aos="fade-up">
                    <span>ID: 1</span>
                    <span>NAME: Lucas Pedrozo</span>
                </div>
                <div className={`${styleAuthor}`} data-aos="fade-up">
                    <span>ID: 1</span>
                    <span>NAME: Lucas Pedrozo</span>
                </div>
                <div className={`${styleAuthor}`} data-aos="fade-up">
                    <span>ID: 1</span>
                    <span>NAME: Lucas Pedrozo</span>
                </div>
                <div className={`${styleAuthor}`} data-aos="fade-up">
                    <span>ID: 1</span>
                    <span>NAME: Lucas Pedrozo</span>
                </div>
                <div className={`${styleAuthor}`} data-aos="fade-up">
                    <span>ID: 1</span>
                    <span>NAME: Lucas Pedrozo</span>
                </div>
            </section>
        </main>
    );
}

export default AdminAuthor;