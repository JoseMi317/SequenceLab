import { createSlice } from "@reduxjs/toolkit";

const tickerSlice = createSlice({
	name: "ticker",
	initialState: {
		TickerName: "Example Ticker",
		headerText: "New Ticker",
		headerIcon: "",
		items: [
			{
				title: "New Ticker",
				text: "This is a new ticker item",
				active: true,
			},
		],
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
				fontSize: 14,
				color: "",
				iconColor: "",
				iconSize: 0,
				textDecoration: "",
			},
			body: {
				fontSize: 14,
				color: "#000000",
				titleColor: "",
				titleFontSize: 16,
				textDecoration: "",
			},
		},
	},
	reducers: {
		setProperty: (state, action) => {
			const { key, value } = action.payload;
			console.log(key);
			if (!Array.isArray(key)) {
				console.warn(
					'setProperty key debe ser un array: ["basic", "colors", "text"]'
				);
				return;
			}

			let target = state;
			for (let i = 0; i < key.length - 1; i++) {
				if (target[key[i]] === undefined) {
					console.warn(
						`Ruta no válida en el state: ${key
							.slice(0, i + 1)
							.join(".")}`
					);
					return;
				}
				target = target[key[i]];
			}

			target[key[key.length - 1]] = value;
		},
		setItem: (state, action) => {
			const { index, item } = action.payload;
			if (index < 0 || index >= state.items.length) {
				console.warn("Índice fuera de rango");
				return;
			}
			state.items[index] = item;
		},

		showItem: (state, action) => {
			const { index } = action.payload;
			if (index < 0 || index >= state.items.length) {
				console.warn("Índice fuera de rango");
				return;
			}
			state.items[index].active = !state.items[index].active;
		},
		
		deleteItem: (state, action) => {
			const { index } = action.payload;
			if (index < 0 || index >= state.items.length) {
				console.warn("Índice fuera de rango");
				return;
			}
			state.items.splice(index, 1);
		},

		addItem: (state) => {
			state.items.push({
			title: "New Ticker",
			text: "",
			active: true,
			});
		},
		
	},
});

export const { setProperty, setItem, showItem, deleteItem, addItem } = tickerSlice.actions;
export const selectTicker = (state) => state.ticker;
export default tickerSlice.reducer;
