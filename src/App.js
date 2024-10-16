import styles from "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { submitAnswers } from "./features/questionnaire/questionnaireSlice";
import Question from "./components/Question";
import Result from "./components/Result";

function App() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questionnaire.questions);
  const answers = useSelector((state) => state.questionnaire.answers);
  const result = useSelector((state) => state.questionnaire.result);

  const handleSubmit = () => {
    const score = calculateScore(questions, answers);
    dispatch(submitAnswers(score));
  };

  return (
    <div className={styles.app}>
      <h1 className="title">Questionnaire</h1>
      {questions.map((question) => (
        <Question key={question.id} question={question} />
      ))}
      <button onClick={handleSubmit} className="submit_button">
        Submit
      </button>
      {result && <Result score={result} />}
    </div>
  );
}

const calculateScore = (questions, answers) => {
  let score = 0;

  questions.forEach((question) => {
    if (answers[question.id] === question.correct) {
      score++;
    }
  });

  return score;
};

export default App;
