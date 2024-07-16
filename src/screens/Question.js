import React, { useEffect, useState } from "react";
import { Stats } from "../components/Stats";
import { fetchQuestion } from "../utils/fetchQuestion";
import { questions } from "../data/questions";
import { answers } from "../data/user";
import { useScreen } from "../App";

const Answer = ({ setSelectedAnswer, answer, selectedAnswer }) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      className={`text-white border-slate-300 border-2 px-3 py-3 ${
        hover === true && "bg-white"
      } ${selectedAnswer === answer.id && "text-black bg-yellow-300"}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setSelectedAnswer(answer.id)}
    >
      <p
        className={`text-sm font-press-start ${
          hover === true && "text-black"
        } ${selectedAnswer === answer.id && "text-black"}`}
      >
        {answer.text}
      </p>
    </button>
  );
};

export const Question = () => {
  const { screenIndex, setScreenIndex } = useScreen();
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [hover, setHover] = useState(0);
  const [question, setQuestion] = useState(questions[0]);

  const startEndGame = () => {
    setScreenIndex(5);
  };

  const submit = () => {
    const newQuestion = fetchQuestion();
    if (newQuestion === "end") {
      startEndGame();
    }
    setQuestion(newQuestion);
  };

  return (
    <div className="relative h-full">
      <div className="flex flex-row">
        <Stats />
        <div className="flex items-center text-center justify-center w-[500px]">
          <p className="font-press-start text-white text-center">
            {question.question}
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-x-10 mt-10 w-[800px] flex-wrap gap-y-10">
        {question &&
          question.answers.map((answer) => {
            return (
              <Answer
                setSelectedAnswer={setSelectedAnswer}
                answer={answer}
                selectedAnswer={selectedAnswer}
                key={answer.id}
              />
            );
          })}
      </div>
      <button
        className="p-6 mb-10 absolute bottom-[-20px] right-0 left-0"
        onClick={() => submit()}
      >
        <p className="text-white font-bold text-2xl font-press-start text-center">
          continue
        </p>
      </button>
    </div>
  );
};
