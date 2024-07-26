import React, { useEffect, useState } from "react";
import musicians from "../assets/musician_encounter.png";
import { Grass } from "../assets/musicianEncounter";
import {
  Elliott,
  Julia,
  JohnAlex,
  Zach,
  Brian,
  Dom,
} from "../assets/characters";
import { user } from "../data/user";
import { data } from "../data/musicianEncounter";

export const MusicianEncounter = ({ selectMinigameAnswer }) => {
  const [hoverState, setHoverState] = useState();
  const [tab, setTab] = useState();
  const characterData = data.filter(
    (item) => item.character === user.character
  )[0];
  const [foeHealth, setFoeHealth] = useState(100);
  const [userHealth, setUserHealth] = useState(100);
  const [result, setResult] = useState();

  const getResult = (option, index) => {
    const randomNumber = Math.random();

    if (randomNumber > option.prob) {
      setResult(option.success);
      setFoeHealth((prev) => prev - option.dmg);
    } else {
      setResult(option.fail);
    }

    characterData.options[index].pp += -1;

    setTab(null);
  };

  useEffect(() => {
    if (foeHealth <= 0) {
      //will need to update these
      console.log("foeHealth = 0");
      selectMinigameAnswer("win", "22b");
    }
    if (userHealth <= 0) {
      selectMinigameAnswer("lose", "22a");
    }
  }, [foeHealth, userHealth]);
  return (
    <div className="">
      <div className="flex flex-row relative justify-end px-10 items-center ">
        <div className="w-[300px] h-[70px] bg-[#f8f7d7] px-4 py-1 border-gray-200 rounded-xl border-2 mr-20 mb-14">
          <div className="flex-row flex justify-between">
            <p className="font-press-start">Musicians</p>
            <p className="font-press-start">Lv10</p>
          </div>
          <div className="border-[#4d685e] bg-[#4d685e] rounded-xl border-2 flex flex-row">
            <div className="px-1">
              <p className="font-press-start text-[#edce56]">HP</p>
            </div>
            <div className="flex-grow border-white border-[2px] rounded-xl flex justify-end">
              <div
                className="bg-[#64e6ae] rounded-xl"
                style={{ width: `${foeHealth}%` }}
              />
            </div>
          </div>
        </div>
        <div className="w-[250px] h-[250px] z-20">
          <img src={musicians} />
        </div>
        <div className="absolute top-[100px] right-0">
          <Grass />
        </div>
      </div>
      <div>
        <div className="relative">
          <div className="absolute top-[-100px] z-20 left-20">
            {user.character === "julia" && <Julia size={200} />}
            {user.character === "john" && <JohnAlex size={200} />}
            {user.character === "elliott" && <Elliott size={"200"} />}
            {user.character === "zach" && <Zach size={"200"} />}
            {user.character === "dom" && <Dom size={"200"} />}
            {user.character === "brian" && <Brian size={"200"} />}
          </div>

          <div className="absolute top-[-50px]">
            <Grass />
          </div>
        </div>
        <div className="w-[300px] h-[70px] bg-[#f8f7d7] px-4 py-1 border-gray-200 rounded-xl border-2 mr-20 mb-14 absolute right-0 bottom-12">
          <div className="flex-row flex justify-between">
            <p className="font-press-start">{user.character}</p>
            <p className="font-press-start">Lv99</p>
          </div>
          <div className="border-[#4d685e] bg-[#4d685e] rounded-xl border-2 flex flex-row">
            <div className="px-1">
              <p className="font-press-start text-[#edce56]">HP</p>
            </div>
            <div className="flex-grow border-white border-[2px] rounded-xl flex ">
              <div
                className="bg-[#64e6ae] flex-1 rounded-xl"
                style={{ width: `${userHealth}%` }}
              />
            </div>
          </div>
        </div>
        {!tab && !result && (
          <div className=" w-full  z-40 absolute h-[100px] bottom-0 bg-black flex flex-row p-1">
            <div className="border-4 bg-[#1d3e54] border-[#b4903f] flex items-center px-4 ">
              <p className="text-white font-press-start text-left text-lg">
                {`What will
              ${user.character} do?`}
              </p>
            </div>
            <div className="flex-grow border-[#2a62c5] bg-white border-2 flex-row flex justify-center items-center gap-x-8">
              <button
                className="text-xl font-press-start"
                onClick={() => setTab("talk")}
              >
                Talk
              </button>
              <button
                className="text-xl font-press-start"
                onClick={() => setTab("Run")}
              >
                Run
              </button>
            </div>
          </div>
        )}
        {tab === "run" && (
          <div className=" w-full  z-40 absolute h-[100px] bottom-0 bg-black flex flex-row p-1">
            <p className="text-xl font-press-start">Got away safely</p>
          </div>
        )}
        {tab === "talk" && (
          <div className="w-full  z-40 absolute h-[100px] bottom-0 bg-black flex flex-row p-1 gap-x-3">
            <div className="flex-grow border-[#2a62c5] bg-white border-4 flex-row flex items-center gap-x-8 flex-wrap ">
              <div className="flex flex-row justify-between flex-grow px-14">
                {characterData.options.slice(0, 1).map((option) => (
                  <button
                    className="text-xl font-press-start"
                    key={option.text}
                    onMouseEnter={() => setHoverState(0)}
                    onClick={() => {
                      const index = hoverState;
                      getResult(option, index);
                    }}
                    disabled={option.pp === 0}
                  >
                    {option.text}
                  </button>
                ))}
                {characterData.options.slice(1, 2).map((option) => (
                  <button
                    className="text-xl font-press-start"
                    key={option.text}
                    onMouseEnter={() => setHoverState(1)}
                    onClick={() => {
                      const index = hoverState;
                      getResult(option, index);
                    }}
                    disabled={option.pp === 0}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
              <div className="flex flex-row justify-between flex-grow px-14">
                {characterData.options.slice(2, 3).map((option) => (
                  <button
                    className="text-xl font-press-start"
                    key={option.text}
                    onMouseEnter={() => setHoverState(2)}
                    onClick={() => {
                      const index = hoverState;
                      getResult(option, index);
                    }}
                    disabled={option.pp === 0}
                  >
                    {option.text}
                  </button>
                ))}
                {characterData.options.slice(3, 4).map((option) => (
                  <button
                    className="text-xl font-press-start"
                    key={option.text}
                    onClick={() => {
                      const index = hoverState;
                      getResult(option, index);
                    }}
                    onMouseEnter={() => setHoverState(3)}
                    disabled={option.pp === 0}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex-grow border-[#2a62c5] bg-white border-4 flex-col flex justify-center gap-x-8 w-[40%] px-4">
              <div className="flex flex-row justify-between">
                <p className="font-press-start">PP</p>
                {hoverState && (
                  <p className="font-press-start text-xl">{`${characterData.options[hoverState].pp}/${characterData.options[hoverState].ppMax}`}</p>
                )}
              </div>

              {hoverState && (
                <p className="font-press-start">{`${characterData.options[hoverState].info}`}</p>
              )}
            </div>
          </div>
        )}
        {!tab && result && (
          <button
            className=" w-full  z-40 absolute h-[100px] bottom-0 bg-black flex flex-row p-1"
            onClick={() => {
              setResult(null);
            }}
          >
            <div className="border-4 bg-[#1d3e54] border-[#b4903f] flex items-center px-4 flex-grow h-full relative">
              <p className="text-xl font-press-start text-white">{result}</p>
              <p className="text-red-600 text-2xl absolute bottom-2 right-2">
                v
              </p>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};
