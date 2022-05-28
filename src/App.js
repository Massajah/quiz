import './App.css';
import React, { useState, useContext } from 'react';
import MainMenu from './components/MainMenu';
import EndScreen from './components/EndScreen';
import Quiz from './components/Quiz';
import { QuizContext } from "./helpers/Contexts"

function App() {
  const [gameState, setGameState] = useState("menu")
  const [score, setScore] = useState (0)
  const [userName, setUserName] = useState("");

  return (
    <div className="App">
     <h1>Quiz Game</h1>
     <QuizContext.Provider value={{gameState, setGameState, score, setScore, userName, setUserName}}>
     {gameState === "menu" && <MainMenu />}
     {gameState === "quiz" && <Quiz />}
     {gameState === "endScreen" && <EndScreen />}
     </QuizContext.Provider>
    </div>
  );
}

export default App;
