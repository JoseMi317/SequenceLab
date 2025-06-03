const Layout = () => {
	return (
		<div className="flex flex-col h-full">
			<div className="flex flex-col items-center justify-center gap-8 p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
				<p className="text-center text-lg text-gray-700">
					This is the Sequence page, where you can explore various
					sequences and their properties.
				</p>
			</div>
			<div className="flex-grow">
				{/* Content will be rendered here */}
			</div>
		</div>
	);
};

export { Layout };
