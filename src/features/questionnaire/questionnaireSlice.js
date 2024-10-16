import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Paris", "London"],
      correct: "Paris",
    },
    {
      id: 2,
      question: "Who wrote 'Hamlet'?",
      options: ["Shakespeare", "Goethe"],
      correct: "Shakespeare",
    },
    {
      id: 3,
      question: "What is photosynthesis?",
      options: [
        "Process of absorbing oxygen",
        "Process of producing food by plants",
      ],
      correct: "Process of producing food by plants",
    },
    {
      id: 4,
      question: "What is the largest planet in the solar system?",
      options: ["Earth", "Jupiter"],
      correct: "Jupiter",
    },
    {
      id: 5,
      question: "Who discovered America?",
      options: ["Columbus", "Magellan"],
      correct: "Columbus",
    },
  ],
  answers: {},
  result: null,
};

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { questionId, answer } = action.payload;
      state.answers[questionId] = answer;
    },
    submitAnswers: (state, action) => {
      state.result = action.payload;
    },
  },
});

export const { answerQuestion, submitAnswers } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
