import { useEffect, useState } from "react";
import AOS from "aos";
import Filtro from "@/components/custom/FiltroSheet";
import ContainerSound from "@/components/custom/ContainerSond";
import FilterContainer from "@/components/custom/FiltroContainer";

import som_1 from "@/assets/audio/4ria - JUDGMENTAL C_NT(MP3_320K).mp3";
import som_2 from "@/assets/audio/Alec Benjamin - Let Me Down Slowly ( cover by J.Fla )(MP3_320K).mp3";
import som_3 from "@/assets/audio/Bemax - Ahegao(MP3_320K).mp3";
import som_4 from "@/assets/audio/Laura Marling - Night After Night Legendado(MP3_320K).mp3";
import som_5 from "@/assets/audio/Me Leva Junto Com Você(MP3_320K)_1.mp3";

// =================================================================================================================================================================================================

function Sound() {

    const SySearch = "flex py-2.5 px-5 mx-auto gap-2.5 bg-white/20 backdrop-blur-xl rounded-full border-1 border-white max-w-[700px]";
    const [filteredSounds, setFilteredSounds] = useState<{ src: string; name: string; author: string }[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

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

    // filtro da barra de search 
    useEffect(() => {
        const filtered = sounds.filter(sound =>
            sound.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            sound.author.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredSounds(filtered);
    }, [searchTerm]);

    // =================================================================================================================================================================================================

    return (
        <main className="px-2.5 py-10 max-w-[1220px] m-auto">

            <div className={SySearch}>
                <input type="search" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full focus:outline-none bg-transparent" />
            </div>

            <div className="flex justify-between items-center pt-8 p-[10px_20px]">
                <p className="bg-white/20 backdrop-blur-xl border-1 border-white rounded-full px-5 py-2 font-bold">
                    Sound
                </p>
                <Filtro className="min-[750px]:hidden" />
            </div>

            <section className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white flex gap-2.5 p-2.5 min-[800px]:pr-1">

                <div className="w-[280px] bg-black/20 backdrop-blur-md border-1 border-white rounded-2xl p-2.5 hidden min-[750px]:flex">
                    <FilterContainer />
                </div>

                <div className="overflow-hidden overflow-y-scroll max-h-[700px] flex flex-col gap-2.5 w-full">

                    {filteredSounds.length > 0 ? (filteredSounds.map((sound, index) => (
                        <ContainerSound key={index} src={sound.src} name={sound.name} author={sound.author} className1="flex" className2="hidden" />
                    ))
                    ) : (<p className="text-center text-white/70 pt-10">Nenhum resultado encontrado.</p>)}
                </div>
            </section>
        </main>
    );
}

export default Sound;
