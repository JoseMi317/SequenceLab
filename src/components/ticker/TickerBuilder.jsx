import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css"; // Assuming you have a CSS file for styles

const TickerBuilder = () => {
	const dispatch = useDispatch();
	const params = {
		headerText: "New Ticker",
		headerIcon: "",
		items: [
			{
				title: "Type Content Here",
				text: "This is the first item",
				active: true,
			},
		],
		basic: {
			animation: "",
			labelStyle: 0,
			colors: {
				text: "#000000",
				background: "#636B2F",
				primary: "#000000",
			},
		},
		advanced: {
			fontFamily: "Roboto",
			loop: false,
			showHeader: true,
			position: "",
			borderRadius: 10,
			borderWidth: 2,
			height: 75,
			header: {
				fontSize: 14,
				color: "",
				iconColor: "",
				iconSize: 0,
				textDecoration: "",
			},
			body: {
				fontSize: 14,
				color: "#ffffff",
				titleColor: "#ffffff",
				titleFontSize: 16,
				textDecoration: "none",
			},
		},
	};

	const tickerSelector = useSelector((state) => state.ticker);

	React.useEffect(() => {
		console.log("tickerSelector", tickerSelector);
	}, [tickerSelector]);
	const repeatedItems = [...tickerSelector.items, ...tickerSelector.items];
	const tickerItems = repeatedItems.filter((item) => item.active);

	return (
		<div className="ticker-container full flex flex-row m-8">
			<div
				className="ticker flex flex-row w-full justify-center items-center overflow-hidden"
				style={{
					border: `${tickerSelector.advanced.borderWidth}px solid ${tickerSelector.basic.colors.primary}`,
					borderRadius: `${tickerSelector.advanced.borderRadius}px`,
					height: tickerSelector.advanced.height + "px",
				}}
			>
				<div
					className="h-full label flex flex-row bg-blue-600 w-[20%] gap-3 justify-center items-center"
					style={{
						backgroundColor: tickerSelector.basic.colors.primary,
						display: tickerSelector.advanced.showHeader
							? "flex"
							: "none",
					}}
				>
					<span className="text-center">
						<svg
							stroke="currentColor"
							fill="none"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke-linecap="round"
							stroke-linejoin="round"
							height="1.2em"
							width="1.2em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="12" cy="12" r="2"></circle>
							<path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
						</svg>
					</span>
					<p
						className="text-center"
						style={{
							fontSize: tickerSelector.advanced.header.fontSize,
							fontFamily: tickerSelector.advanced.fontFamily,
							color: tickerSelector.advanced.header.color,
						}}
					>
						{tickerSelector.headerText}
					</p>
				</div>
				<div
					className="marquee w-full flex items-center justify-center overflow-hidden px-[20px] py-[10px] h-full"
					style={{
						backgroundColor: tickerSelector.basic.colors.background,
					}}
				>
					<div className="marquee-track flex flex-row items-center gap-10 animate-marquee whitespace-nowrap">
						{tickerItems.map((item, idx) => (
							<div
								className="item-child flex flex-row gap-1"
								key={idx}
							>
								<h3
									className="text-black font-bold"
									style={{
										fontSize:
											tickerSelector.advanced.body
												.titleFontSize,
										color: tickerSelector.basic.colors.text,
										fontFamily:
											tickerSelector.advanced.fontFamily,
									}}
								>
									{item.title || "Default Title"}
								</h3>
								<p
									className="text-black content-center"
									style={{
										fontSize:
											tickerSelector.advanced.body
												.fontSize,
										color: tickerSelector.basic.colors.text,
										textDecoration:
											tickerSelector.advanced.body
												.textDecoration,
										fontFamily:
											tickerSelector.advanced.fontFamily,
									}}
								>
									{item.text}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export { TickerBuilder };
