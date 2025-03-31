import { useEffect, } from "react";
import AOS from "aos";

import ContainerSound from "@/components/custom/ContainerSond";

import som_1 from "@/assets/audio/4ria - JUDGMENTAL C_NT(MP3_320K).mp3";
import som_2 from "@/assets/audio/Alec Benjamin - Let Me Down Slowly ( cover by J.Fla )(MP3_320K).mp3";
import som_3 from "@/assets/audio/Bemax - Ahegao(MP3_320K).mp3";
import som_4 from "@/assets/audio/Laura Marling - Night After Night Legendado(MP3_320K).mp3";
import som_5 from "@/assets/audio/Me Leva Junto Com Você(MP3_320K)_1.mp3";
import { PaginationComponent } from "@/components/custom/ConponentesPagination";

// =================================================================================================================================================================================================

function Sound() {

    const sounds = [
        { src: som_1, name: "Alec Benjamin - Let Me Down Slowly ( cover by J.Fla )", author: "J.Fla" },
        { src: som_2, name: "Laura Marling - Night After Night Legendado", author: "Laura Marling" },
        { src: som_3, name: "Bemax - Ahegao", author: "Bemax" },
        { src: som_4, name: "4ria - JUDGMENTAL C_NT", author: "4ria" },
        { src: som_5, name: "Me Leva Junto Com Você", author: "Raça Negra" },
        { src: som_1, name: "Alec Benjamin - Let Me Down Slowly ( cover by J.Fla )", author: "J.Fla" },
        { src: som_2, name: "Laura Marling - Night After Night Legendado", author: "Laura Marling" },
        { src: som_3, name: "Bemax - Ahegao", author: "Bemax" },
        { src: som_4, name: "4ria - JUDGMENTAL C_NT", author: "4ria" },
        { src: som_5, name: "Me Leva Junto Com Você", author: "Raça Negra" },
    ];

    useEffect(() => {
        AOS.init({ duration: 500 });
    }, []);


    // =================================================================================================================================================================================================

    return (
        <main className="px-2.5 py-10 max-w-[1220px] m-auto flex flex-col gap-5">

            <div className="flex justify-start items-center pt-8 px-2.5">
                <p className="bg-white/20 backdrop-blur-xl border-1 border-white rounded-full px-5 py-2 font-bold">
                    Sound
                </p>
            </div>

            <section className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white flex gap-2.5 p-2.5 min-[800px]:pr-1">

                <div className="overflow-hidden overflow-y-scroll max-h-[700px] flex flex-col gap-2.5 w-full">


                    {sounds.map((sound, index) => (
                        <ContainerSound key={index} src={sound.src} name={sound.name} author={sound.author} className1="flex" className2="hidden" />
                    ))}

                </div>
            </section>
            <PaginationComponent />
        </main>
    );
}

export default Sound;
