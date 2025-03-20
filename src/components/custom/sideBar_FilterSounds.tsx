
import ButtonGlobal from "./ButtonGlobal";

export function AppSidebar() {
  return (

    <div className="w-[260px]  backdrop-blur-xl bg-[rgba(0,0,0,0.2)] border-[1px] border-white p-[10px] rounded-[20px] shadow-[0px_2px_10px_rgba(0,0,0,0.6)]">
      <h3 className="text-[20px] text-center font-bold">Filtering</h3>
      <hr className="h-[2px] bg-white rounded-full " />

      <section className="flex flex-col gap-2.5 font-bold py-2.5">
        <h4 className=" font-bold">Categoria</h4>

        <div
          className="flex items-center gap-2">
          <input
            type="radio"
            name="categoria1" className="appearance-none w-6 h-6 border-2 border-white  rounded-full relative checked:bg-white-500 checked:border-white-500  checked:after:content-[''] checked:after:block checked:after:w-3 checked:after:h-3  checked:after:bg-white checked:after:rounded-full  checked:after:absolute checked:after:top-1/2 checked:after:left-1/2  checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer transition-all"
          />
          <label className="text-[14px]" htmlFor="">
            Background Sounds
          </label>
        </div>

        <div className="flex items-center gap-2">
          <input type="radio" name="categoria1" className="appearance-none w-6 h-6 border-2 border-white  rounded-full relative  checked:bg-white-500 checked:border-white-500  checked:after:content-[''] checked:after:block checked:after:w-3 checked:after:h-3  checked:after:bg-white checked:after:rounded-full  checked:after:absolute checked:after:top-1/2 checked:after:left-1/2  checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer transition-all"
          />
          <label className="text-[14px]" htmlFor="">
            Overlays
          </label>
        </div>

        <div className="flex items-center gap-2">
          <input type="radio" name="categoria1" className="appearance-none w-6 h-6 border-2 border-white  rounded-full relative  checked:bg-white-500 checked:border-white-500  checked:after:content-[''] checked:after:block checked:after:w-3 checked:after:h-3  checked:after:bg-white checked:after:rounded-full  checked:after:absolute checked:after:top-1/2 checked:after:left-1/2  checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer transition-all"
          />
          <label className="text-[14px]" htmlFor="">
            Transições
          </label>
        </div>

        <div className="flex items-center gap-2">
          <input type="radio" name="categoria1" className="appearance-none w-6 h-6 border-2 border-white  rounded-full relative  checked:bg-white-500 checked:border-white-500  checked:after:content-[''] checked:after:block checked:after:w-3 checked:after:h-3  checked:after:bg-white checked:after:rounded-full  checked:after:absolute checked:after:top-1/2 checked:after:left-1/2  checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer transition-all"
          />
          <label className="text-[14px]" htmlFor="">
            Sons de Ambiente
          </label>
        </div>

      </section>

      <hr className="h-[2px] bg-white rounded-full" />

      <section className="flex flex-col gap-2.5 font-bold py-2.5">

        <h4 className=" font-bold">All the Sound</h4>

        <div className="flex items-center gap-2">
          <input type="radio" name="categoria2" className="appearance-none w-6 h-6 border-2 border-white rounded-full relative  checked:bg-white-500 checked:border-white-500  checked:after:content-[''] checked:after:block checked:after:w-3 checked:after:h-3  checked:after:bg-white checked:after:rounded-full  checked:after:absolute checked:after:top-1/2 checked:after:left-1/2  checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer transition-all"
          />
          <label className="text-[14px]" htmlFor="">
            5 Seconds
          </label>
        </div>

        <div className="flex items-center gap-2">
          <input type="radio" name="categoria2" className="appearance-none w-6 h-6 border-2 border-white  rounded-full relative  checked:bg-white-500 checked:border-white-500  checked:after:content-[''] checked:after:block checked:after:w-3 checked:after:h-3  checked:after:bg-white checked:after:rounded-full  checked:after:absolute checked:after:top-1/2 checked:after:left-1/2  checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer transition-all"
          />
          <label className="text-[14px]" htmlFor="">
            10 Seconds
          </label>
        </div>

        <div className="flex items-center gap-2">
          <input type="radio" name="categoria2" className="appearance-none w-6 h-6 border-2 border-white  rounded-full relative  checked:bg-white-500 checked:border-white-500  checked:after:content-[''] checked:after:block checked:after:w-3 checked:after:h-3  checked:after:bg-white checked:after:rounded-full  checked:after:absolute checked:after:top-1/2 checked:after:left-1/2  checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer transition-all"
          />
          <label className="text-[14px]" htmlFor="">
            15 Seconds
          </label>
        </div>

        <div className="flex items-center gap-2">
          <input type="radio" name="categoria2" className="appearance-none w-6 h-6 border-2 border-white  rounded-full relative checked:bg-white-500 checked:border-white-500  checked:after:content-[''] checked:after:block checked:after:w-3 checked:after:h-3  checked:after:bg-white checked:after:rounded-full  checked:after:absolute checked:after:top-1/2 checked:after:left-1/2  checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer transition-all"
          />
          <label className="text-[14px]" htmlFor="">
            20 Seconds
          </label>
        </div>

        <div className="flex items-center gap-2">
          <input type="radio" name="categoria2" className="appearance-none w-6 h-6 border-2 border-white  rounded-full relative checked:bg-white-500 checked:border-white-500 checked:after:content-[''] checked:after:block checked:after:w-3 checked:after:h-3 checked:after:bg-white checked:after:rounded-full checked:after:absolute checked:after:top-1/2 checked:after:left-1/2  checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer transition-all"
          />
          <label className="text-[14px]" htmlFor="">
            25 Seconds
          </label>
        </div>

        <div className="flex items-center gap-2">
          <input type="radio" name="categoria2" className="appearance-none w-6 h-6 border-2 border-white  rounded-full relative checked:bg-white-500 checked:border-white-500  checked:after:content-[''] checked:after:block checked:after:w-3 checked:after:h-3 checked:after:bg-white checked:after:rounded-full checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer transition-all"
          />
          <label className="text-[14px]" htmlFor="">
            30 Seconds
          </label>
        </div>

        <div className="flex items-center gap-2">
          <input type="radio" name="categoria2" className="appearance-none w-6 h-6 border-2 border-white  rounded-full relative checked:bg-white-500 checked:border-white-500 checked:after:content-[''] checked:after:block checked:after:w-3 checked:after:h-3 checked:after:bg-white checked:after:rounded-full checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer transition-all"
          />
          <label className="text-[14px]" htmlFor="">
            All The Sound
          </label>
        </div>
      </section>

      <hr className="h-[2px] bg-white rounded-full " />

      <section className="flex flex-col gap-2.5 font-bold py-2.5">

        <h4 className="font-bold">Downloads</h4>

        <div className="flex items-center gap-2">
          <input type="radio" name="categoria3" className="appearance-none w-6 h-6 border-2 border-white  rounded-full relative checked:bg-white-500 checked:border-white-500 checked:after:content-[''] checked:after:block checked:after:w-3 checked:after:h-3 checked:after:bg-white checked:after:rounded-full checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer transition-all"
          />
          <label className=" text-[14px]" htmlFor="">
            The Most Downloads
          </label>
        </div>

        <div className="flex items-center gap-2">
          <input type="radio" name="categoria3" className="appearance-none w-6 h-6 border-2  border-white rounded-full relative checked:bg-white-500 checked:border-white-500 checked:after:content-[''] checked:after:block checked:after:w-3 checked:after:h-3 checked:after:bg-white checked:after:rounded-full checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer transition-all"
          />
          <label className="text-[14px]" htmlFor="">
            Least Downloads
          </label>
        </div>

      </section>

      <hr className="h-[2px] bg-white rounded-full " />

      <div className="flex justify-end pt-[10px] ">
        <ButtonGlobal>Aplicar</ButtonGlobal>
      </div>
    </div>
  );
}
