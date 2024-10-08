import React, { useState, useEffect } from "react";
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
import {
  EmptyBattery,
  HalfBattery,
  Battery75,
  BatteryFull,
} from "../assets/batteries";
import { MusicianEncounter } from "./MusicianEncounter";
import { Exclamation } from "../assets/musicianEncounter";

import { updateUser, user, questionsAsked } from "../data/user";
import { Guitar, Sunglasses } from "../assets/extras";

const CoffeeMeter = ({ coffeeStatus }) => {
  return (
    <div className="flex flex-row items-center justify-center absolute left-2 bottom-2">
      <p
        className={`font-press-start text-[10px] ${
          coffeeStatus === "full" && "text-white"
        } ${coffeeStatus === "3/4" && "text-yellow-300"} ${
          coffeeStatus === "half" && "text-orange-300"
        } ${coffeeStatus === "empty" && "text-red-500"}`}
      >
        {coffeeStatus === "empty" ? "COFFEE LEVEL CRITICAL" : `Coffee Meter`}
      </p>
      {coffeeStatus === "empty" && <EmptyBattery />}
      {coffeeStatus === "half" && <HalfBattery />}
      {coffeeStatus === "3/4" && <Battery75 />}
      {coffeeStatus === "full" && <BatteryFull />}
    </div>
  );
};

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
            updateUser({ vibes: 50 });
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

