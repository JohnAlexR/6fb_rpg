import React, { useState } from "react";
import { Stats } from "../components/Stats";
import { fetchQuestion } from "../utils/fetchQuestion";
import { questions } from "../data/questions";
import { useScreen } from "../App";
import { getRandomIntInclusive } from "../utils/fetchQuestion";
import { answers, updateAnswer, updateQuestions } from "../data/user";
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore/lite";
import {
  Julia,
  JohnAlex,
  Zach,
  Dom,
  Elliott,
  Brian,
} from "../assets/characters";

import { updateUser, user, questionsAsked } from "../data/user";

const DomLostModal = ({ onClose }) => {
  const lossCondition =
    user.money <= 0 ? "money" : user.fans <= 0 ? "fans" : "vibes";
  return (
    <div className="border-white border-2 h-full w-full absolute top-0 bg-black flex-col justify-center items-center px-10 text-center">
      <p className="text-white font-press-start mt-20">{`You ran out of ${lossCondition}! But Dom doesn't give up easily`}</p>
      <button
        className="p-2 mt-20 border-white border-2"
        onClick={() => {
          if (lossCondition === "money") {
            updateUser({ money: 500 });
          } else if (lossCondition === "fans") {
            updateUser({ fans: 100 });
          } else {
            updateUser({ vibes: 100 });
          }
          onClose();
        }}
      >
        <p className="text-white font-press-start">{`keep going ${
          lossCondition === "money"
            ? "(+$500)"
            : lossCondition === "fans"
            ? "(+100 fans)"
            : "(+100 vibes)"
        }`}</p>
      </button>
    </div>
  );
};

const CharacterIcon = () => {
  return (
    <div className="flex absolute justify-center items-center bottom-0 right-0">
      {user.character === "julia" && <Julia size={"150"} />}
      {user.character === "john" && <JohnAlex size={"150"} />}
      {user.character === "elliott" && <Elliott size={"150"} />}
      {user.character === "zach" && <Zach size={"150"} />}
      {user.character === "dom" && <Dom size={"150"} />}
      {user.character === "brian" && <Brian size={"150"} />}
    </div>
  );
};

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
  const [domLostModalIsVibile, setDomLostModalIsVisible] = useState(false);
  const [hasDomLost, setHasDomLost] = useState(false);

  const determineRandomEncounter = () => {
    let tireProbability = 0.01;
    let dogProbability = 0.05;
    let earplugProbability = 0.07;
    let recordProbability = 0.1;

    if (!answers.includes("5c") || questionsAsked.includes("21")) {
      recordProbability = 0;
    }

    if (questionsAsked.includes("12")) {
      tireProbability = 0;
    }

    if (questionsAsked.includes("13")) {
      dogProbability = 0;
    }

    if (questionsAsked.includes("19") || questionsAsked.length < 5) {
      earplugProbability = 0;
    }

    const randomNumber = Math.random();
    if (randomNumber < tireProbability) {
      return "tire";
    } else if (randomNumber < dogProbability) {
      return "dog";
    } else if (randomNumber < earplugProbability) {
      return "earplug";
    } else if (randomNumber < recordProbability) {
      return "record";
    } else {
      return null;
    }
  };

  const calculateAnswer = () => {
    const answer = question.answers.filter(
      (answer) => answer.id === selectedAnswer
    )[0];

    if (
      answer.isBranching &&
      answer.result[0].inventoryCondition === "lucky shoes" &&
      user.character === "elliott"
    ) {
      return answer.result[0];
    }

    if (answer.isBranching && answer.result[0].characterCondition) {
      if (answer.result[0].characterCondition.includes(user.character)) {
        return answer.result[0];
      } else if (answer.result[1].characterCondition.includes(user.character)) {
        return answer.result[1];
      }
    } else if (answer.isBranching === true) {
      if (answer.result[0].inventoryCondition) {
        if (user.inventory === answer.result[0].inventoryCondition) {
          user.inventory = "empty";
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

    if (answers.includes("20a")) {
      values.money += 50;
    } else if (answers.includes("20b")) {
      values.money += 100;
    } else if (answers.includes("20d")) {
      values.fans += 20;
    }
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

    if (typeof values.inventory === "string") {
      updateUser({
        points: values.points,
        money: values.money,
        fans: values.fans,
        vibes: values.vibes,
        inventory: values.inventory,
      });
    } else {
      updateUser({
        points: values.points,
        money: values.money,
        fans: values.fans,
        vibes: values.vibes,
      });
    }
  };

  const startEndGame = async () => {
    var ref = collection(db, "scores");

    const score = user.points + user.fans + user.vibes;

    await addDoc(ref, { name: user.name, score: score })
      .then(() => {
        console.log("data added successfully");
      })
      .catch((error) => {
        alert(error);
      });

    setScreenIndex(5);
  };

  const triggerLoseCondition = () => {
    setScreenIndex(7);
  };

  const submit = () => {
    const answer = question.answers.filter(
      (answer) => answer.id === selectedAnswer
    )[0];
    updateAnswer(selectedAnswer);
    if (question.id === "13" && user.inventory === "dog treats") {
      const treatQuestion = questions.filter(
        (question) => question.id === "14"
      )[0];
      setQuestion(treatQuestion);
    } else if (answer.nextQuestion) {
      const nextQuestion = questions.filter(
        (question) => question.id === answer.nextQuestion
      )[0];
      setQuestion(nextQuestion);
    } else {
      const randomEncounter = determineRandomEncounter();
      if (randomEncounter) {
        if (randomEncounter === "dog") {
          const dogQuestion = questions.filter(
            (question) => question.id === "13"
          )[0];
          setQuestion(dogQuestion);
          updateQuestions("13");
        } else if (randomEncounter === "tire") {
          const tireQuestion = questions.filter(
            (question) => question.id === "12"
          )[0];
          setQuestion(tireQuestion);
          updateQuestions("12");
        } else if (randomEncounter === "earplug") {
          const earplugQuestion = questions.filter(
            (question) => question.id === "19"
          )[0];
          setQuestion(earplugQuestion);
          updateQuestions("19");
        } else if (randomEncounter === "record") {
          const recordQuestion = questions.filter(
            (question) => question.id === "21"
          )[0];
          setQuestion(recordQuestion);
          updateQuestions("21");
        }
      } else {
        const newQuestion = fetchQuestion();
        if (newQuestion === "end") {
          startEndGame();
        } else {
          setQuestion(newQuestion);
        }
      }
    }
    setIsResultVisible(false);
    setStatChanges(null);
    setSelectedAnswer("");
    if (user.money <= 0 || user.fans <= 0 || user.vibes <= 0) {
      if (user.character === "dom" && !hasDomLost) {
        setDomLostModalIsVisible(true);
        setHasDomLost(true);
      } else {
        triggerLoseCondition();
      }
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

        <div className="flex items-center text-center justify-center w-[500px] px-5">
          <p className="font-press-start text-white text-center ">
            {question.question}
          </p>
        </div>
      </div>
      {!isResultVisible && (
        <div className="flex flex-row items-center justify-center gap-x-5 mt-5 w-[800px] flex-wrap gap-y-3 px-4">
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
        disabled={!selectedAnswer}
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
      {domLostModalIsVibile && (
        <DomLostModal onClose={() => setDomLostModalIsVisible(false)} />
      )}
      <CharacterIcon />
    </div>
  );
};
