import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../services/firebaseService";
import { AnswerState, AnswerPayload } from "../models/answerModel";
import { collection, addDoc } from "firebase/firestore";

export const createAnswer: any = createAsyncThunk(
  "answer/create",
  async (payload: AnswerPayload, thunkApi) => {
    try {
      const response = await addDoc(collection(db, "answers"), payload);
      return response;
    } catch (error: any) {
      return thunkApi.rejectWithValue({ error: error?.message });
    }
  }
);

const initialState: AnswerState = {
  loading: false,
  error: undefined,
  data: [],
};

export const createAnswerSlice = createSlice({
  name: "createAnswer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createAnswer.pending, (state, action) => {
      state.loading = true;
      state.error = undefined;
      state.data = [];
    });

    builder.addCase(createAnswer.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.data = action.payload;
    });

    builder.addCase(createAnswer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.data = undefined;
    });
  },
});

export const selectCreateAnswer = (state: any) => state.createAnswer;
export default createAnswerSlice.reducer;
