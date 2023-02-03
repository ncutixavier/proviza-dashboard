import { combineReducers } from "@reduxjs/toolkit";
import createQuestionReducer from "../features/createQuestionSlice";
import getQuestionsReducer from "../features/getQuestionsSlice";

const rootReducer = combineReducers({
    createQuestion: createQuestionReducer,
    getQuestions: getQuestionsReducer
});

export default rootReducer;
