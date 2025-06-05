import React, { useState } from "react";
import "./style.css"; // Assuming you have a CSS file for styles

const TickerBuilder = () => {
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

	const repeatedItems = [...params.items, ...params.items];
	const tickerItems = repeatedItems.filter((item) => item.active);

	return (
		<div className="ticker-container full flex flex-row m-8">
			<div
				className="ticker flex flex-row w-full justify-center items-center overflow-hidden"
				style={{
					border: `${params.advanced.borderWidth}px solid ${params.basic.colors.primary}`,
					borderRadius: `${params.advanced.borderRadius}px`,
					height: params.advanced.height + "px",
				}}
			>
				<div
					className="h-full label flex flex-row bg-blue-600 w-[20%] gap-3 justify-center items-center"
					style={{
						backgroundColor: params.basic.colors.primary,
						display: params.advanced.showHeader ? "flex" : "none",
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
							fontSize: params.advanced.header.fontSize,
							fontFamily: params.advanced.fontFamily,
							color: params.advanced.header.color,
						}}
					>
						{params.headerText}
					</p>
				</div>
				<div
					className="marquee w-full flex items-center justify-center overflow-hidden px-[20px] py-[10px] h-full"
					style={{ backgroundColor: params.basic.colors.background }}
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
											params.advanced.body.titleFontSize,
										color: params.advanced.body.titleColor,
										fontFamily: params.advanced.fontFamily,
									}}
								>
									{item.title || "Default Title"}
								</h3>
								<p
									className="text-black content-center"
									style={{
										fontSize: params.advanced.body.fontSize,
										color: params.advanced.body.color,
										textDecoration:
											params.advanced.body.textDecoration,
										fontFamily: params.advanced.fontFamily,
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
