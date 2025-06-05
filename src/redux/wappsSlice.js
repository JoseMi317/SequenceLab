import { createSlice } from "@reduxjs/toolkit";

const wappsSlice = createSlice({
  name: "wapps",
  initialState: {
    wapps: "ticker",
  },

  reducers: {
    updateWapp: (state, action) => {
        state.wapps = action.payload ;
    },
  },
});
export const { updateWapp } = wappsSlice.actions;
export const selectWapps = (state) => state.wapps.wapps;
export default wappsSlice.reducer;