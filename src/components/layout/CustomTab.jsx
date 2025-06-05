import { ArrowLeft, ArrowRight, ArrowUp, ArrowDown } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setProperty } from "../../redux/tickerSlice";

export default function CustomTab() {
  const state = useSelector((state) => state.ticker);
  const { basic, advance } = state;
  const { animation, labelStyle, skin, colors } = basic;
  const {text, background, primary} = colors;
  const dispatch = useDispatch();

  const presets = [
    {
      name: "Dark",
      colors: { text: "#ffffff", background: "#111827", primary: "#6366f1" },
    },
    {
      name: "Light",
      colors: { text: "#111827", background: "#f9fafb", primary: "#3b82f6" },
    },
    {
      name: "Sunset",
      colors: { text: "#fff7ed", background: "#fb923c", primary: "#be123c" },
    },
    {
      name: "Retro",
      colors: { text: "#0f172a", background: "#facc15", primary: "#14b8a6" },
    },
    {
      name: "Rose",
      colors: { text: "#fff1f2", background: "#f43f5e", primary: "#9f1239" },
    },
    {
      name: "Ocean",
      colors: { text: "#e0f2fe", background: "#0284c7", primary: "#0369a1" },
    },
    {
      name: "Forest",
      colors: { text: "#f0fdf4", background: "#16a34a", primary: "#15803d" },
    },
    {
      name: "Cyberpunk",
      colors: { text: "#f3e8ff", background: "#8b5cf6", primary: "#a855f7" },
    },
    {
      name: "Neon",
      colors: { text: "#ffffff", background: "#000000", primary: "#00ff00" },
    },
    {
      name: "Vintage",
      colors: { text: "#3b3b3b", background: "#f5f5dc", primary: "#8b4513" },
    },
  ];

  const handleColorChange = (key, value) => {
    dispatch(setProperty({ key, value }));
  };

  return (
    <div className="space-y-6 text-white overflow-auto">
      {/* Header */}
      <div className="border-b border-zinc-700 pb-4">
        <h2 className="text-xl font-semibold">Custom Ticker</h2>
      </div>

      {/* Animation */}
      <section>
        <h3 className="font-medium text-base mb-2">Animation</h3>
        <div className="grid grid-cols-4 gap-4">
          {[
            { dir: "left", icon: <ArrowLeft size={20} /> },
            { dir: "right", icon: <ArrowRight size={20} /> },
            { dir: "up", icon: <ArrowUp size={20} /> },
            { dir: "down", icon: <ArrowDown size={20} /> },
          ].map(({ dir, icon }) => (
            <button
              key={dir}
              className={`p-3 bg-zinc-800 hover:bg-zinc-700 rounded-md flex justify-center items-center border ${
                animation === dir
                  ? "border-blue-500"
                  : "border-zinc-600"
              }`}
              onClick={() =>
                dispatch(setProperty({ key: ["basic", "animation"], value: dir }))
              }
            >
              {icon}
            </button>
          ))}
        </div>
      </section>

      {/* Label Style */}
      <section>
        <h3 className="font-medium text-base mb-2">Label Style</h3>
        <div className="grid grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              onClick={() =>
                dispatch(setProperty({ key: ["basic", "labelStyle"], value: i }))
              }
              className={`h-10 rounded-md cursor-pointer ${
                labelStyle === i
                  ? "bg-zinc-800 border-2 border-blue-500"
                  : "bg-zinc-800 border border-zinc-600"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Design */}
      <section>
        <h3 className="font-medium text-base mb-2">Design</h3>
        <p className="text-sm text-zinc-400 mb-4">
          Select the main colors for your widget.
        </p>
        <div className="flex gap-6">
          {["text", "background", "primary"].map((key) => (
            <div key={key} className="flex flex-col items-center">
              <div
                className="w-16 h-16 rounded-md border"
                style={{ backgroundColor: colors[key] }}
              />
              <input
                type="color"
                value={colors[key]}
                onChange={(e) => handleColorChange(key, e.target.value)}
                className="mt-2"
              />
              <span className="text-xs mt-1 capitalize">{key}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Skins */}
      <section>
        <h3 className="font-medium text-base mb-2">Skins</h3>
        <div className="flex flex-wrap gap-3">
          {presets.map((preset, index) => {
            const isSelected =
              JSON.stringify(colors) === JSON.stringify(preset.colors);

            return (
              <div
                key={index}
                onClick={() => {
                  dispatch(setProperty({ key: ["basic", "colors", "text"], value: "#fff" }));
                  Object.entries(preset.colors).forEach(([key, value]) => {
                    dispatch(setProperty({ key: ["basic", "colors", key], value }));
                  });
                }}
                className={`cursor-pointer w-40 h-10 px-2 rounded-md border flex items-center justify-between transition-all duration-150 ${
                  isSelected
                    ? "border-blue-500 bg-zinc-800 ring-1 ring-blue-400"
                    : "border-zinc-600 bg-zinc-900 hover:border-blue-400"
                }`}
              >
                {/* Color Dots */}
                <div className="flex space-x-1">
                  {Object.values(preset.colors).map((color, idx) => (
                    <div
                      key={idx}
                      className="w-5 h-5 rounded-full border border-zinc-700"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                {/* Name */}
                <span className="text-xs text-zinc-200 font-medium tracking-tight">
                  {preset.name}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
