import React, { useState } from "react";
import { useScreen } from "../App";

export const Name = () => {
  const { screenIndex, setScreenIndex } = useScreen();
  const [name, setName] = useState("");

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="text-white font-press-start mt-20">enter your name</p>
      <div className="mt-20">
        <input
          className="font-press-start text-white bg-black text-3xl text-center border-0"
          maxLength={3}
          onChange={(text) => setName(text)}
          autoFocus={true}
        />
      </div>
      <div className="flex flex-row gap-x-1">
        <div className="border-white border-2 mt-2 w-10" />
        <div className="border-white border-2 mt-2 w-10" />
        <div className="border-white border-2 mt-2 w-10" />
      </div>
      <div className="text-center mt-10">
        {name && (
          <button onClick={() => setScreenIndex(2)}>
            <p className="text-white font-press-start">continue</p>
          </button>
        )}
      </div>
    </div>
  );
};
