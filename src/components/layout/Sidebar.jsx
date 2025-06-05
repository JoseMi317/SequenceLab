import React, { useState } from "react";
import { FileText, Paintbrush, Settings } from "lucide-react";
import ContentTab from "./ContentTab";
import CustomTab from "./CustomTab";
import SettingTab from "./SettingTab";

const tabs = [
  { id: "content", icon: <FileText />, label: "Contenido" },
  { id: "customization", icon: <Paintbrush />, label: "Customización" },
  { id: "settings", icon: <Settings />, label: "Settings" },
];

export default function SidebarLayout() {
  const [activeTab, setActiveTab] = useState("content");

  return (
    <div className="flex h-screen w-[30rem] bg-black text-white">
      <aside className="w-16 bg-zinc-900 flex flex-col items-center py-4 space-y-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`p-2 rounded-md hover:bg-zinc-700 ${
              activeTab === tab.id ? "bg-black" : ""
            }`}
            title={tab.label}
          >
            {tab.icon}
          </button>
        ))}
      </aside>

      <main className="flex-1 p-6 overflow-y-auto">
        {activeTab === "content" && <ContentTab />}
        {activeTab === "customization" && <CustomTab />}
        {activeTab === "settings" && <SettingTab />}
      </main>
    </div>
  );
}
