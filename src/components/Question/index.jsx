import React from "react";
import { useDispatch } from "react-redux";
import { answerQuestion } from "../../features/questionnaire/questionnaireSlice";
import styles from "./styles.module.css";

const Question = ({ question }) => {
  const dispatch = useDispatch();

  const handleAnswer = (e) => {
    dispatch(
      answerQuestion({ questionId: question.id, answer: e.target.value })
    );
  };

  return (
    <div className={styles.question}>
      <h2>{question.question}</h2>
      <ul className={styles.options}>
        {question.options.map((option) => (
          <li className={styles.option} key={option}>
            <label>
              <input
                type="radio"
                value={option}
                name={`question-${question.id}`}
                onChange={handleAnswer}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
