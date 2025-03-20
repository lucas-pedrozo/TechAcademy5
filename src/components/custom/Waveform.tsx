import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import ImgAudio from "../../assets/logo/lucas.jpg";

import playIcon from "../../assets/play.svg";
import pauseIcon from "../../assets/pause.svg";
interface WaveformProps {
  audioUrl: string;
}

const Waveform: React.FC<WaveformProps> = ({ audioUrl }) => {
  const waveformRef = useRef<HTMLDivElement | null>(null);
  const [wavesurfer, setWaveSurfer] = useState<WaveSurfer | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false); // Estado para controle do ícone

  useEffect(() => {
    if (!waveformRef.current) return;

    const ws = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#7d7d7d",
      progressColor: "#ffffff",
      cursorColor: "#000000",
      barWidth: 3,
      barGap: 2,
      height: 40,
      width: 300,
    });

    ws.load(audioUrl);
    setWaveSurfer(ws);

    ws.on("ready", () => {
      setDuration(ws.getDuration());
    });

    ws.on("audioprocess", () => {
      setCurrentTime(ws.getCurrentTime());
    });

    ws.on("play", () => setIsPlaying(true)); // Atualiza quando começar a tocar
    ws.on("pause", () => setIsPlaying(false)); // Atualiza quando pausar

    return () => ws.destroy();
  }, [audioUrl]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const togglePlayPause = () => {
    if (wavesurfer) {
      wavesurfer.playPause();
    }
  };

  return (
    <div className="flex flex-col min-[880px]:flex-row justify-between p-3 gap-2.5 bg-[rgba(255,255,255,0.2)] backdrop-blur-xl border rounded-[20px] ">
      <section className="flex items-center gap-2.5 min-w-[28%]">
        <img src={ImgAudio} className="max-w-[60px] rounded-[10px]" alt="Audio Cover" />
        <div>
          <h4 className="text-white text-[14px] font-bold">DIE WITH A SMILE</h4>
          <h4 className="text-white text-[12px] font-light">LADY GAGA E BRUNO MARKS</h4>
        </div>
      </section>

      <section className="flex items-center justify-between w-full gap-2.5">
        <div className="flex gap-2.5 items-center">
          <button onClick={togglePlayPause} className="border rounded-full overflow-hidden bg-[rgba(29,29,29,0.42)] p-[6px_15px]   ">
            <img
              src={isPlaying ? pauseIcon : playIcon}
              alt={isPlaying ? "Pause Icon" : "Play Icon"}
            />
          </button>
          <span className="text-white min-w-[80px]">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>

        <div ref={waveformRef} className="waveform-container hidden min-[600px]:flex"></div>

        <section className="flex item gap-5 p-[4px_10px] pt-[6px] border rounded-full bg-[rgba(29,29,29,0.42)]">
          <button>
            <i className="bi bi-cloud-download text-[18px]"></i>
          </button>
          <button>
            <i className="bi bi-star text-[18px]"></i>
          </button>
        </section>

      </section>
    </div>
  );
};

export default Waveform;
