import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Quiz from "../img/quiz.svg";

import "./wellcome.css";

const Wellcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="wellcome">
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>iniciar</button>
        <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  )
}

export default Wellcome 