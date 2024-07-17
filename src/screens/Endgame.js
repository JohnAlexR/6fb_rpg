import React from "react";
import { Stats } from "../components/Stats";
import { clearAnswers, clearQuestionsAsked, resetUser } from "../data/user";
import { useScreen } from "../App";
import { user } from "../data/user";

export const Endgame = () => {
  const { screenIndex, setScreenIndex } = useScreen();

  return (
    <div className="h-full w-full flex flex-grow items-center justify-center flex-col">
      <p className="text-white font-press-start mb-10">Game Over</p>
      <div className="bounce mb-10">
        <Stats />
      </div>
      <div>
        <p className="text-white font-press-start">{`Total Score: ${
          user.points + user.fans + user.money + user.vibes
        }`}</p>
      </div>
      <button
        onClick={() => {
          setScreenIndex(0);
          clearAnswers();
          clearQuestionsAsked();
          resetUser();
        }}
        className="mt-5 border-white border-2 px-2 py-1"
      >
        <p className="text-white font-press-start">reset</p>
      </button>
    </div>
  );
};

export default Endgame;
