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
      waveColor: "#4f46e5",
      progressColor: "#1d4ed8",
      cursorColor: "#ffffff",
      barWidth: 3,
      barGap: 2,
      responsive: true,
      height: 100,
    });

    ws.load(audioUrl);
    setWaveSurfer(ws);

    return () => ws.destroy();
  }, [audioUrl]);

  return (
    <div>
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
