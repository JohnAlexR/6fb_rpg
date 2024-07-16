import React from "react";
import { questions } from "../data/questions";
import { updateQuestions, user } from "../data/user";
import { questionsAsked } from "../data/user";
import { triggerEndGame } from "./triggerEndgame";

export const getRandomIntInclusive = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

export const fetchQuestion = () => {
  const newQuestions = questions.filter(
    (question) => !questionsAsked.includes(question.id) && !question.isSecondary
  );
  if (newQuestions.length === 0) {
    return "end";
  }
  const length = newQuestions.length;
  const index = getRandomIntInclusive(0, length - 1);
  console.log("index", index);
  console.log("newQ", newQuestions);
  const questionID = newQuestions[index].id;
  console.log("updateQ", questionID);
  updateQuestions(questionID);
  return newQuestions[index];
};
