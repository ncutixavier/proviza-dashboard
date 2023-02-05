import * as yup from "yup";

export const createQuestionSchema = yup.object().shape({
  question: yup.string().required(),
  image: yup.string(),
  category: yup.string().required(),
});

export const createAnswerSchema = yup.object().shape({
  answer: yup.string().required(),
  image: yup.string(),
  question_id: yup.string().required(),
});
