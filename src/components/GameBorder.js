import React from "react";
import AudioPlayer from "./AudioPlayer";

const GameBorder = ({ children }) => {
  return (
    <div className="border-grey h-[464px] w-[784px] border-4 bg-black relative">
      {children}
      <AudioPlayer />
    </div>
  );
};

export default GameBorder;
