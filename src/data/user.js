export const user = {
  name: "",
  points: "0",
  money: "1000",
  fans: "100",
  vibes: "100",
  inventory: [],
};

export let answers = [];
export let questionsAsked = ["1"];

export const updateUser = ({ name, points, money, fans, vibes, inventory }) => {
  if (name) {
    user.name = name;
  }
  if (points) {
    user.points = points;
  }
  if (money) {
    user.money = money;
  }
  if (fans) {
    user.fans = fans;
  }
  if (vibes) {
    user.vibes = vibes;
  }
  if (inventory) {
    user.inventory = inventory;
  }
};

export const updateAnswer = (id) => {
  answers.push(id);
};

export const clearAnswers = () => {
  answers = [];
};

export const updateQuestions = (id) => {
  questionsAsked.push(id);
};

export const clearQuestionsAsked = () => {
  questionsAsked = ["1"];
};
