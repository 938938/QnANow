import { GoogleGenAI } from '@google/genai';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AiState = {
  ask: string;
  answer: string;
  loading: boolean;
  error: string | null;
};

const ai = new GoogleGenAI({
  apiKey: `${process.env.NEXT_PUBLIC_TOKEN}`,
});

export const fetchAiAnswer = createAsyncThunk(
  '/ask/ai',
  async (question: string, thunkAPI) => {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: `다음 질문에 대해 친절하고 정성스럽게 한 문장으로 대답해줘:\n"${question}"`,
      });
      return response.text;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const initialState: AiState = {
  ask: '',
  answer: '',
  loading: false,
  error: null,
};

const AiSlice = createSlice({
  name: 'ai',
  initialState,
  reducers: {
    setAiAsk(state, action: PayloadAction<string>) {
      state.ask = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAiAnswer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAiAnswer.fulfilled, (state, action) => {
        state.loading = false;
        state.answer = action.payload!;
      })
      .addCase(fetchAiAnswer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setAiAsk } = AiSlice.actions;
export default AiSlice.reducer;
