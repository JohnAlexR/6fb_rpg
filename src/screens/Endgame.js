import React, { useState, useEffect } from "react";
import { Stats } from "../components/Stats";
import { clearAnswers, clearQuestionsAsked, resetUser } from "../data/user";
import { useScreen } from "../App";
import { user } from "../data/user";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore/lite";

export const Endgame = () => {
  const { screenIndex, setScreenIndex } = useScreen();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsCollection = collection(db, "scores");
        const itemsSnapshot = await getDocs(itemsCollection);
        const itemsList = itemsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        let sortedItems = itemsList;
        sortedItems.sort((a, b) => b.score - a.score);
        const displayItems = sortedItems.slice(0, 5);
        setItems(displayItems);
      } catch {
        console.log("no network");
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="h-full w-full flex flex-grow items-center justify-center flex-col">
      <p className="text-white font-press-start text-center bottom-2 border-b-2 mb-5">
        high scores
      </p>
      <div>
        {items.map((score) => (
          <p
            key={`${score.score}${score.name}`}
            className={`font-press-start text-white text-center ${
              score.name === user.name && "text-yellow-300 text-lg"
            }`}
          >{`${score.name}: ${score.score}`}</p>
        ))}
      </div>
      <button
        onClick={() => {
          setScreenIndex(0);
          clearAnswers();
          clearQuestionsAsked();
          resetUser();
        }}
        className="mt-5 border-white border-2 px-2 py-1 mb-2"
      >
        <p className="text-white font-press-start">reset</p>
      </button>
    </div>
  );
};

export default Endgame;
