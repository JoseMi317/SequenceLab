import { Layout } from "./components/Layout";
export default function Sequence() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			Sequence Page
			<div className="flex flex-col items-center justify-center gap-8">
				<p className="text-center text-lg text-gray-700">
					This is the Sequence page, where you can explore various
					sequences and their properties.
				</p>
				<Layout />
			</div>
		</div>
	);
}
