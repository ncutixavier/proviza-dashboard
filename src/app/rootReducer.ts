import { combineReducers } from "@reduxjs/toolkit";
import createQuestionReducer from "../features/createQuestionSlice";
import getQuestionsReducer from "../features/getQuestionsSlice";
import createAnswerReducer from "../features/createAnswerSlice";
import getAnswersReducer from "../features/getAnswersSlice";

const rootReducer = combineReducers({
  createQuestion: createQuestionReducer,
  getQuestions: getQuestionsReducer,
  createAnswer: createAnswerReducer,
  getAnswers: getAnswersReducer,
});

export default rootReducer;
