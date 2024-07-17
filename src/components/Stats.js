import React, { useState } from "react";
import { user } from "../data/user";

export const Stats = () => {
  const [helpText, setHelpText] = useState(0);
  return (
    <div className="border-white border-2 w-[300px] h-[170px] px-2 relative">
      <p className="text-white font-press-start text-center">{`${user.name}: ${user.character}`}</p>
      <div className="border-white border-2" />
      <div className="flex flex-col">
        <p
          className="font-press-start text-white"
          onMouseEnter={() => setHelpText(1)}
          onMouseLeave={() => setHelpText(0)}
        >
          {`Points: ${user.points}`}
        </p>
        <p
          className="font-press-start text-white"
          onMouseEnter={() => setHelpText(2)}
          onMouseLeave={() => setHelpText(0)}
        >
          {`Fans: ${user.fans}`}
        </p>
        <p
          className="font-press-start text-white"
          onMouseEnter={() => setHelpText(3)}
          onMouseLeave={() => setHelpText(0)}
        >
          {`Vibes: ${user.vibes}`}
        </p>
        <p
          className="font-press-start text-white"
          onMouseEnter={() => setHelpText(4)}
          onMouseLeave={() => setHelpText(0)}
        >
          {`Money: $${user.money}`}
        </p>
        <p
          className="font-press-start text-white text-xs"
          onMouseEnter={() => setHelpText(5)}
          onMouseLeave={() => setHelpText(0)}
        >
          {user.character === "elliott" &&
            `Inventory: ${
              user.inventory === "empty"
                ? "lucky shoes"
                : user.inventory.toString() + " + lucky shoes"
            }`}
          {user.character !== "elliott" &&
            `Inventory: ${user.inventory.toString()}`}
        </p>
      </div>
      {helpText === 1 && (
        <div className="bg-white h-10 w-[200px] absolute bottom-[-55px] text-center flex justify-center items-center">
          <p className="font-press-start text-xs">Try for the high score</p>
        </div>
      )}
      {helpText === 2 && (
        <div className="bg-white h-14 w-[200px] absolute bottom-[-55px] text-center flex justify-center items-center">
          <p className="font-press-start text-xs">
            You lose if 0. Adds to final score
          </p>
        </div>
      )}
      {helpText === 3 && (
        <div className="bg-white h-14 w-[200px] absolute bottom-[-55px] text-center flex justify-center items-center">
          <p className="font-press-start text-xs">
            Energy/Morale, lose if 0. Adds to final score
          </p>
        </div>
      )}
      {helpText === 4 && (
        <div className="bg-white h-16 w-[200px] absolute bottom-[-55px] text-center flex justify-center items-center">
          <p className="font-press-start text-xs">
            Lose if 0. Does not count towards score
          </p>
        </div>
      )}
    </div>
  );
};
