import { useEffect } from "react";
import AOS from "aos";
import Filtro from "@/components/custom/FiltroSheet";
import ContainerSound from "@/components/custom/ContainerSond";
import FilterContainer from "@/components/custom/FiltroContainer";

function Sound() {

    useEffect(() => {
        AOS.init({ duration: 500 });
        AOS.init({ delay: 0 });
    })

    return (
        <main className="px-2.5 py-10 max-w-[1220px] m-auto">

            <div className="flex justify-between items-center || p-[10px_20px]">
                <p className="bg-white/20 backdrop-blur-xl || border-1 border-white rounded-full px-5 py-2 font-bold">Sound</p>
                <Filtro className="min-[750px]:hidden" />
            </div>

            <section className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white || flex gap-2.5  p-2.5">
                <div className="w-[280px] || bg-black/20 backdrop-blur-md border-1 border-white rounded-2xl p-2.5 || hidden min-[750px]:flex  ">
                    <FilterContainer />
                </div>

                <div className="overflow-hidden overflow-y-scroll max-h-[700px] || flex flex-col gap-2.5 w-full">
                    <ContainerSound />
                    <ContainerSound />
                    <ContainerSound />
                    <ContainerSound />
                    <ContainerSound />
                    <ContainerSound />
                    <ContainerSound />
                    <ContainerSound />
                    <ContainerSound />
                    <ContainerSound />
                </div>
            </section>
        </main>
    );
}
export default Sound