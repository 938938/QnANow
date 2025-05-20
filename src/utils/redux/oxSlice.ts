import { createSlice } from '@reduxjs/toolkit';

export type OxState = {
  question: string;
  answer: string;
  pic: string;
};

const initialState: OxState = {
  question: '',
  answer: '',
  pic: '',
};

const oxSlice = createSlice({
  name: 'ox',
  initialState,
  reducers: {},
});

export const {} = oxSlice.actions;

export default oxSlice.reducer;
