import { useContext } from 'react'
import { QuizContext } from './context/quiz';
import Wellcome from './components/Wellcome'
import Question from './components/Question'

import './App.css';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className='App'>
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Wellcome/>}
      {quizState.gameStage === "Playing" && <Question/>}
      </div>
  );
}

export default App
