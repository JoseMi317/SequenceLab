import { createSlice } from '@reduxjs/toolkit';

const tickerSlice = createSlice({
  name: 'ticker',
  initialState: {
    headerText: "New Ticker",
    headerIcon:"",
    items: [{
      title:"Type Content Here", 
      text: "This is the first item", 
      active: true
    }],
    basic: {
      animation: "left",
      labelStyle: 0,
      colors: {
        text: "#000000",
        background: "#ffffff",
        primary: "#000000",
      },
    },
    advanced: {
      fontFamily: "Roboto",
      loop: true,
      height: 50,
      showHeader: true,
      position: "",
      borderRadius: 0,
      borderWidth: 0,
      header: {
        fontSize: 0,
        color: "",
        iconColor: "",
        iconSize: 0,
        textDecoration: "",
      },
      body: {
        fontSize: 0,
        color: "",
        titleColor: "",
        titleFontSize: 0,
        textDecoration: "",
      },
    },
  },
  reducers: {
    setProperty: (state, action) => {
      const { key, value } = action.payload;

      if (!Array.isArray(key)) {
        console.warn('setProperty key debe ser un array: ["basic", "colors", "text"]');
        return;
      }

      let target = state;
      for (let i = 0; i < key.length - 1; i++) {
        if (target[key[i]] === undefined) {
          console.warn(`Ruta no válida en el state: ${key.slice(0, i + 1).join('.')}`);
          return;
        }
        target = target[key[i]];
      }

      target[key[key.length - 1]] = value;
    },
  },
});

export const { setProperty } = tickerSlice.actions;
export const selectTicker = (state) => state.ticker;
export default tickerSlice.reducer;
