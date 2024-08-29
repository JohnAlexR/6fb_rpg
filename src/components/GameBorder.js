import React from "react";
import AudioPlayer from "./AudioPlayer";

const GameBorder = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-[1000px] h-[750px]">
      <div className="border-grey h-[464px] w-[784px] border-4 bg-black relative">
        {children}
        <AudioPlayer />
      </div>
    </div>
  );
};

export default GameBorder;
