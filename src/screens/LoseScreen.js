import React from "react";
import { Stats } from "../components/Stats";
import { clearAnswers, clearQuestionsAsked, resetUser } from "../data/user";
import { useScreen } from "../App";

export const LoseScreen = () => {
  const { screenIndex, setScreenIndex } = useScreen();
  return (
    <div className="h-full w-full flex flex-grow items-center justify-center flex-col">
      <div className="bounce mb-10">
        <Stats />
      </div>
      <p className="font-press-start text-white">You lose...</p>
      <button
        onClick={() => {
          setScreenIndex(0);
          clearAnswers();
          clearQuestionsAsked();
          resetUser();
        }}
      >
        <p className="text-white font-press-start">reset</p>
      </button>
    </div>
  );
};

export default LoseScreen;
