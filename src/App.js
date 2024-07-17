import React, { createContext, useState, useContext } from "react";
import "./App.css";
import GameBorder from "./components/GameBorder";
import { screens } from "./data/screens";
import { clearAnswers, clearQuestionsAsked, resetUser } from "./data/user";
import AudioPlayer from "./components/AudioPlayer";

const ScreenContext = createContext();

// Create a provider component
export const ScreenProvider = ({ children }) => {
  const [screenIndex, setScreenIndex] = useState(0);
  return (
    <ScreenContext.Provider value={{ screenIndex, setScreenIndex }}>
      {children}
    </ScreenContext.Provider>
  );
};

// Custom hook for accessing the screen context
export const useScreen = () => {
  return useContext(ScreenContext);
};

function App() {
  return (
    <ScreenProvider>
      <MainApp />
    </ScreenProvider>
  );
}

function MainApp() {
  const { screenIndex, setScreenIndex } = useScreen();
  return (
    <div className="App">
      <GameBorder>{screens[screenIndex].component}</GameBorder>
      <button
        onClick={() => {
          setScreenIndex(0);
          clearAnswers();
          clearQuestionsAsked();
          resetUser();
        }}
      >
        <p>reset</p>
      </button>
      <div className="border-purple-400">
        <AudioPlayer />
      </div>
    </div>
  );
}

export default App;
