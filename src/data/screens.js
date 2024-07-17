import CharacterSelection from "../screens/CharacterSelection";
import TitleScreen from "../screens/TitleScreen";
import { Inventory } from "../screens/Inventory";
import { Question } from "../screens/Question";
import { Name } from "../screens/Name";
import Endgame from "../screens/Endgame";
import LoseScreen from "../screens/LoseScreen";
import Congrats from "../screens/Congrats";

export const screens = [
  {
    name: "titleScreen",
    component: <TitleScreen />,
  },
  { name: "name", component: <Name /> },
  { name: "characterSelection", component: <CharacterSelection /> },
  { name: "inventory", component: <Inventory /> },
  { name: "question", component: <Question /> },
  { name: "congrats", component: <Congrats /> },
  { name: "endGame", component: <Endgame /> },
  { name: "loseScreen", component: <LoseScreen /> },
];
