import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import ProfileReducer from '../features/Profiles/ProfileSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    profiles:ProfileReducer,
  },
});
