import { useRef, useState } from "react";

export function useAudioController() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Função para alternar entre play e pause
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        console.log("Pausando áudio...");
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        console.log("Reproduzindo áudio...");
        audioRef.current.play().catch((error) => {
          console.error("Erro ao tentar reproduzir áudio:", error);
        });
        setIsPlaying(true);
      }
    } else {
      console.log("audioRef não está disponível.");
    }
  };

  // Atualiza o tempo atual do áudio
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // Atualiza a duração do áudio quando os metadados são carregados
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      console.log("Metadados carregados:", audioRef.current.duration);
      setDuration(audioRef.current.duration);
    }
  };

  // Atualiza a posição do áudio com base no valor da seek bar
  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const newTime = parseFloat(e.target.value);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Função para realizar o download do áudio
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = audioRef.current?.src || "";
    a.download = "audio.mp3";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Formata o tempo (segundos) para o formato mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins < 10 ? "0" + mins : mins}:${secs < 10 ? "0" + secs : secs}`;
  };

  return {
    isPlaying,
    setIsPlaying,
    currentTime,
    setCurrentTime,
    duration,
    setDuration,
    togglePlayPause,
    handleTimeUpdate,
    handleLoadedMetadata,
    handleSeekChange,
    handleDownload,
    formatTime,
    audioRef,
  };
}
