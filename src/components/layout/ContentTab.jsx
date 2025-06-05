import React, { useState } from "react";
import {
  Trash2,
  ChevronDown,
  ChevronUp,
  Plus,
  GripVertical,
} from "lucide-react";

export default function ContentTab() {
  const [items, setItems] = useState([
    { title: "Blockbuster Movie Premiere", open: false, isActive: true, description: "", url: ""},
  ]);

  const [labelText, setLabelText] = useState("");

  const removeItem = (index) => {
    const updated = [...items];
    updated.splice(index, 1);
    setItems(updated);
  };

    const toggleItem = (index) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, open: !item.open } : item
      )
    );
  };

  const updateTitle = (index, newTitle) => {
    const updated = [...items];
    updated[index].title = newTitle;
    setItems(updated);
  };

  const addNewItem = () => {
    setItems([...items, { title: "New Ticker", open: false }]);
  };

  const toggleIsActive = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-zinc-700 pb-4">
        <h2 className="text-xl font-semibold">Ticker</h2>
      </div>

      {/* Icon + Label */}
      <div className="flex gap-6 items-start">
        <div className="w-32 h-32 border-2 border-dashed border-zinc-600 flex items-center justify-center rounded">
          Icons
        </div>
        <div className="flex-1">
          <label className="block text-md text-zinc-400 mb-1">Label Text</label>
          <input
            value={labelText}
            onChange={(e) => setLabelText(e.target.value)}
            className="w-full bg-zinc-800 text-white px-3 py-2 rounded border border-zinc-700 focus:outline-none"
            placeholder="Enter label..."
          />
        </div>
      </div>
      
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      {/* Lista de items */}
      <div className="space-y-4 ">
        <label className="text-md text-zinc-400">Items</label>
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-2 rounded bg-zinc-800 border border-zinc-700 text-white mt-2 focus:outline-none"
        />

        {items.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-800 rounded px-4 py-3 text-white space-y-2"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <GripVertical size={16} className="text-zinc-500" />
                <input
                  value={item.title}
                  onChange={(e) => updateTitle(index, e.target.value)}
                  className="bg-transparent outline-none w-full"
                />
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="text-zinc-400 hover:text-white"
                  onClick={() => toggleItem(index)}
                >
                  {item.open ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>
                <button
                  onClick={() => removeItem(index)}
                  className="text-red-500 hover:text-red-400"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
            {item.open && (
              <div className="text-md text-zinc-400 border-t border-zinc-700 pt-2">
                <div className="flex items-center justify-end mb-2">
                  <button
                    onClick={() => toggleIsActive(item.id)}
                    className={`relative w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 
                      ${item.isActive ? "bg-green-500" : "bg-zinc-600"}`}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300
                        ${item.isActive ? "translate-x-6" : "translate-x-0"}`}
                    />
                  </button>
                </div>
                <input
                  type="text" 
                  value={item.description}
                  className="w-full bg-zinc-800 text-white px-3 py-2 rounded border border-zinc-700 focus:outline-none" 
                  onChange={(e) => {
                    const updated = [...items];
                    updated[index].description = e.target.value;
                    setItems(updated);
                  }}
                  placeholder="Description..." />
                <input
                  type="url"
                  value={item.url}
                  className="w-full bg-zinc-800 text-white px-3 py-2 rounded border border-zinc-700 focus:outline-none mt-2"
                  onChange={(e) => {
                    const updated = [...items];
                    updated[index].url = e.target.value;
                    setItems(updated);
                  }}
                  placeholder="URL..."
                />
              </div>
            )}
          </div>
        ))}
        {/* Botón para agregar ticker */}
        <button
          onClick={addNewItem}
          className="w-full mt-2 py-2 border border-dashed border-zinc-600 text-zinc-400 hover:bg-zinc-800 rounded flex justify-center items-center gap-2"
        >
          <Plus size={18} />
          Add a Ticker
        </button>
      </div>
    </div>
  );
}
