import * as yup from "yup";

export const createQuestionSchema = yup.object().shape({
  question: yup.string().required(),
  category: yup.string().required(),
});
