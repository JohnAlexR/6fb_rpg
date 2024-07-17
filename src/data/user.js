export const user = {
  name: "",
  points: 0,
  money: 500,
  fans: 100,
  vibes: 100,
  inventory: [],
  character: "",
};

export let answers = [];
export let questionsAsked = ["1"];

export const updateUser = ({
  name,
  points,
  money,
  fans,
  vibes,
  inventory,
  character,
}) => {
  if (name) {
    user.name = name;
  }
  if (points) {
    const newPoints = user.points + points;
    user.points = newPoints;
  }
  if (money) {
    const newMoney = user.money + money;
    user.money = newMoney;
  }
  if (fans) {
    const newFans = user.fans + fans;
    user.fans = newFans;
  }
  if (vibes) {
    const newVibes = user.vibes + vibes;
    user.vibes = newVibes;
  }
  if (inventory) {
    user.inventory = inventory;
  }
  if (character) {
    user.character = character;
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

export const resetUser = () => {
  user.name = "";
  user.money = 500;
  user.fans = 100;
  user.vibes = 100;
  user.inventory = [];
  user.character = "";
  user.points = 0;
};