export const CharacterIcon = () => {
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
  const [coffeeStatus, setCoffeeStatus] = useState("full");
  const [isMiniGameSetupVisible, setIsMiniGameSetupVisible] = useState(false);

  const checkCoffeeStatus = () => {
    const coffeeQuestions = ["3", "4", "18"];
    const coffeeAnswersList = ["3c", "4d", "18e"];

    const coffeeQuestionsAsked = questionsAsked.filter((q) =>
      coffeeQuestions.includes(q)
    ).length;
    const coffeeAnswers = answers.filter((a) =>
      coffeeAnswersList.includes(a)
    ).length;

    if (
      coffeeStatus === "full" &&
      coffeeQuestionsAsked === 1 &&
      coffeeAnswers === 0
    ) {
      setCoffeeStatus("3/4");
    }
    if (
      coffeeStatus === "3/4" &&
      coffeeQuestionsAsked === 2 &&
      coffeeAnswers === 0
    ) {
      console.log("sethalf");
      setCoffeeStatus("half");
    }
    if (
      coffeeStatus === "half" &&
      coffeeQuestionsAsked === 3 &&
      coffeeAnswers === 0
    ) {
      console.log("setempty");
      setCoffeeStatus("empty");
    }

    if (coffeeAnswers > 0) {
      setCoffeeStatus("full");
    }
  };

  const determineRandomEncounter = () => {
    let tireProbability = 0.01; //1% per turn
    let dogProbability = 0.05; //4% per turn
    let earplugProbability = 0.08; //3% per turn
    let recordProbability = 0;
    let bandProbability = 0.3; //22% per turn
    let sandwichProbability = 0.4; //10% per turn

    if (answers.includes("5c")) {
      recordProbability = 0.15;
    }

    if (questionsAsked.includes("21")) {
      recordProbability = 0;
    }

    if (questionsAsked.includes("12") || questionsAsked.length < 3) {
      tireProbability = 0;
    }

    if (questionsAsked.includes("13") || questionsAsked.length < 3) {
      dogProbability = 0;
    }

    if (questionsAsked.includes("22") || questionsAsked.length < 5) {
      bandProbability = 0;
    }

    if (questionsAsked.includes("23") || questionsAsked.length < 5) {
      sandwichProbability = 0;
    }

    if (
      questionsAsked.includes("19") ||
      questionsAsked.length > 5 ||
      !questionsAsked.includes("18")
    ) {
      earplugProbability = 0;
    }

    const randomNumber = Math.random();

    console.log(randomNumber, "random#");
    console.log(bandProbability, "bandprob");

    if (randomNumber < tireProbability) {
      return "tire";
    } else if (randomNumber < dogProbability) {
      return "dog";
    } else if (randomNumber < earplugProbability) {
      return "earplug";
    } else if (randomNumber < recordProbability) {
      return "record";
    } else if (randomNumber < bandProbability) {
      return "band";
    } else if (randomNumber < sandwichProbability) {
      return "sandwich";
    } else {
      return null;
    }
  };

  const calculateAnswer = (minigameAnswer) => {
    const answer = question.answers.filter(
      (answer) => answer.id === selectedAnswer || answer.id === minigameAnswer
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
      values.money += 25;
    } else if (answers.includes("20b")) {
      values.money += 50;
    } else if (answers.includes("20d")) {
      values.fans += 20;
    }
    if (user.character === "john" && values.fans > 0) {
      values.points *= 1.15;
      values.points = Math.round(values.points);
    } else if (user.character === "zach") {
      values.money *= 0.8;
      values.money = Math.round(values.money);
    } else if (user.character === "julia" && values.fans > 0) {
      values.fans *= 1.15;
      values.fans = Math.round(values.fans);
    } else if (user.character === "brian") {
      values.vibes *= 1.15;
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

    await addDoc(ref, {
      name: user.name,
      score: score,
      character: user.character,
      creationTime: Date.now(),
    })
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

  const selectAnswer = () => {
    setIsResultVisible(true);
    const statAnswer = calculateAnswer();
    setAnswer(statAnswer);
    calculateStats(statAnswer);
  };

  const selectMinigameAnswer = (value, minigameAnswer) => {
    setSelectedAnswer("22b");
    setIsResultVisible(true);
    const statAnswer = calculateAnswer(minigameAnswer);
    setAnswer(statAnswer);
    calculateStats(statAnswer);
  };

  const submit = () => {
    const submitAnswer = question.answers.filter(
      (answer) => answer.id === selectedAnswer
    )[0];

    if (user.money <= 0 || user.fans <= 0 || user.vibes <= 0) {
      if (user.character === "dom" && !hasDomLost) {
        setDomLostModalIsVisible(true);
        setHasDomLost(true);
      } else {
        triggerLoseCondition();
      }
    }

    updateAnswer(selectedAnswer);
    if (user.character === "elliott") {
      checkCoffeeStatus();
    }
    if (question.id === "13" && user.inventory === "dog treats") {
      const treatQuestion = questions.filter(
        (question) => question.id === "14"
      )[0];
      updateQuestions("14");
      setQuestion(treatQuestion);
    } else if (submitAnswer.nextQuestion) {
      const nextQuestion = questions.filter(
        (question) => question.id === submitAnswer.nextQuestion
      )[0];
      updateQuestions(submitAnswer.nextQuestion);
      setQuestion(nextQuestion);
    } else if (answer.nextQuestion) {
      //for random band encounter
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
        } else if (randomEncounter === "band") {
          const bandQuestion = questions.filter(
            (question) => question.id === "22"
          )[0];
          setIsMiniGameSetupVisible(true);
          setQuestion(bandQuestion);
          updateQuestions("22");
        } else if (randomEncounter === "sandwich") {
          const sandwichQuestion = questions.filter(
            (question) => question.id === "23"
          )[0];
          setQuestion(sandwichQuestion);
          updateQuestions("23");
        }
      } else {
        const newQuestion = fetchQuestion();
        if (newQuestion === "end") {
          startEndGame();
          return;
        } else {
          setQuestion(newQuestion);
        }
      }
    }
    setIsResultVisible(false);
    setStatChanges(null);
    setSelectedAnswer("");
  };

  if (question.id === "22" && !isResultVisible && !isMiniGameSetupVisible) {
    return (
      <MusicianEncounter
        selectMinigameAnswer={(v, x) => selectMinigameAnswer(v, x)}
      />
    );
  }

  if (question.id === "22" && !isResultVisible && isMiniGameSetupVisible) {
    return (
      <div className="flex flex-col items-center justify-between border-2 h-full py-3">
        <div className="items-center justify-center pt-40 text-center">
          <p className="text-white font-press-start">
            Time to meet the band you're playing with...
          </p>
          <p className="text-white font-press-start text-xl pt-10">
            Can you make friends?
          </p>
        </div>
        <div className="absolute right-12 bottom-[140px]">
          <Exclamation />
        </div>

        <button
          className="text-white font-press-start"
          onClick={() => setIsMiniGameSetupVisible(false)}
        >
          start minigame
        </button>

        <CharacterIcon />
      </div>
    );
  }

  return (
    <div
      className={`relative h-full ${
        coffeeStatus === "3/4" && "vibrate-subtle"
      } ${coffeeStatus === "half" && "vibrate-moderate"} ${
        coffeeStatus === "empty" && "vibrate-intense"
      }`}
    >
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

        <div className="flex flex-row items-center justify-center px-3">
          <div>{question.icon && question.icon}</div>
          <div className="flex items-center text-center justify-center w-[400px] px-5">
            <p className="font-press-start text-white text-center ">
              {question.question}
            </p>
          </div>
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
            selectAnswer();
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
            {answer.icon && <div className="px-2">{answer.icon}</div>}
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
      {user.character === "elliott" && (
        <CoffeeMeter coffeeStatus={coffeeStatus} />
      )}
      {user.inventory === "new guitar" && (
        <div className="absolute bottom-0 right-7">
          <Guitar />
        </div>
      )}
      {user.inventory === "sunglasses" && (
        <div className="absolute bottom-[58px] right-[46px] flex items-center justify-center">
          <Sunglasses />
        </div>
      )}
    </div>
  );
};
