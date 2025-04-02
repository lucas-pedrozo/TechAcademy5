// import ContainerSound from "@/components/custom/ContainerSond";


const BuscarSound = () => {

    const SyInput = "bg-white/10 backdrop-blur-md rounded-full border-1 border-white  || w-full text-white placeholder:text-white placeholder:font-medium focus:outline-none || px-5 py-2"

    return (
        <main className="py-10">
            <section className=" max-w-[1220px] mx-auto px-2.5" >

                <div className="py-5 flex justify-center">
                    <input type="search" placeholder="search..." className={`${SyInput}  max-w-[700px]`} />
                </div>

                <section className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white min-[800px]:pr-1 px-2.5">
                    <div className="overflow-hidden overflow-y-scroll max-h-[700px] pt-5 || flex flex-col gap-2.5 w-full">

                    </div>
                </section>

            </section>
        </main>

    );
}

export default BuscarSound;