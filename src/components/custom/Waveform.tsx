import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

interface WaveformProps {
  audioUrl: string;
}

const Waveform: React.FC<WaveformProps> = ({ audioUrl }) => {
  const waveformRef = useRef<HTMLDivElement | null>(null);
  const [wavesurfer, setWaveSurfer] = useState<WaveSurfer | null>(null);

  useEffect(() => {
    if (!waveformRef.current) return;

    const ws = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#7d7d7d",
      progressColor: "#ffffff",
      cursorColor: "#000000",
      barWidth: 3,
      barGap: 2,
      height: 50,
      width: 800,
    });

    ws.load(audioUrl);
    setWaveSurfer(ws);

    return () => ws.destroy();
  }, [audioUrl]);

  return (
    <div className="flex flex-row items-center">
      <div ref={waveformRef} className="waveform-container"></div>
      <button
        onClick={() => wavesurfer?.playPause()}
        className="p-2 mt-2 bg-blue-500 text-white rounded"
      >
        Play/Pause
      </button>
    </div>
  );
};

export default Waveform;
