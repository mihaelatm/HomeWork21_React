import React from "react";
import styles from "./styles.module.css";

const Result = ({ score }) => {
  return (
    <div className={styles.result}>
      <h2>Your Score: {score}</h2>
    </div>
  );
};

export default Result;
