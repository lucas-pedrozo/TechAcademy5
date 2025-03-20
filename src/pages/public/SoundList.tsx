import { AppSidebar } from "../../components/custom/sideBar_FilterSounds";
import Waveform from "../../components/custom/Waveform";
import testeAudio from "../../assets/audio/teste.mp3";

import pesquisa from "../../assets/pesquisa.svg"

function SoundList() {
  return (
    <div className="max-w-[1220px] m-auto px-[10px] py-[50px]">

      <div className="flex items-center justify-between gap-2.5 px-5 py-2.5 max-w-[600px] m-auto bg-[rgba(255,255,255,0.2)] backdrop-blur-xl border rounded-[50px]">
        <input type="text" placeholder="Search..." className="placeholder:text-white w-full  focus:outline-none focus:border-white" />
        <img src={pesquisa} alt="pesquesar" className="cursor-pointer" />
      </div>

      <div className="flex justify-between px-5 pb-2.5 pt-[40px]">
        <span className="text-xl font-bold text-white bg-[rgba(255,255,255,0.1)] backdrop-blur-xl p-[6px_20px] rounded-[50px] border border-white">
          Search
        </span>
        <button className="font-bold text-black bg-white p-[6px_20px] rounded-[50px] border border-white">
          FILTER
        </button>
      </div>

      <div className="bg-[rgba(225,255,255,0.1)] backdrop-blur-xl border-[1px] border-white shadow-[0px_2px_10px_rgba(0,0,0,0.6)] rounded-[20px] p-2.5
      flex gap-2.5">
        <div className="hidden min-[900px]:flex ">
          <AppSidebar />
        </div>
        <div className="flex flex-col gap-2.5 w-full">
          <Waveform audioUrl={testeAudio} />
          <Waveform audioUrl={testeAudio} />
          <Waveform audioUrl={testeAudio} />
          <Waveform audioUrl={testeAudio} />
        </div>
      </div>
    </div>
  );
}

export default SoundList;
