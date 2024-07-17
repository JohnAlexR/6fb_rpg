import React, { useRef, useState } from "react";
import { MutedAudio, PlayingAudio } from "../assets/audio";

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="absolute bottom-0 right-2">
      <audio ref={audioRef} src="/naptown.mp3" />
      <button onClick={handlePlayPause} className="text-black text-xl">
        {isPlaying ? <PlayingAudio /> : <MutedAudio />}
      </button>
    </div>
  );
};

export default AudioPlayer;
