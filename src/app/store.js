import { configureStore } from '@reduxjs/toolkit';
import articleReducer from '../components/articleSlice'


export const store = configureStore({
  reducer: {
    article: articleReducer,
  },
});
