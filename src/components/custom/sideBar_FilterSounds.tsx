
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "../ui/sidebar";
import { Button } from "../ui/Button";
import ButtonGlobal from "./ButtonGlobal";

export function AppSidebar() {
  return (
    <Sidebar collapsible="offcanvas">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <div className="w-[240px] flex flex-col flex-wrap gap-3 bg-[rgba(255,255,255,0)] border-[1px] border-white p-[15px] rounded-[20px] shadow-[0px_2px_10px_rgba(0,0,0,0.6)]">
                <div>
                  <h3 className="text-xl text-center font-bold">Filtrar</h3>
                </div>
                <hr className="h-[2px] bg-white rounded-full border-none" />

                <section className="font-bold">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-bold">Categoria</h4>

                    <div 
                      className="flex items-center gap-2">
                      <input 
                        type="radio" 
                        name="categoria1" className="appearance-none w-6 h-6 border-2 border-gray-500 rounded-full relative checked:bg-white-500 checked:border-white-500  checked:after:content-[''] checked:after:block checked:after:w-3 checked:after:h-3  checked:after:bg-white checked:after:rounded-full  checked:after:absolute checked:after:top-1/2 checked:after:left-1/2  checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer transition-all"
                      />
                      <label className="text-center" htmlFor="">
                        Background Sounds
                      </label>
                    </div>

                    <div className="flex items-center gap-2">
                      <input type="radio" name="categoria1" className="appearance-none w-6 h-6 border-2 border-gray-500 rounded-full relative  checked:bg-white-500 checked:border-white-500  checked:after:content-[''] checked:after:block checked:after:w-3 checked:after:h-3  checked:after:bg-white checked:after:rounded-full  checked:after:absolute checked:after:top-1/2 checked:after:left-1/2  checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer transition-all"
                      />
                      <label className="text-center" htmlFor="">
                        Overlays
                      </label>
                    </div>

                    <div className="flex items-center gap-2">
                      <input type="radio" name="categoria1" className="appearance-none w-6 h-6 border-2 border-gray-500 rounded-full relative  checked:bg-white-500 checked:border-white-500  checked:after:content-[''] checked:after:block checked:after:w-3 checked:after:h-3  checked:after:bg-white checked:after:rounded-full  checked:after:absolute checked:after:top-1/2 checked:after:left-1/2  checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer transition-all"
                      />
                      <label className="text-center" htmlFor="">
                        Transições
                      </label>
                    </div>

                    <div className="flex items-center gap-2">
                      <input type="radio" name="categoria1" className="appearance-none w-6 h-6 border-2 border-gray-500 rounded-full relative  checked:bg-white-500 checked:border-white-500  checked:after:content-[''] checked:after:block checked:after:w-3 checked:after:h-3  checked:after:bg-white checked:after:rounded-full  checked:after:absolute checked:after:top-1/2 checked:after:left-1/2  checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer transition-all"
                      />
                      <label className="text-center" htmlFor="">
                        Sons de Ambiente
                      </label>
                    </div>
                  </div>
                </section>

                <hr className="h-[2px] bg-white rounded-full border-none" />
                <section className="font-bold">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-bold">Duração</h4>

                    <div className="flex items-center gap-2">
                      <input type="radio" name="categoria2" className="appearance-none w-6 h-6 border-2 border-gray-500 rounded-full relative  checked:bg-white-500 checked:border-white-500  checked:after:content-[''] checked:after:block checked:after:w-3 checked:after:h-3  checked:after:bg-white checked:after:rounded-full  checked:after:absolute checked:after:top-1/2 checked:after:left-1/2  checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer transition-all"
                      />
                      <label className="text-center" htmlFor="">
                        5 Segundos
                      </label>
                    </div>

                    <div className="flex items-center gap-2">
                      <input type="radio" name="categoria2" className="appearance-none w-6 h-6 border-2 border-gray-500 rounded-full relative  checked:bg-white-500 checked:border-white-500  checked:after:content-[''] checked:after:block checked:after:w-3 checked:after:h-3  checked:after:bg-white checked:after:rounded-full  checked:after:absolute checked:after:top-1/2 checked:after:left-1/2  checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer transition-all"
                      />
                      <label className="text-center" htmlFor="">
                        10 Segundos
                      </label>
                    </div>

                    <div className="flex items-center gap-2">
                      <input type="radio" name="categoria2" className="appearance-none w-6 h-6 border-2 border-gray-500 rounded-full relative  checked:bg-white-500 checked:border-white-500  checked:after:content-[''] checked:after:block checked:after:w-3 checked:after:h-3  checked:after:bg-white checked:after:rounded-full  checked:after:absolute checked:after:top-1/2 checked:after:left-1/2  checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer transition-all"
                      />
                      <label className="text-center" htmlFor="">
                        15 Segundos
                      </label>
                    </div>

                    <div className="flex items-center gap-2">
                      <input type="radio" name="categoria2" className="appearance-none w-6 h-6 border-2 border-gray-500 rounded-full relative checked:bg-white-500 checked:border-white-500  checked:after:content-[''] checked:after:block checked:after:w-3 checked:after:h-3  checked:after:bg-white checked:after:rounded-full  checked:after:absolute checked:after:top-1/2 checked:after:left-1/2  checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer transition-all"
                      />
                      <label className="text-center" htmlFor="">
                        20 Segundos
                      </label>
                    </div>

                    <div className="flex items-center gap-2">
                      <input type="radio" name="categoria2" className="appearance-none w-6 h-6 border-2 border-gray-500 rounded-full relative checked:bg-white-500 checked:border-white-500 checked:after:content-[''] checked:after:block checked:after:w-3 checked:after:h-3 checked:after:bg-white checked:after:rounded-full checked:after:absolute checked:after:top-1/2 checked:after:left-1/2  checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer transition-all"
                      />
                      <label className="text-center" htmlFor="">
                        25 Segundos
                      </label>
                    </div>

                    <div className="flex items-center gap-2">
                      <input type="radio" name="categoria2" className="appearance-none w-6 h-6 border-2 border-gray-500 rounded-full relative checked:bg-white-500 checked:border-white-500  checked:after:content-[''] checked:after:block checked:after:w-3 checked:after:h-3 checked:after:bg-white checked:after:rounded-full checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer transition-all"
                      />
                      <label className="text-center" htmlFor="">
                        30 Segundos
                      </label>
                    </div>

                    <div className="flex items-center gap-2">
                      <input type="radio" name="categoria2" className="appearance-none w-6 h-6 border-2 border-gray-500 rounded-full relative checked:bg-white-500 checked:border-white-500 checked:after:content-[''] checked:after:block checked:after:w-3 checked:after:h-3 checked:after:bg-white checked:after:rounded-full checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer transition-all"
                      />
                      <label className="text-center" htmlFor="">
                        Qualquer Duração
                      </label>
                    </div>
                  </div>
                </section>

                <hr className="h-[2px] bg-white rounded-full border-none" />
                <section className="font-bold">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-bold">Duração</h4>

                    <div className="flex items-center gap-2">
                      <input type="radio" name="categoria3" className="appearance-none w-6 h-6 border-2 border-gray-500 rounded-full relative checked:bg-white-500 checked:border-white-500 checked:after:content-[''] checked:after:block checked:after:w-3 checked:after:h-3 checked:after:bg-white checked:after:rounded-full checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer transition-all"
                      />
                      <label className="text-center" htmlFor="">
                        Mais baixados
                      </label>
                    </div>

                    <div className="flex items-center gap-2">
                      <input type="radio" name="categoria3" className="appearance-none w-6 h-6 border-2 border-gray-500 rounded-full relative checked:bg-white-500 checked:border-white-500 checked:after:content-[''] checked:after:block checked:after:w-3 checked:after:h-3 checked:after:bg-white checked:after:rounded-full checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer transition-all"
                      />
                      <label className="text-center" htmlFor="">
                        Mais recentes
                      </label>
                    </div>
                  </div>
                </section>

                <div className="pt-[40px]">
                  <hr className="h-[2px] bg-white rounded-full border-none" />
                </div>


                <div className="flex justify-end pt-[5px]">
                  <ButtonGlobal>Aplicar</ButtonGlobal>
                </div>

                
                <div className="flex justify-end"></div>
              </div>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
