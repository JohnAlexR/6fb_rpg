import React from "react";
import { questions } from "../data/questions";
import { updateQuestions, user } from "../data/user";
import { questionsAsked } from "../data/user";

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
  const questionID = newQuestions[index].id;
  updateQuestions(questionID);
  return newQuestions[index];
};
