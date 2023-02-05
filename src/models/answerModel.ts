import { SerializedError } from "@reduxjs/toolkit";

export interface AnswerState {
  error?: SerializedError;
  data: any;
  loading: boolean;
}

export interface AnswerPayload {
  answer: string;
  image?: string;
  is_correct: boolean;
  createdAt: string;
  updatedAt: string;
}
