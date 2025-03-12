import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import ImgAudio from "../../assets/logo/lucas.jpg";
import { before } from "node:test";
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
    <div className="flex flex-col min-[600px]:flex-row  min-[600px]:justify-around w-full min-[600px]:items-center gap-2 min-[600px]:gap-18 border p-3 rounded-[10px] bg-[rgba(255,255,255,0.1)] backdrop-blur-xl">
      <section className="flex items-center gap-4 ">
        <img src={ImgAudio} className="w-[70px] rounded-[10px]" alt="Audio Cover" />
        <div className="flex flex-col ">
          <h4 className="text-white font-bold">Waveform</h4>
          <h4 className="text-white font-[300] text-sm">Waveform</h4>
        </div>
      </section>

      <section className="flex flex-1 items-center gap-4 justify-between">
        <div className="flex gap-4 items-center">
          <button onClick={togglePlayPause} className=" border rounded-full px-[10px] h-[30px] overflow-hidden bg-[rgba(29,29,29,0.42)]">
            <i className={`bi ${isPlaying ? "bi-pause-fill" : "bi-play-fill"}`}
              style={{ width: "20px", height: "20px important", fontSize: "24px", position: "relative", bottom: "3px", left: "1px" }}></i>
          </button>

          <div className="text-white min-w-[80px]">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>


        <div ref={waveformRef} className="waveform-container hidden min-[600px]:flex"></div>

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
