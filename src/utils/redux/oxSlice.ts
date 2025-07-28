import { addList } from '@/actions/ox-actions';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export type OXType = {
  ask: string;
  answer: string;
  pic: string;
  bgSet: string;
};

export type OxState = {
  ask: string;
  answer: string;
  pic: string;
  bgSet: string;
  list: OXType[];
  loading: boolean;
  error: string | null;
};

const NG = [
  'https://yesno.wtf/assets/no/3-80a6f5b5d6684674bcfeda34accca4e1.gif',
];

const yes = [
  '응!',
  '좋아!',
  '해!',
  'YESSSS!!',
  'OK!!',
  '좋아요',
  '하세요',
  '응',
  'yes',
  '좋습니다',
  '좋은 생각이야!',
  '맞아요',
];
const no = [
  '안돼!',
  '하지마!',
  'Nooooo!!!!',
  'Nope',
  '하지마세요',
  '아니오',
  '안됩니다',
  '아닙니다',
  '틀렸습니다',
  'NO',
  '가만히 계세요',
  '하지마',
  '안돼',
  '아냐!',
];

const getSafeImage = (image: string, answer: string): string => {
  if (!NG.includes(image)) return image;

  return answer === 'yes'
    ? 'https://yesno.wtf/assets/yes/10-271c872c91cd72c1e38e72d2f8eda676.gif'
    : 'https://yesno.wtf/assets/no/26-34b31d1f0777f70c61488f67a36576a9.gif';
};

const getRandomAnswer = (answer: string): string => {
  const source = answer === 'yes' ? yes : no;
  return source[Math.floor(Math.random() * source.length)];
};

export const fetchOxAnswer = createAsyncThunk(
  '/ask/ox',
  async (ask: string, thunkAPI) => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_OX_SERVER}`);
      const { answer, image } = res.data;

      const safeImage = getSafeImage(image, answer);
      const output = getRandomAnswer(answer);

      return {
        ask,
        answer: output,
        pic: safeImage,
        bgSet: answer,
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
  bgSet: '',
  list: [],
  loading: false,
  error: null,
};

const oxSlice = createSlice({
  name: 'ox',
  initialState,
  reducers: {
    setList(state, action: PayloadAction<OXType[]>) {
      state.list = action.payload;
    },
    setAsk(state, action: PayloadAction<OXType>) {
      state.ask = action.payload.ask;
      state.answer = action.payload.answer;
      state.bgSet = action.payload.bgSet;
      state.pic = action.payload.pic;
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
        const prev = state.list;
        const newList = [action.payload, ...prev.slice(0, 4)];
        state.list = newList;
        state.ask = action.payload.ask;
        state.answer = action.payload.answer;
        state.bgSet = action.payload.bgSet;
        state.pic = action.payload.pic;
        addList(newList);
      })
      .addCase(fetchOxAnswer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setList, setAsk } = oxSlice.actions;
export default oxSlice.reducer;
