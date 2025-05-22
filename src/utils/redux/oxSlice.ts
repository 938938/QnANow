import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export type OxState = {
  ask: string;
  answer: string;
  pic: string;
  loading: boolean;
  error: string | null;
};

export const fetchOxAnswer = createAsyncThunk(
  '/ask/ox',
  async (_, thunkAPI) => {
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
  }
);

const initialState: OxState = {
  ask: '',
  answer: '',
  pic: '',
  loading: false,
  error: null,
};

const oxSlice = createSlice({
  name: 'ox',
  initialState,
  reducers: {
    setOxAsk(state, action: PayloadAction<string>) {
      state.ask = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOxAnswer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOxAnswer.fulfilled, (state, action) => {
        state.loading = false;
        state.answer = action.payload.answer;
        state.pic = action.payload.pic;
      })
      .addCase(fetchOxAnswer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setOxAsk } = oxSlice.actions;
export default oxSlice.reducer;
