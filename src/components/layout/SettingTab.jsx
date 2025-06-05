import { useDispatch, useSelector } from "react-redux";
import { setProperty } from "../../redux/tickerSlice";

export default function SettingTab() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.ticker);
  const fontFamily = state.advanced.fontFamily || "";

  const handleChange = (keyPath, value) => {
    dispatch(setProperty({ key: keyPath, value }));
  };

  const fontOptions = [
    "Roboto",
    "Open Sans",
    "Poppins",
    "Lato",
    "Montserrat",
    "Oswald",
    "Raleway",
    "Playfair Display",
    "Merriweather",
    "Inter",
    "Nunito",
    "Rubik",
    "Work Sans",
    "Lobster",
    "Quicksand"
  ];

  const handleFontChange = async (e) => {
    const font = e.target.value;
    if (typeof window !== "undefined") {
      const WebFont = (await import("webfontloader")).default;
      WebFont.load({
        google: {
          families: [font],
        },
      });
    }
    dispatch(setProperty({ key: ["advanced", "fontFamily"], value: font }));
  };

  return (
    <div className="space-y-6 text-white">
      {/* Header */}
      <div className="border-b border-zinc-700 pb-4">
        <h2 className="text-xl font-semibold">Advance Settings</h2>
      </div>

      {/* General Settings */}
      <section>
        <h3 className="font-medium text-base mb-2">General</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Font Family */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Font Family
            </label>
            <select
              value={fontFamily}
              onChange={handleFontChange}
              className="bg-zinc-800 text-white border border-zinc-600 rounded-md px-4 py-2 w-full"
            >
              <option value="">Select a font</option>
              {fontOptions.map((font) => (
                <option key={font} value={font}>
                  {font}
                </option>
              ))}
            </select>
          </div>

          {/* Position */}
          <div>
            <label className="text-sm">Position</label>
            <select
              value={state.advanced.position}
              onChange={(e) => handleChange(["advanced", "position"], e.target.value)}
              className="mt-1 p-2 rounded bg-zinc-800 text-white w-full"
            >
              <option value="">Select</option>
              <option value="top">Top</option>
              <option value="bottom">Bottom</option>
            </select>
          </div>
          
            {/* Height Slider */}
            <div>
              <label className="text-sm flex justify-between">
                Height
                <span className="text-zinc-400">{state.advanced.height}px</span>
              </label>
              <input
                type="range"
                min="25"
                max="50"
                step="1"
                value={state.advanced.height}
                onChange={(e) =>
                  handleChange(["advanced", "height"], parseInt(e.target.value))
                }
                className="w-full mt-2 accent-blue-500"
              />
            </div>

          {/* Border Radius Slider */}
          <div>
            <label className="text-sm flex justify-between">
              Border Radius
              <span className="text-zinc-400">{state.advanced.borderRadius}px</span>
            </label>
            <input
              type="range"
              min="0"
              max="50"
              step="1"
              value={state.advanced.borderRadius}
              onChange={(e) =>
                handleChange(["advanced", "borderRadius"], parseInt(e.target.value))
              }
              className="w-full mt-2 accent-blue-500"
            />
          </div>

          {/* Border Width Slider */}
          <div>
            <label className="text-sm flex justify-between">
              Border Width
              <span className="text-zinc-400">{state.advanced.borderWidth}px</span>
            </label>
            <input
              type="range"
              min="0"
              max="20"
              step="1"
              value={state.advanced.borderWidth}
              onChange={(e) =>
                handleChange(["advanced", "borderWidth"], parseInt(e.target.value))
              }
              className="w-full mt-2 accent-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Toggles */}
      <section>
        <h3 className="font-medium text-base mb-2">Options</h3>
        <div className="space-y-4">

          {/* Loop Toggle */}
          <Toggle
            label="Loop"
            value={state.advanced.loop}
            onChange={(val) => handleChange(["advanced", "loop"], val)}
          />

          {/* Show Header Toggle */}
          <Toggle
            label="Show Header"
            value={state.advanced.showHeader}
            onChange={(val) => handleChange(["advanced", "showHeader"], val)}
          />
        </div>
      </section>
    </div>
  );
}

// Componente Toggle
function Toggle({ label, value, onChange }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm">{label}</span>
      <button
        onClick={() => onChange(!value)}
        className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${
          value ? "bg-blue-600" : "bg-zinc-600"
        }`}
      >
        <div
          className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-300 ${
            value ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
