import React from "react";

const GameBorder = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-[1000px] h-[750px]">
      <div className="border-grey h-[60%] w-[80%] border-4 bg-black">
        {children}
      </div>
    </div>
  );
};

export default GameBorder;
