import React from "react";
import { Stats } from "../components/Stats";

export const Endgame = () => {
  return (
    <div className="h-full w-full flex flex-grow items-center justify-center flex-col">
      <div className="bounce mb-10">
        <Stats />
      </div>
      <p className="font-press-start text-white">THE END</p>
    </div>
  );
};

export default Endgame;
