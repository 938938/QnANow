import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export type OxState = {
  question: string;
  answer: string;
  pic: string;
};

const fetchAnswer = createAsyncThunk('/question/ox', async (_, thunkAPI) => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_OX_SERVER}`);
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

const initialState: OxState = {
  question: '',
  answer: '',
  pic: '',
};

const oxSlice = createSlice({
  name: 'ox',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAnswer.pending, (state) => {
        state.answer = '대답을 가져오는 중입니다';
      })
      .addCase(fetchAnswer.fulfilled, (state, action) => {
        console.log(action.payload);
        state.answer = action.payload;
      })
      .addCase(fetchAnswer.rejected, (state) => {
        state.answer = '대답을 가져오는 것에 실패했습니다.';
      });
  },
});

export default oxSlice.reducer;
