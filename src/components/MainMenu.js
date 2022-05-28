import React, { useContext } from 'react'
import { QuizContext } from "../helpers/Contexts"
 
function MainMenu() {
  const {gameState, setGameState, userName, setUserName} = useContext(QuizContext)

  return (
    <div className='menu'>
      <label>Enter your name:</label>
      <input type="text" onChange={(event) => {
        setUserName(event.target.value)
      }}
      />
        <button onClick={() => { setGameState("quiz") }}>Start Quiz</button>
     
    </div>
  )
}

export default MainMenu