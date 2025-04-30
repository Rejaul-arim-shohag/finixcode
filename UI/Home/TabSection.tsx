"use client";
import React, { useState } from "react";
import Players from "./Players";
import InformationDetails from "./InformationDetails";

const tabs = [
    { label: "Info", content: "Welcome to the Home tab!" },
    { label: "Player", content: "This is your Profile tab." },
    { label: "Comments", content: "Adjust your preferences in Settings." },
];

export default function TabSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full">
            {/* Tab Headers */}
            <div className="flex justify-between">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`flex-1 px-4 py-2 cursor-pointer border-b-2 text-center
              ${
                  activeTab === index
                      ? "text-[#DA6049] border-[#DA6049]"
                      : "text-black border-[#E5E5E5]"
              }
            `}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            {/* <div style={{ padding: "20px", border: "1px solid #ccc" }}>
                {tabs[activeTab].content}
            </div> */}
            <InformationDetails />
            <Players />
        </div>
    );
}
