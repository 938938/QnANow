import { configureStore } from '@reduxjs/toolkit';
import oxReducer from './oxSlice';
import aiReducer from './aiSlice';

export const store = configureStore({
  reducer: {
    ox: oxReducer,
    ai: aiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
