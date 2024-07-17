import React from "react";
import { Stats } from "../components/Stats";
import { useScreen } from "../App";
import { user } from "../data/user";

export const Congrats = () => {
  const { screenIndex, setScreenIndex } = useScreen();

  return (
    <div className="h-full w-full flex flex-grow items-center justify-center flex-col">
      <p className="text-white font-press-start mb-6">
        You made it through tour!
      </p>
      <div className="bounce mb-10">
        <Stats />
      </div>
      <div>
        <p className="text-white font-press-start">{`Your Score: ${
          user.points + user.fans + user.vibes
        }`}</p>
      </div>
      <button
        onClick={() => {
          setScreenIndex(6);
        }}
        className="mt-5 border-white border-2 px-2 py-1 mb-2"
      >
        <p className="text-white font-press-start">continue</p>
      </button>
    </div>
  );
};

export default Congrats;
