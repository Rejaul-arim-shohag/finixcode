import ChatThread, { Message } from "./ChatThread";
import CommentInput from "./CommentInput";

const messages: Message[] = [
    {
        id: 1,
        initials: "AM",
        name: "Alex Mercer",
        message: "Looking forward to the game! What's the final player count?",
        time: "14 min",
        bgColor: "bg-[#34735F]",
        textColor: "text-white",
        replies: [
            {
                id: 2,
                initials: "RK",
                name: "Rifat Khan",
                message: "missing few players",
                time: "14 min",
                bgColor: "bg-[#FDE8CD]",
                textColor: "text-black",
            },

            {
                id: 3,
                initials: "RK",
                name: "Rifat Khan",
                message: "missing few players",
                time: "14 min",
                bgColor: "bg-[#FDE8CD]",
                textColor: "text-black",
            },
        ],
    },
    {
        id: 4,
        initials: "PK",
        name: "Alex Mercer",
        message: "Looking forward to the game! What's the final player count?",
        time: "14 min",
        bgColor: "bg-[#34735F]",
        textColor: "text-white",
        replies: [
            {
                id: 5,
                initials: "RK",
                name: "Rifat Khan",
                message: "missing few players",
                time: "14 min",
                bgColor: "bg-[#FDE8CD]",
                textColor: "text-black",
            },

            {
                id: 6,
                initials: "RK",
                name: "Rifat Khan",
                message: "missing few players",
                time: "14 min",
                bgColor: "bg-[#FDE8CD]",
                textColor: "text-black",
            },
        ],
    },
];

const ChatList = () => {
    return (
        <div className="grid grid-cols-3 px-8 py-4">
            <div className="col-span-2 bg-[#FFFFFF] p-6 rounded-2xl">
                <div className="w-full">
                    {messages.map((msg) => (
                        <ChatThread key={msg.id} message={msg} />
                    ))}
                </div>
                <CommentInput />
            </div>
        </div>
    );
};

export default ChatList;
