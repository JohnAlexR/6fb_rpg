import React, { useState } from "react";
import { useScreen } from "../App";
import { updateUser } from "../data/user";

export const Inventory = () => {
  const [answer, setAnswer] = useState(0);
  const [hover, setHover] = useState(0);
  const { screenIndex, setScreenIndex } = useScreen();
  const options = ["lucky shoes", "snacks", "dog treats", "sunglasses"];
  return (
    <div>
      <p className="font-press-start text-white text-center mt-10">
        Time to pack! You only have space for one more thing, what do you bring?
      </p>
      <div className="flex flex-col mt-10">
        <div className="flex flex-row justify-center gap-x-10">
          <button
            className={`text-white border-slate-300 border-2 px-3 py-3 ${
              hover === 1 && "bg-white text-black"
            } ${answer === 1 && "text-black bg-yellow-300"}`}
            onMouseEnter={() => setHover(1)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setAnswer(1)}
          >
            <p className="text-2xl font-press-start">your lucky shoes</p>
          </button>
          <button
            className={`text-white border-slate-300 border-2 px-3 py-3 ${
              hover === 2 && "bg-white text-black"
            } ${answer === 2 && "text-black bg-yellow-300"}`}
            onMouseEnter={() => setHover(2)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setAnswer(2)}
          >
            <p className="text-2xl font-press-start">snacks</p>
          </button>
        </div>
        <div className="flex flex-row justify-center gap-x-10 mt-10">
          <button
            className={`text-white border-slate-300 border-2 px-3 py-3 ${
              hover === 3 && "bg-white text-black"
            } ${answer === 3 && "text-black bg-yellow-300"}`}
            onMouseEnter={() => setHover(3)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setAnswer(3)}
          >
            <p className="text-2xl font-press-start">dog treats?</p>
          </button>
          <button
            className={`text-white border-slate-300 border-2 px-3 py-3 ${
              hover === 4 && "bg-white text-black"
            } ${answer === 4 && "text-black bg-yellow-300"}`}
            onMouseEnter={() => setHover(4)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setAnswer(4)}
          >
            <p className="text-2xl font-press-start">sunglasses</p>
          </button>
        </div>
      </div>
      <div className="text-center mt-10">
        <button
          onClick={() => {
            updateUser({ inventory: options[answer - 1] });
            setScreenIndex(4);
          }}
        >
          <p className="text-white font-press-start">continue</p>
        </button>
      </div>
    </div>
  );
};
