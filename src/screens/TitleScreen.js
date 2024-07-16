import React from "react";
import { Logo } from "../assets/Logo";
import { useScreen } from "../App";

const TitleScreen = () => {
  const { screenIndex, setScreenIndex } = useScreen();

  return (
    <div className="h-full w-full flex flex-grow items-center justify-center flex-col">
      <div className="bounce">
        <Logo />
      </div>
      <p className="font-press-start text-white">
        can you make it through tour?
      </p>
      <button className="p-6 mb-10" onClick={() => setScreenIndex(1)}>
        <p className="text-white font-bold text-2xl font-press-start">start</p>
      </button>
    </div>
  );
};

export default TitleScreen;
