import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../services/firebaseService";
import { QuestionState, QuestionPayload } from "../models/questionModel";
import { collection, addDoc } from "firebase/firestore";

export const createQuestion: any = createAsyncThunk(
  "question/create",
  async (payload: QuestionPayload, thunkApi) => {
    try {
      const response = await addDoc(collection(db, "questions"), payload);
      return response;
    } catch (error: any) {
      return thunkApi.rejectWithValue({ error: error?.message });
    }
  }
);

const initialState: QuestionState = {
  loading: false,
  error: undefined,
  data: [],
};

export const createQuestionSlice = createSlice({
  name: "createQuestion",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createQuestion.pending, (state, action) => {
      state.loading = true;
      state.error = undefined;
      state.data = [];
    });

    builder.addCase(createQuestion.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.data = action.payload;
    });

    builder.addCase(createQuestion.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.data = undefined;
    });
  },
});

export const selectCreateQuestion = (state: any) => state.createQuestion;
export default createQuestionSlice.reducer;
