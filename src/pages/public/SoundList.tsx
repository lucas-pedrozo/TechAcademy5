import { SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { AppSidebar } from "../../components/custom/sideBar_FilterSounds";
import Waveform from "../../components/custom/Waveform";
interface SoundListProps {
  children: React.ReactNode;
}

function SoundList({ children }: SoundListProps) {
  return (
    <>
      <main className="max-w-[1220px] px-[10px] py-[40px] m-auto overflow-hidden">
        <div className="Card bg-[rgba(255,255,255,0.1)] backdrop-blur-xl border-[1px] border-white p-[15px] rounded-[20px] shadow-[0px_2px_10px_rgba(0,0,0,0.6)] h-[670px]  overflow-y-scroll custom-scrollbar">
          <div className="flex">
            {/* <AppSidebar></AppSidebar> */}

            <SidebarProvider>
              <AppSidebar />
              <main>
                <SidebarTrigger />
                {children}
              </main>
            </SidebarProvider>

            <section className="pl-[11px] ">
              <h1>Sound List</h1>

              <Waveform audioUrl="/path/to/audio/file.mp3" />
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default SoundList;
