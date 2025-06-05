import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FileText, Paintbrush, Settings } from "lucide-react";

import ContentTab from "./ContentTab";
import CustomTab from "./CustomTab";
import SettingTab from "./SettingTab";
import UrlPreviewTab from "./UrlPreviewTab";

import { updateWapp } from "../../redux/wappsSlice";
import { setUrl } from "../../redux/urlSlice";

const tabs = [
  { id: "content", icon: <FileText />, label: "Contenido" },
  { id: "customization", icon: <Paintbrush />, label: "Customización" },
  { id: "settings", icon: <Settings />, label: "Settings" },
];

const WappTypes = [
  { id: "ticker", label: "Ticker" },
  { id: "youtube", label: "YouTube" },
  { id: "web", label: "WebContent" },
  { id: "wether", label: "Wether" },
];

export default function SidebarLayout() {
  const [activeTab, setActiveTab] = useState("content");
  const [tickerType, setTickerType] = useState("ticker");
  const dispatch = useDispatch();

  const isSimpleUrlMode = tickerType === "youtube" || tickerType === "web";

  const handleTypeChange = (typeId) => {
    dispatch(setUrl("")); // Siempre limpia el campo
    setTickerType(typeId);
    dispatch(updateWapp(typeId));
  };


  return (
    <div className="flex h-screen w-[30rem] bg-black text-white">
      {/* Barra lateral de iconos */}
      <aside className="w-16 bg-zinc-900 flex flex-col items-center py-4 space-y-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`p-2 rounded-md hover:bg-zinc-700 ${
              activeTab === tab.id ? "bg-black" : ""
            }`}
            title={tab.label}
            disabled={isSimpleUrlMode}
          >
            {tab.icon}
          </button>
        ))}
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Selector de tipo de contenido */}
        <div className="mb-6 flex space-x-2">
          {WappTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => handleTypeChange(type.id)}
              className={`px-3 py-1 rounded ${
                tickerType === type.id
                  ? "bg-indigo-600 text-white"
                  : "bg-zinc-700 text-gray-300"
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Mostrar solo el input URL o los tabs según el tipo */}
        {isSimpleUrlMode ? (
          <UrlPreviewTab />
        ) : (
          <>
            {activeTab === "content" && <ContentTab />}
            {activeTab === "customization" && <CustomTab />}
            {activeTab === "settings" && <SettingTab />}
          </>
        )}
      </main>
    </div>
  );
}
