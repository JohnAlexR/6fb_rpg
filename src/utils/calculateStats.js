import React from "react";
import { updateUser } from "../data/user";

export const calculateStats = (selectedAnswer, question) => {
  const answer = question.answers.filter(
    (answer) => answer.id === selectedAnswer
  )[0];

  updateUser({
    points: answer.points,
    money: answer.money,
    fans: answer.fans,
    vibes: answer.vibes,
  });
};
