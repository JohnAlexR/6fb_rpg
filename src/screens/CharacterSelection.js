import React, { useState } from "react";
import { useScreen } from "../App";
import { Logo } from "../assets/Logo";
import { updateUser } from "../data/user";
import {
  Julia,
  Zach,
  Brian,
  JohnAlex,
  Elliott,
  Dom,
} from "../assets/characters";

const CharacterSelection = () => {
  const { screenIndex, setScreenIndex } = useScreen();
  const [characterDisplay, setCharacterDisplay] = useState("john");
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
            <p
              className={`text-2xl font-press-start ${
                characterDisplay === "john" && "text-black"
              } ${selectedCharacter === "john" && "text-black"}`}
            >
              John Alex
            </p>
          </button>
          <button
            className={`text-white border-slate-300 border-2 px-3 py-3 ${
              characterDisplay === "brian" && "bg-white text-black"
            } ${selectedCharacter === "brian" && "text-black bg-yellow-300"}`}
            onMouseEnter={() => setCharacterDisplay("brian")}
            onClick={() => setSelectedCharacter("brian")}
            onMouseLeave={() => setCharacterDisplay("")}
          >
            <p
              className={`text-2xl font-press-start ${
                characterDisplay === "brian" && "text-black"
              } ${selectedCharacter === "brian" && "text-black"}`}
            >
              Brian
            </p>
          </button>
          <button
            className={`text-white border-slate-300 border-2 px-3 py-3 ${
              characterDisplay === "julia" && "bg-white text-black"
            } ${selectedCharacter === "julia" && "text-black bg-yellow-300"}`}
            onMouseEnter={() => setCharacterDisplay("julia")}
            onClick={() => setSelectedCharacter("julia")}
            onMouseLeave={() => setCharacterDisplay("")}
          >
            <p
              className={`text-2xl font-press-start ${
                characterDisplay === "julia" && "text-black"
              } ${selectedCharacter === "julia" && "text-black"}`}
            >
              Julia
            </p>
          </button>
          <button
            className={`text-white border-slate-300 border-2 px-3 py-3 ${
              characterDisplay === "dom" && "bg-white text-black"
            } ${selectedCharacter === "dom" && "text-black bg-yellow-300"}`}
            onMouseEnter={() => setCharacterDisplay("dom")}
            onClick={() => setSelectedCharacter("dom")}
            onMouseLeave={() => setCharacterDisplay("")}
          >
            <p
              className={`text-2xl font-press-start ${
                characterDisplay === "dom" && "text-black"
              } ${selectedCharacter === "dom" && "text-black"}`}
            >
              Dom
            </p>
          </button>
          <button
            className={`text-white border-slate-300 border-2 px-3 py-3 ${
              characterDisplay === "elliott" && "bg-white text-black"
            } ${selectedCharacter === "elliott" && "text-black bg-yellow-300"}`}
            onMouseEnter={() => setCharacterDisplay("elliott")}
            onClick={() => setSelectedCharacter("elliott")}
            onMouseLeave={() => setCharacterDisplay("")}
          >
            <p
              className={`text-2xl font-press-start ${
                characterDisplay === "elliott" && "text-black"
              } ${selectedCharacter === "elliott" && "text-black"}`}
            >
              Elliott
            </p>
          </button>
          <button
            className={`text-white border-slate-300 border-2 px-3 py-3 ${
              characterDisplay === "zach" && "bg-white text-black"
            } ${selectedCharacter === "zach" && "text-black bg-yellow-300"}`}
            onMouseEnter={() => setCharacterDisplay("zach")}
            onClick={() => setSelectedCharacter("zach")}
            onMouseLeave={() => setCharacterDisplay("")}
          >
            <p
              className={`text-2xl font-press-start ${
                characterDisplay === "zach" && "text-black"
              } ${selectedCharacter === "zach" && "text-black"}`}
            >
              Zach
            </p>
          </button>
        </div>
        <div className="flex flex-row items-center">
          <div className="bounce">
            {!selectedCharacter && characterDisplay === "zach" && (
              <Zach size={400} />
            )}
            {!selectedCharacter && characterDisplay === "john" && (
              <JohnAlex size={400} />
            )}
            {!selectedCharacter && characterDisplay === "elliott" && (
              <Elliott />
            )}
            {!selectedCharacter && characterDisplay === "dom" && (
              <Dom size={400} />
            )}
            {!selectedCharacter && characterDisplay === "brian" && (
              <Brian size={400} />
            )}
            {!selectedCharacter && characterDisplay === "julia" && (
              <Julia size={400} />
            )}
            {selectedCharacter === "julia" && <Julia size={400} />}
            {selectedCharacter === "john" && <JohnAlex size={400} />}
            {selectedCharacter === "brian" && <Brian size={400} />}
            {selectedCharacter === "elliott" && <Elliott size={400} />}
            {selectedCharacter === "zach" && <Zach size={400} />}
            {selectedCharacter === "dom" && <Dom size={400} />}
            {!selectedCharacter && !characterDisplay && <Logo />}
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
                <p className="text-white font-press-start">
                  Spend 20% less money
                </p>
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
          <button
            onClick={() => {
              updateUser({ character: selectedCharacter });
              setScreenIndex(3);
            }}
          >
            <p className="text-white font-press-start">continue</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default CharacterSelection;
