import { SerializedError } from "@reduxjs/toolkit";

export interface QuestionState {
  error?: SerializedError;
  data: any;
  loading: boolean;
}

export interface QuestionPayload {
  question: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}
