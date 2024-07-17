import React, { useState } from "react";
import { Stats } from "../components/Stats";
import { fetchQuestion } from "../utils/fetchQuestion";
import { questions } from "../data/questions";
import { useScreen } from "../App";
import { getRandomIntInclusive } from "../utils/fetchQuestion";

import { updateUser, user } from "../data/user";

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
  const [question, setQuestion] = useState(questions[0]);
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [statChanges, setStatChanges] = useState();
  const [answer, setAnswer] = useState();

  const calculateAnswer = () => {
    const answer = question.answers.filter(
      (answer) => answer.id === selectedAnswer
    )[0];

    if (answer.isBranching && answer.result[0].characterCondition) {
      if (answer.result[0].characterCondition.includes(user.character)) {
        return answer.result[0];
      } else if (answer.result[1].characterCondition.includes(user.character)) {
        return answer.result[1];
      }
    } else if (answer.isBranching === true) {
      if (answer.result[0].inventoryCondition) {
        if (user.inventory === answer.result[0].inventoryCondition) {
          return answer.result[0];
        } else {
          return answer.result[1];
        }
      } else {
        if (answer.result[0].prob) {
          const randomNumber = Math.random();
          const index = randomNumber < answer.result[0].prob ? 0 : 1;
          return answer.result[index];
        } else {
          const index = getRandomIntInclusive(0, answer.result.length - 1);
          return answer.result[index];
        }
      }
    } else {
      return answer;
    }
  };

  const calculateStats = (answer) => {
    setStatChanges(answer);

    const values = answer;
    if (user.character === "john" && values.fans > 0) {
      values.points *= 1.1;
      values.points = Math.round(values.points);
    } else if (user.character === "zach") {
      values.money *= 0.8;
      values.money = Math.round(values.money);
    } else if (user.character === "julia" && values.fans > 0) {
      values.fans *= 1.1;
      values.fans = Math.round(values.fans);
    } else if (user.character === "brian") {
      values.vibes *= 1.1;
      values.vibes = Math.round(values.vibes);
    }

    updateUser({
      points: values.points,
      money: values.money,
      fans: values.fans,
      vibes: values.vibes,
    });
  };

  const startEndGame = () => {
    setScreenIndex(5);
  };

  const triggerLoseCondition = () => {
    setScreenIndex(6);
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
    if (user.money <= 0 || user.fans <= 0 || user.vibes <= 0) {
      triggerLoseCondition();
    }
  };

  return (
    <div className="relative h-full">
      <div className="flex flex-row relative">
        <div className="relative">
          <Stats />
          {isResultVisible && statChanges && (
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
        <div className="flex flex-row items-center justify-center gap-x-5 mt-10 w-[800px] flex-wrap gap-y-3">
          {question &&
            question.answers.map((answer) => {
              if (answer?.inventoryCondition) {
                if (user.inventory.includes(answer.inventoryCondition)) {
                  return (
                    <Answer
                      setSelectedAnswer={setSelectedAnswer}
                      answer={answer}
                      selectedAnswer={selectedAnswer}
                      key={answer.id}
                    />
                  );
                } else {
                  return;
                }
              } else {
                return (
                  <Answer
                    setSelectedAnswer={setSelectedAnswer}
                    answer={answer}
                    selectedAnswer={selectedAnswer}
                    key={answer.id}
                  />
                );
              }
            })}
        </div>
      )}
      <button
        className="p-6 mb-7 absolute bottom-[-20px] right-0 left-0"
        onClick={() => {
          if (isResultVisible) {
            submit();
          } else {
            setIsResultVisible(true);
            const statAnswer = calculateAnswer();
            setAnswer(statAnswer);
            calculateStats(statAnswer);
          }
        }}
      >
        <p className="text-white font-bold text-2xl font-press-start text-center">
          continue
        </p>
      </button>
      {isResultVisible && (
        <div className="flex justify-center items-center">
          <div className="w-[400px] h-[200px] mt-4 flex justify-center items-center">
            <p className="text-white font-press-start text-center text-sm">
              {answer.result}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
