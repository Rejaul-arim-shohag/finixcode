import React from "react";
import OtherEventCard, { EventCardProps } from "./OtherEventCard";

const events: EventCardProps[] = [
    {
        title: "Legends Rise on the Field",
        date: "Thu, Dec 5",
        time: "12.30AM - 12.30PM",
        location: "Bashundhara Sports Complex",
        image: "/event1.png",
        price: "320",
        spotsLeft: "2 spots left",
        level: "Advanced",
        attendees: "6/8",
        tags: ["Football", "Below 25y"],
    },
    {
        title: "Chasing Glory: Football Showdown",
        date: "Thu, Dec 5",
        time: "12.30AM - 12.30PM",
        location: "Bashundhara Sports Complex",
        image: "/event2.png",
        price: "320",
        spotsLeft: "2 spots left",
        level: "Advanced",
        attendees: "6/8",
        tags: ["Football", "Below 25y"],
    },
    {
        title: "United We Play, United Win",
        date: "Thu, Dec 5",
        time: "12.30AM - 12.30PM",
        location: "Bashundhara Sports Complex",
        image: "/event3.png",
        price: "320",
        spotsLeft: "2 spots left",
        level: "Advanced",
        attendees: "6/8",
        tags: ["Football", "Below 25y"],
    },
];

const OthersEventsSection: React.FC = () => {
    return (
        <section className="px-4 py-10 bg-white">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-purple-900">
                    Other events you may like
                </h2>
                <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-gray-200">
                        <svg
                            width="8"
                            height="15"
                            viewBox="0 0 8 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7 13.0312L1 7.03125L7 1.03125"
                                stroke="#4A4A4A"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-gray-200">
                        <svg
                            width="8"
                            height="15"
                            viewBox="0 0 8 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 1.03125L7 7.03125L1 13.0312"
                                stroke="#4A4A4A"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event, idx) => (
                    <OtherEventCard key={idx} {...event} />
                ))}
            </div>
        </section>
    );
};

export default OthersEventsSection;
