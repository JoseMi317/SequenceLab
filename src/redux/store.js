import {configureStore} from '@reduxjs/toolkit';
import tickerSlice from './tickerSlice';
import wappsSlice from './wappsSlice';
import urlReducer from './urlSlice';

export const store = configureStore({
  reducer: 
  {
    ticker: tickerSlice,
    wapps: wappsSlice,
    url: urlReducer,
  }
});