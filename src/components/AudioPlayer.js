import React, {
  useRef,
  useState,
  createContext,
  useContext,
  useEffect,
} from "react";
import { MutedAudio, PlayingAudio } from "../assets/audio";

const AudioContext = createContext();
export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null);

  return (
    <AudioContext.Provider value={{ currentTrack, setCurrentTrack }}>
      {children}
    </AudioContext.Provider>
  );
};

const AudioPlayer = () => {
  const { currentTrack } = useAudio();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (audioRef?.current && currentTrack) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef?.current && currentTrack) {
      audioRef.current.src = currentTrack;
      audioRef.current.play().catch(() => {});
    }
  }, [currentTrack]);

  return (
    <div className="absolute bottom-0 right-2">
      <audio ref={audioRef} />
      <button
        onClick={() => setIsPlaying((prev) => !prev)}
        className="text-black text-xl"
      >
        {isPlaying ? <PlayingAudio /> : <MutedAudio />}
      </button>
    </div>
  );
};

export default AudioPlayer;
