import { useAudioController } from "@/hook/audioController";
import imagemSound from "@/assets/image/lucas.jpg";

import adio from '@/assets/audio/Laura Marling - Night After Night Legendado(MP3_320K).mp3';

import downl from "@/assets/icons/download.svg"
import play from "@/assets/icons/play.svg"
import Waveform from "./WaveForm";



function ContainerSound() {

    const SyTime = "font-light text-[0.875rem]";
    const SyButton = "bg-black/20 rounded-full || border-1 border-white || px-2.5 py-[5px]";
    const SyButton2 = "bg-black/20 rounded-full || border-1 border-white || px-2.5 py-[5px] || flex items-center gap-3";

    const {
        audioRef,
        isPlaying,
        currentTime,
        duration,
        togglePlayPause,
        handleTimeUpdate,
        handleLoadedMetadata,
        handleSeekChange,
        handleDownload,
        formatTime,
    } = useAudioController();


    return (
        <section className="bg-white/20 backdrop-blur-xl rounded-2xl border-1 border-white p-2.5 flex flex-col gap-2.5 min-[990px]:flex-row min-[990px]:gap-0">
            <audio ref={audioRef} src={adio} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata} />

            <div className="flex gap-2.5 min-w-[28%] || min-[990px]:items-center  ">
                <img src={imagemSound} alt="lucas pedrozo" className="w-14 rounded-[10px] min-[990px]:w-20" />

                <div>
                    <p className="font-semibold text-[0.875rem]">DIE WITH A SMILE</p>
                    <p className="font-light text-[0.75rem]">LADY GAGA E BRUNO MARS</p>
                </div>

            </div>

            <div className="flex justify-between items-center gap-2.5 min-w-[72%] ">
                <div className="flex items-center gap-2.5">

                    <button onClick={togglePlayPause} className={`${SyButton}`}>
                        {isPlaying ? (
                            <img src={downl} />
                        ) : (
                            <img src={play} className="pl-[2px]" />
                        )}
                    </button>

                    <div className="flex gap-1">
                        <span className={`${SyTime}`}>{formatTime(currentTime)}</span>
                        <span className={`${SyTime}`}>/</span>
                        <span className={`${SyTime}`}>{formatTime(duration)}</span>
                    </div>
                </div>

                <Waveform id="seekBar" min="0" max={duration.toString()} value={currentTime.toString()} onChange={handleSeekChange} className="hidden min-[570px]:flex w-[65%]" />

                <div className={`${SyButton2}`}>
                    <button onClick={handleDownload}>
                        <img src={downl} />
                    </button>
                    <button onClick={handleDownload}>
                        <img src={downl} />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ContainerSound;