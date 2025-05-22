import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export type OxState = {
  question: string;
  answer: string;
  pic: string;
  loading: boolean;
  error: string | null;
};

const fetchAnswer = createAsyncThunk('/question/ox', async (_, thunkAPI) => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_OX_SERVER}`);
    console.log(res.data);
    return {
      answer: res.data.answer,
      pic: res.data.image,
    };
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

const initialState: OxState = {
  question: '',
  answer: '',
  pic: '',
  loading: false,
  error: null,
};

const oxSlice = createSlice({
  name: 'ox',
  initialState,
  reducers: {
    setQuestion(state, action: PayloadAction<string>) {
      state.question = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAnswer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnswer.fulfilled, (state, action) => {
        state.loading = false;
        state.answer = action.payload.answer;
        state.pic = action.payload.pic;
      })
      .addCase(fetchAnswer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setQuestion } = oxSlice.actions;
export default oxSlice.reducer;
