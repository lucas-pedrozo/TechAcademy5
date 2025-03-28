import ContainerSound from "@/components/custom/ContainerSond";

import som_1 from "@/assets/audio/4ria - JUDGMENTAL C_NT(MP3_320K).mp3";
import som_2 from "@/assets/audio/Alec Benjamin - Let Me Down Slowly ( cover by J.Fla )(MP3_320K).mp3";
import som_3 from "@/assets/audio/Bemax - Ahegao(MP3_320K).mp3";
import som_4 from "@/assets/audio/Laura Marling - Night After Night Legendado(MP3_320K).mp3";
import som_5 from "@/assets/audio/Me Leva Junto Com Você(MP3_320K)_1.mp3";



const BuscarSound = () => {

    const SyInput = "bg-white/10 backdrop-blur-md rounded-full border-1 border-white  || w-full text-white placeholder:text-white placeholder:font-medium focus:outline-none || px-5 py-2"

    return (
        <section>

            <div className="py-5">
                <input type="search" placeholder="search..." className={`${SyInput}`} />
            </div>

            <div className="overflow-hidden overflow-y-scroll max-h-[700px] pt-5 || flex flex-col gap-2.5 w-full">
                <ContainerSound src={som_1} name="Alec Benjamin - Let Me Down Slowly ( cover by J.Fla )" author="J.Fla" />
                <ContainerSound src={som_2} name="Laura Marling - Night After Night Legendado" author="Laura Marling" />
                <ContainerSound src={som_3} name="Bemax - Ahegao" author="Bemax" />
                <ContainerSound src={som_4} name="4ria - JUDGMENTAL C_NT" author="4ria" />
                <ContainerSound src={som_5} name="Me Leva Junto Com Vocé" author="Raça Negra" />
                <ContainerSound src={som_1} name="Alec Benjamin - Let Me Down Slowly ( cover by J.Fla )" author="J.Fla" />
                <ContainerSound src={som_2} name="Laura Marling - Night After Night Legendado" author="Laura Marling" />
                <ContainerSound src={som_3} name="Bemax - Ahegao" author="Bemax" />
                <ContainerSound src={som_4} name="4ria - JUDGMENTAL C_NT" author="4ria" />
                <ContainerSound src={som_5} name="Me Leva Junto Com Vocé" author="Raça Negra" />
            </div>
        </section>
    );
}

export default BuscarSound;