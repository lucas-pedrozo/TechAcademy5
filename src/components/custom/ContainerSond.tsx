import { useAudioController } from "@/hook/audioController";
import imagemSound from "@/assets/image/lucas.jpg";

import favorite from "@/assets/icons/favorite.svg";
import download from "@/assets/icons/download.svg";
import play from "@/assets/icons/play.svg";
import pause from "@/assets/icons/pause.svg";
import Waveform from "./WaveForm";
import ALterSound from "./Alert";

type Props = {
    src: string;
    name: string;
    author: string;

    className1?: string;
    className2?: string;
};

function ContainerSound({ src, name, author, className1, className2 }: Props) {
    const SyTime = "font-light text-[0.875rem]";
    const SyButton = "bg-black/20 rounded-full border border-white px-2.5 py-[5px]";
    const SyButton2 = "bg-black/20 rounded-full border border-white px-2.5 py-[5px] items-center gap-3";

    const {
        audioRef,
        isPlaying,
        currentTime,
        duration,
        togglePlayPause,
        handleTimeUpdate,
        handleLoadedMetadata,
        handleDownload,
        formatTime,
    } = useAudioController();

    const handleSeekChange = (value: number) => {
        if (audioRef.current) {
            audioRef.current.currentTime = value;
        }
    };


    return (
        <section className="bg-white/20 backdrop-blur-xl rounded-2xl border border-white p-2.5 min-[800px]:mr-1.5 flex flex-col gap-2.5 min-[990px]:flex-row min-[990px]:gap-0">
            <audio ref={audioRef} src={src} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata} />

            <div className="flex gap-2.5 min-w-[28%] min-[990px]:items-center">
                <img src={imagemSound} alt="lucas pedrozo" className="w-14 rounded-[10px] min-[990px]:w-20" />

                <div>
                    <p className="font-semibold text-[0.875rem]">{name}</p>
                    <p className="font-light text-[0.75rem]">{author}</p>
                </div>
            </div>

            <div className="flex justify-between items-center gap-2.5 min-w-[72%]">
                <div className="flex items-center gap-2.5">
                    <button onClick={togglePlayPause} className={SyButton}>
                        <img src={isPlaying ? pause : play} className={isPlaying ? "" : "pl-[2px]"} />
                    </button>

                    <div className="flex gap-1">
                        <span className={SyTime}>{formatTime(currentTime)}</span>
                        <span className={SyTime}>/</span>
                        <span className={SyTime}>{formatTime(duration)}</span>
                    </div>
                </div>

                <Waveform
                    id="seekBar"
                    min={0}
                    max={Number(duration)}
                    value={[Number(currentTime)]}
                    onValueChange={(value: number[]) => handleSeekChange(value[0])}
                    className="hidden min-[570px]:flex w-[65%]"
                />

                <div className={`${SyButton2} ${className1}`}>
                    <button onClick={handleDownload} disabled>
                        <img src={download} />
                    </button>
                    <button>
                        <img src={favorite} />
                    </button>
                </div>
                <div className={`${SyButton2} ${className2}`} >
                    <ALterSound />
                    <button>
                        Del
                    </button>
                </div>


            </div>
        </section>
    );
}

export default ContainerSound;
