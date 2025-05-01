import React from "react";

interface ChatMessageProps {
    initials: string;
    name: string;
    message: string;
    time: string;
    bgColor?: string;
    textColor?: string;
    isReply?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
    initials,
    name,
    message,
    time,
    bgColor = "bg-[#34735F]",
    textColor = "text-white",
    isReply = false,
}) => {
    return (
        <div className={`flex flex-col`}>
            <div className="flex">
                {isReply && (
                    <div className="border-l-2 border-dashed border-gray-400 mr-6 " />
                )}

                <div
                    className={`rounded-2xl ${bgColor} ${textColor} p-4 w-full`}
                >
                    <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                            <div
                                className={`w-10 h-10 rounded-full ${
                                    isReply
                                        ? "bg-[#34735F] text-[#FDE8CD]"
                                        : "bg-[#FDE8CD] text-[#34735F]"
                                }  font-semibold flex items-center justify-center text-md`}
                            >
                                {initials}
                            </div>
                            <div>
                                <p
                                    className={`font-bold text-md ${
                                        textColor === "text-black"
                                            ? "text-[#34735F]"
                                            : "text-[#FDE8CD]"
                                    }`}
                                >
                                    {name}
                                </p>
                                <div
                                    className={`text-sm mt-1 ${
                                        textColor === "text-black"
                                            ? "text-gray-700"
                                            : "text-white"
                                    }`}
                                >
                                    {message}
                                </div>
                            </div>
                        </div>
                        <div className=" flex gap-1">
                            <span
                                className={`text-md ${
                                    textColor === "text-black"
                                        ? "text-gray-600"
                                        : "text-white/70"
                                }`}
                            >
                                {time}
                            </span>
                            <svg
                                width="22"
                                height="23"
                                viewBox="0 0 22 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.0001 17.7687L11.0001 17.7591M11.0001 11.0312L11.0001 11.0216M11.0001 4.2937L11.0001 4.28408M11.0001 16.8062C11.5317 16.8062 11.9626 17.2371 11.9626 17.7687C11.9626 18.3003 11.5317 18.7312 11.0001 18.7312C10.4685 18.7312 10.0376 18.3003 10.0376 17.7687C10.0376 17.2371 10.4685 16.8062 11.0001 16.8062ZM11.0001 10.0687C11.5317 10.0687 11.9626 10.4996 11.9626 11.0312C11.9626 11.5628 11.5317 11.9937 11.0001 11.9937C10.4685 11.9937 10.0376 11.5628 10.0376 11.0312C10.0376 10.4996 10.4685 10.0687 11.0001 10.0687ZM11.0001 3.3312C11.5317 3.3312 11.9626 3.76213 11.9626 4.2937C11.9626 4.82528 11.5317 5.2562 11.0001 5.2562C10.4685 5.2562 10.0376 4.82528 10.0376 4.2937C10.0376 3.76213 10.4685 3.3312 11.0001 3.3312Z"
                                    stroke="#171717"
                                    stroke-width="1.2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {!isReply && (
                <button className="mt-2 text-md text-[#808080] font-medium flex gap-2 items-center mb-4">
                    <svg
                        width="26"
                        height="27"
                        viewBox="0 0 26 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16.2485 11.266L21.6652 16.6827L16.2485 22.0994"
                            stroke="#808080"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M4.33203 4.76601V12.3493C4.33203 13.4986 4.78858 14.6008 5.60124 15.4135C6.41389 16.2261 7.51609 16.6827 8.66536 16.6827H21.6654"
                            stroke="#808080"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Reply
                </button>
            )}
        </div>
    );
};


export default ChatMessage;
