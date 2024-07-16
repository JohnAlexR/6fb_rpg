import CharacterSelection from "../screens/CharacterSelection";
import TitleScreen from "../screens/TitleScreen";
import { Inventory } from "../screens/Inventory";
import { Question } from "../screens/Question";
import { Name } from "../screens/Name";
import Endgame from "../screens/Endgame";

export const screens = [
  {
    name: "titleScreen",
    component: <TitleScreen />,
  },
  { name: "name", component: <Name /> },
  { name: "characterSelection", component: <CharacterSelection /> },
  { name: "inventory", component: <Inventory /> },
  { name: "question", component: <Question /> },
  { name: "endGame", component: <Endgame /> },
];
