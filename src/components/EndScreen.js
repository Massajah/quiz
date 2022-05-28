import React, { useContext } from 'react'
import { QuizContext } from "../helpers/Contexts"
import { Questions } from '../helpers/QuestionBank'

function EndScreen() {
  const {score, setScore, setGameState, userName} = useContext(QuizContext)

  const restartQuiz = () => {
    setScore(0)
    setGameState("menu")
  }

  return (
    <div className='endScreen'>
        <h2>Quiz Finished</h2>
        <h2>{userName}</h2>
        <h3>{score} / {Questions.length}</h3>
        <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default EndScreen