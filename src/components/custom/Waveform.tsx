import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import ImgAudio from "../../assets/logo/lucas.jpg";
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
    <div className=" flex w-full items-center gap-18 border p-3 rounded-[10px] bg-[rgba(255,255,255,0.1)] backdrop-blur-xl">
      {/* Seção de imagem e título */}
      <section className="flex items-center gap-4">
        <img
          src={ImgAudio}
          className="w-[70px] rounded-[10px]"
          alt="Audio Cover"
        />
        <div className="flex flex-col ">
          <h4 className="text-white font-bold">Waveform</h4>
          <h4 className="text-white font-[300] text-sm">Waveform</h4>
        </div>
      </section>

      {/* Seção de player e waveform */}
      <section className="flex flex-1 items-center gap-4">
        <button
          onClick={togglePlayPause}
          className="p-[5px] px-[15px] border rounded-full bg-[rgba(29,29,29,0.42)]"
        >
          <i
            className={`bi ${isPlaying ? "bi-pause-fill" : "bi-play-fill"}`}
          ></i>
        </button>

        {/* Tempo */}
        <div className="text-white min-w-[80px]">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>

        {/* Waveform ocupa todo o espaço restante */}
        <div ref={waveformRef} className="waveform-container flex-1"></div>
      </section>

      {/* Seção de botões extras */}
      <section>
        <div className="flex p-[5px] px-[15px] border rounded-full bg-[rgba(29,29,29,0.42)] gap-3">
          <button>
            <i className="bi bi-cloud-download"></i>
          </button>
          <button>
            <i className="bi bi-star"></i>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Waveform;
