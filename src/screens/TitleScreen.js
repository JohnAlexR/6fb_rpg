import React, { useState } from "react";
import { Logo } from "../assets/Logo";
import { useScreen } from "../App";
import { useAudio } from "../components/AudioPlayer";

const TitleScreen = () => {
  const { screenIndex, setScreenIndex } = useScreen();
  const { setCurrentTrack } = useAudio();
  const [hover, setHover] = useState(false);

  return (
    <div className="h-full w-full flex flex-grow items-center justify-center flex-col">
      <div className="bounce">
        <Logo />
      </div>
      <p className="font-press-start text-white">
        can you make it through tour?
      </p>
      <button
        className="p-6 mb-10"
        onClick={() => {
          setCurrentTrack("/crazyeyes.m4a");
          setScreenIndex(1);
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <p
          className={`font-bold text-2xl font-press-start border-white border-2 px-2 py-1 ${
            hover ? "text-black bg-white" : "text-white"
          }`}
        >
          start
        </p>
      </button>
      <p className="text-white bottom-0 right-[65px] absolute font-press-start text-sm">
        sound recommended !
      </p>
    </div>
  );
};

export default TitleScreen;
