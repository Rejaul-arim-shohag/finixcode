"use client";
import React, { useState } from "react";
import Players from "./Players";
import InformationDetails from "./InformationDetails";
import OthersEventsSection from "./OthersEvent";

const tabs = [
    { id: 1, label: "Info", content: "Welcome to the Home tab!" },
    { id: 2, label: "Player", content: "This is your Profile tab." },
    {
        id: 3,
        label: "Comments",
        content: "Adjust your preferences in Settings.",
    },
];

export default function TabSection() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div>
            <div className="grid grid-cols-3 gap-4 items-start px-8 py-4">
                {/* Tab Headers */}
                <div className="flex justify-between col-span-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 px-4 py-2 cursor-pointer border-b-2 text-center
              ${
                  activeTab === tab.id
                      ? "text-[#DA6049] border-[#DA6049]"
                      : "text-black border-[#E5E5E5]"
              }
            `}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {activeTab === 1 && (
                <>
                    <InformationDetails />
                    <OthersEventsSection />
                </>
            )}
            {activeTab === 2 && <Players />}
        </div>
    );
}
