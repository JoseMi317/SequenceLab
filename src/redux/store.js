import {configureStore} from '@reduxjs/toolkit';
import tickerSlice from './tickerSlice';

export const store = configureStore({
  reducer: 
  {
    ticker: tickerSlice,
  }
});