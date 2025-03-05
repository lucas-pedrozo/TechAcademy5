import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

interface WaveformProps {
  audioUrl: string;
}

const Waveform: React.FC<WaveformProps> = ({ audioUrl }) => {
  const waveformRef = useRef<HTMLDivElement | null>(null);
  const [wavesurfer, setWaveSurfer] = useState<WaveSurfer | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

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

    return () => ws.destroy();
  }, [audioUrl]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-row items-center gap-4">
      <button
        onClick={() => wavesurfer?.playPause()}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Play/Pause
      </button>
      <div className="text-white">
        {formatTime(currentTime)} / {formatTime(duration)}
      </div>
      <div ref={waveformRef} className="waveform-container p-2"></div>
    </div>
  );
};

export default Waveform;
