import React, { useState } from "react";
import { Stats } from "../components/Stats";
import { fetchQuestion } from "../utils/fetchQuestion";
import { questions } from "../data/questions";
import { useScreen } from "../App";
import { getRandomIntInclusive } from "../utils/fetchQuestion";

import { updateUser } from "../data/user";

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

const Result = ({ question, selectedAnswer, setStatChanges }) => {
  const calculateBranchingStats = (answer) => {
    setStatChanges(answer);
    updateUser({
      points: answer.points,
      money: answer.money,
      fans: answer.fans,
      vibes: answer.vibes,
    });
  };

  const answer = question.answers.filter(
    (answer) => answer.id === selectedAnswer
  )[0];

  if (answer.isBranching === true) {
    const index = getRandomIntInclusive(0, answer.result.length - 1);
    calculateBranchingStats(answer.result[index]);
    return (
      <div className="w-[400px] h-[200px] mt-4 flex justify-center items-center">
        <p className="text-white font-press-start text-center text-sm">
          {answer.result[index].text}
        </p>
      </div>
    );
  }

  return (
    <div className="w-[400px] h-[200px] mt-4 flex justify-center items-center">
      <p className="text-white font-press-start text-center text-sm">
        {answer.result}
      </p>
    </div>
  );
};

export const Question = () => {
  const { screenIndex, setScreenIndex } = useScreen();
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [question, setQuestion] = useState(questions[0]);
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [statChanges, setStatChanges] = useState();

  const calculateStats = (selectedAnswer, question) => {
    const answer = question.answers.filter(
      (answer) => answer.id === selectedAnswer
    )[0];

    setStatChanges(answer);

    updateUser({
      points: answer.points,
      money: answer.money,
      fans: answer.fans,
      vibes: answer.vibes,
    });
  };

  const startEndGame = () => {
    setScreenIndex(5);
  };

  const submit = () => {
    const answer = question.answers.filter(
      (answer) => answer.id === selectedAnswer
    )[0];

    if (answer.nextQuestion) {
      const nextQuestion = questions.filter(
        (question) => question.id === answer.nextQuestion
      )[0];
      setQuestion(nextQuestion);
    } else {
      const newQuestion = fetchQuestion();
      if (newQuestion === "end") {
        startEndGame();
      } else {
        setQuestion(newQuestion);
      }
    }
    setIsResultVisible(false);
    setStatChanges(null);
    setSelectedAnswer("");
  };

  return (
    <div className="relative h-full">
      <div className="flex flex-row relative">
        <div className="relative">
          <Stats />
          {isResultVisible && (
            <div className="flex flex-col absolute right-0 top-7">
              <p
                className={`font-press-start ${
                  statChanges.points >= 0 ? "text-green-400" : "text-red-500"
                }`}
              >{`${statChanges.points >= 0 ? "+" : ""}${
                statChanges.points
              }`}</p>
              <p
                className={`font-press-start ${
                  statChanges.fans >= 0 ? "text-green-400" : "text-red-500"
                }`}
              >{`${statChanges.fans >= 0 ? "+" : ""}${statChanges.fans}`}</p>
              <p
                className={`font-press-start ${
                  statChanges.vibes >= 0 ? "text-green-400" : "text-red-500"
                }`}
              >{`${statChanges.vibes >= 0 ? "+" : ""}${statChanges.vibes}`}</p>
              <p
                className={`font-press-start ${
                  statChanges.money >= 0 ? "text-green-400" : "text-red-500"
                }`}
              >{`${statChanges.money >= 0 ? "+" : ""}${statChanges.money}`}</p>
            </div>
          )}
        </div>

        <div className="flex items-center text-center justify-center w-[500px]">
          <p className="font-press-start text-white text-center">
            {question.question}
          </p>
        </div>
      </div>
      {!isResultVisible && (
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
      )}
      <button
        className="p-6 mb-10 absolute bottom-[-20px] right-0 left-0"
        onClick={() => {
          if (isResultVisible) {
            submit();
          } else {
            calculateStats(selectedAnswer, question);
            setIsResultVisible(true);
          }
        }}
      >
        <p className="text-white font-bold text-2xl font-press-start text-center">
          continue
        </p>
      </button>
      {isResultVisible && (
        <div className="flex justify-center items-center">
          <Result
            question={question}
            selectedAnswer={selectedAnswer}
            setStatChanges={setStatChanges}
          />
        </div>
      )}
    </div>
  );
};
