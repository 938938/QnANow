import { configureStore } from '@reduxjs/toolkit';
import oxReducer from './oxSlice';

export const store = configureStore({
  reducer: {
    ox: oxReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
