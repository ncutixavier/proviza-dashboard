import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../services/firebaseService";
import { QuestionState } from "../models/questionModel";
import { collection, getDocs } from "firebase/firestore";

export const getQuestions: any = createAsyncThunk(
  "question/get",
  async () => {
    try {
      const response = await getDocs(collection(db, "questions"));
      return response;
    } catch (error: any) {
      Promise.reject(error?.message)
    }
  }
);

const initialState: QuestionState = {
  loading: false,
  error: undefined,
  data: [],
};

export const getQuestionsSlice = createSlice({
  name: "getQuestions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getQuestions.pending, (state, action) => {
      state.loading = true;
      state.error = undefined;
      state.data = [];
    });

    builder.addCase(getQuestions.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.data = action.payload;
    });

    builder.addCase(getQuestions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.data = undefined;
    });
  },
});

export const selectGetQuestions = (state: any) => state.getQuestions;
export default getQuestionsSlice.reducer;
