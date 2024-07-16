import React, { useState } from "react";
import { useScreen } from "../App";
import { Logo } from "../assets/Logo";

const CharacterSelection = () => {
  const { screenIndex, setScreenIndex } = useScreen();
  const [characterDisplay, setCharacterDisplay] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState();

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <button
            className={`text-white border-slate-300 border-2 px-3 py-3 ${
              characterDisplay === "john" && "bg-white text-black"
            } ${selectedCharacter === "john" && "text-black bg-yellow-300"}`}
            onMouseEnter={() => setCharacterDisplay("john")}
            onClick={() => setSelectedCharacter("john")}
            onMouseLeave={() => setCharacterDisplay("")}
          >
            <p className="text-2xl font-press-start">John Alex</p>
          </button>
          <button
            className={`text-white border-slate-300 border-2 px-3 py-3 ${
              characterDisplay === "brian" && "bg-white text-black"
            } ${selectedCharacter === "brian" && "text-black bg-yellow-300"}`}
            onMouseEnter={() => setCharacterDisplay("brian")}
            onClick={() => setSelectedCharacter("brian")}
            onMouseLeave={() => setCharacterDisplay("")}
          >
            <p className="text-2xl font-press-start">Brian</p>
          </button>
          <button
            className={`text-white border-slate-300 border-2 px-3 py-3 ${
              characterDisplay === "julia" && "bg-white text-black"
            } ${selectedCharacter === "julia" && "text-black bg-yellow-300"}`}
            onMouseEnter={() => setCharacterDisplay("julia")}
            onClick={() => setSelectedCharacter("julia")}
            onMouseLeave={() => setCharacterDisplay("")}
          >
            <p className="text-2xl font-press-start">Julia</p>
          </button>
          <button
            className={`text-white border-slate-300 border-2 px-3 py-3 ${
              characterDisplay === "dom" && "bg-white text-black"
            } ${selectedCharacter === "dom" && "text-black bg-yellow-300"}`}
            onMouseEnter={() => setCharacterDisplay("dom")}
            onClick={() => setSelectedCharacter("dom")}
            onMouseLeave={() => setCharacterDisplay("")}
          >
            <p className="text-2xl font-press-start">Dom</p>
          </button>
          <button
            className={`text-white border-slate-300 border-2 px-3 py-3 ${
              characterDisplay === "elliott" && "bg-white text-black"
            } ${selectedCharacter === "elliott" && "text-black bg-yellow-300"}`}
            onMouseEnter={() => setCharacterDisplay("elliott")}
            onClick={() => setSelectedCharacter("elliott")}
            onMouseLeave={() => setCharacterDisplay("")}
          >
            <p className="text-2xl font-press-start">Elliott</p>
          </button>
          <button
            className={`text-white border-slate-300 border-2 px-3 py-3 ${
              characterDisplay === "zach" && "bg-white text-black"
            } ${selectedCharacter === "zach" && "text-black bg-yellow-300"}`}
            onMouseEnter={() => setCharacterDisplay("zach")}
            onClick={() => setSelectedCharacter("zach")}
            onMouseLeave={() => setCharacterDisplay("")}
          >
            <p className="text-2xl font-press-start">Zach</p>
          </button>
        </div>
        <div className="flex flex-row items-center">
          <div className="bounce">
            <Logo />
          </div>
          <div className="flex flex-col text-center">
            <p className="text-white font-press-start text-center mb-3">
              Character Perk:
            </p>
            <div className="flex flex-col">
              {!selectedCharacter && characterDisplay === "zach" && (
                <p className="text-white font-press-start">+10% Money</p>
              )}
              {!selectedCharacter && characterDisplay === "john" && (
                <p className="text-white font-press-start">+10% Points</p>
              )}
              {!selectedCharacter && characterDisplay === "brian" && (
                <p className="text-white font-press-start">+10% Vibes</p>
              )}
              {!selectedCharacter && characterDisplay === "julia" && (
                <p className="text-white font-press-start">+10% Fans</p>
              )}
              {!selectedCharacter && characterDisplay === "elliott" && (
                <p className="text-white font-press-start">lucky shoes</p>
              )}
              {!selectedCharacter && characterDisplay === "dom" && (
                <p className="text-white font-press-start">second life</p>
              )}
              {selectedCharacter === "zach" && (
                <p className="text-white font-press-start">+10% Money</p>
              )}
              {selectedCharacter === "john" && (
                <p className="text-white font-press-start">+10% Points</p>
              )}
              {selectedCharacter === "brian" && (
                <p className="text-white font-press-start">+10% Vibes</p>
              )}
              {selectedCharacter === "julia" && (
                <p className="text-white font-press-start">+10% Fans</p>
              )}
              {selectedCharacter === "elliott" && (
                <p className="text-white font-press-start">lucky shoes</p>
              )}
              {selectedCharacter === "dom" && (
                <p className="text-white font-press-start">second life</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        {selectedCharacter && (
          <button onClick={() => setScreenIndex(3)}>
            <p className="text-white font-press-start">continue</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default CharacterSelection;
