import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../services/firebaseService";
import { AnswerState } from "../models/answerModel";
import { collection, query, getDocs, where, orderBy } from "firebase/firestore";

export const getAnswers: any = createAsyncThunk(
  "answer/get",
  async (id: string) => {
    try {
      const response = await getDocs(
        query(
          collection(db, "answers"),
          where("question_id", "==", id),
          orderBy("createdAt")
        )
      );
      console.log("RESP-ANSW::", response)
      return response;
    } catch (error: any) {
      Promise.reject(error?.message);
    }
  }
);

const initialState: AnswerState = {
  loading: false,
  error: undefined,
  data: [],
};

export const getAnswersSlice = createSlice({
  name: "getAnswers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAnswers.pending, (state, action) => {
      state.loading = true;
      state.error = undefined;
      state.data = [];
    });

    builder.addCase(getAnswers.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.data = action.payload;
    });

    builder.addCase(getAnswers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.data = undefined;
    });
  },
});

export const selectGetAnswers = (state: any) => state.getAnswers;
export default getAnswersSlice.reducer;
