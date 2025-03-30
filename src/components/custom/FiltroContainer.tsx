function FilterContainer() {

    const checkbox = "appearance-none w-6 h-6 border-2 border-white  rounded-full relative checked:bg-white-500 checked:border-white-500  checked:after:content-[''] checked:after:block checked:after:w-3 checked:after:h-3  checked:after:bg-white checked:after:rounded-full  checked:after:absolute checked:after:top-1/2 checked:after:left-1/2  checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer transition-all"
    const flex = "flex items-center gap-2";

    return (
        <form className="px-2.5">
            <section className="flex flex-col gap-2.5 font-bold pb-2.5">
                < h4 className=" font-bold" > Categoria</h4 >

                <div className={`${flex}`}>
                    <input type="radio" name="categoria1" className={`${checkbox}`} />
                    <label className="text-[14px]" htmlFor="">Background Sounds</label>
                </div>

                <div className={`${flex}`}>
                    <input type="radio" name="categoria1" className={`${checkbox}`} />
                    <label className="text-[14px]" htmlFor=""> Overlays</label>
                </div>

                <div className={`${flex}`}>
                    <input type="radio" name="categoria1" className={`${checkbox}`} />
                    <label className="text-[14px]" htmlFor="">Transições</label>
                </div>

                <div className={`${flex}`}>
                    <input type="radio" name="categoria1" className={`${checkbox}`} />
                    <label className="text-[14px]" htmlFor="">Sons de Ambiente</label>
                </div>
            </section>

            <hr className="h-[2px] bg-white rounded-full" />

            <section className="flex flex-col gap-2.5 font-bold py-2.5">
                <h4 >All the Sound</h4>

                <div className={`${flex}`}>
                    <input type="radio" name="categoria2" className={`${checkbox}`} />
                    <label className="text-[14px]" htmlFor=""> 5 Seconds </label>
                </div>

                <div className={`${flex}`}>
                    <input type="radio" name="categoria2" className={`${checkbox}`} />
                    <label className="text-[14px]" htmlFor=""> 10 Seconds</label>
                </div>

                <div className={`${flex}`}>
                    <input type="radio" name="categoria2" className={`${checkbox}`} />
                    <label className="text-[14px]" htmlFor=""> 15 Seconds</label>
                </div>

                <div className={`${flex}`}>
                    <input type="radio" name="categoria2" className={`${checkbox}`} />
                    <label className="text-[14px]" htmlFor="">  20 Seconds</label>
                </div>

                <div className={`${flex}`}>
                    <input type="radio" name="categoria2" className={`${checkbox}`} />
                    <label className="text-[14px]" htmlFor=""> 25 Seconds</label>
                </div>

                <div className={`${flex}`}>
                    <input type="radio" name="categoria2" className={`${checkbox}`} />
                    <label className="text-[14px]" htmlFor=""> 30 Seconds</label>
                </div>

                <div className={`${flex}`}>
                    <input type="radio" name="categoria2" className={`${checkbox}`} />
                    <label className="text-[14px]" htmlFor=""> All The Sound</label>
                </div>

            </section>

            <hr className="h-[2px] bg-white rounded-full " />

            <section className="flex flex-col gap-2.5 font-bold py-2.5">

                <h4 className="font-bold">Downloads</h4>

                <div className={`${flex}`}>
                    <input type="radio" name="categoria3" id="cat1" className={`${checkbox}`} />
                    <label className=" text-[14px]" htmlFor="cat1"> The Most Downloads</label>
                </div>

                <div className={`${flex}`}>
                    <input type="radio" name="categoria3" id="cat2" className={`${checkbox}`} />
                    <label className="text-[14px]" htmlFor="cat2"> Least Downloads</label>
                </div>
            </section>
        </form >
    );
}

export default FilterContainer;