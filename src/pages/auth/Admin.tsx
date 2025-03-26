import ContainerSound from "@/components/custom/ContainerSond";

function Admin() {

    const SyButtonNot = "bg-black rounded-full border-1 border-white || px-5 py-2 || font-bold text-white"
    const SyButtonActive = "bg-white rounded-full border-1 border-black || px-5 py-2 || font-bold text-black"
    const SyInput = "bg-white/10 backdrop-blur-md rounded-full border-1 border-white  || w-full text-white placeholder:text-white placeholder:font-medium focus:outline-none || px-5 py-2"

    return (
        <section className="py-10">
            <main className="max-w-[1220px] mx-auto p-2.5 || bg-white/20 backdrop-blur-md rounded-2xl || border-1 border-white">

                <section className="bg-black/30 border-1 border-white rounded-full || p-[6px_20px] || flex justify-between items-center ">
                    <span className="font-bold">Area do Admin</span>
                    <div className="flex gap-2.5">
                        {/* <button className={`${SyButtonActive}`}>Add Sound</button>
                        <button className={`${SyButtonNot}`}>Add Sound</button>
                        <button className={`${SyButtonNot}`}>Add Sound</button> */}
                    </div>
                </section>
                <div className="">
                    <input type="search" placeholder="search..." className={`${SyInput}`} />
                </div>

                <section className="overflow-hidden overflow-y-scroll max-h-[700px] pt-5 || flex flex-col gap-2.5 w-full">
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
                </section>

            </main>
        </section>
    );
}

export default Admin; 