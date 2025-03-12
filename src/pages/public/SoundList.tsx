import { SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { AppSidebar } from "../../components/custom/sideBar_FilterSounds";
import Waveform from "../../components/custom/Waveform";
import testeAudio from "../../assets/audio/teste.mp3"; // importando o áudio como variável
import ButtonGlobal from "../../components/custom/ButtonGlobal";

interface SoundListProps {
  children: React.ReactNode;
}

function SoundList({ children }: SoundListProps) {
  return (
    <>
      <main className="max-w-[1220px] px-[10px] py-[40px] m-auto overflow-hidden">
        <div className="flex justify-end p-2 gap-2">

          <SidebarProvider className="min-[600px]:hidden absolute transform -translate-x-1/2 -translate-y-7 z-50">
              <AppSidebar />Filtrar
              <div className="flex align-center justify-center ">
                  <SidebarTrigger>
                  {children}
                  </SidebarTrigger>
                </div>
            </SidebarProvider>
        </div>

        <div className="Card bg-[rgba(255,255,255,0.1)] backdrop-blur-xl border-[1px] border-white p-[15px] rounded-[20px] shadow-[0px_2px_10px_rgba(0,0,0,0.6)] h-[670px]  overflow-y-scroll custom-scrollbar">
          <div className="flex">
            <SidebarProvider>
              <AppSidebar />
              <main className="hidden md:block w-full">
                <SidebarTrigger />
                {children}
              </main>
            </SidebarProvider>

            <section className="pl-[0px] min-[600px]:pl-[11px] flex flex-col gap-2.5 w-full">
              <Waveform audioUrl={testeAudio} />
              <Waveform audioUrl={testeAudio} />
              <Waveform audioUrl={testeAudio} />
              <Waveform audioUrl={testeAudio} />
              <Waveform audioUrl={testeAudio} />
              <Waveform audioUrl={testeAudio} />
              <Waveform audioUrl={testeAudio} />
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default SoundList;
