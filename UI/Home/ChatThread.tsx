import ChatMessage from "./ChatMessage";

export interface Message {
    id: number;
    initials: string;
    name: string;
    message: string;
    time: string;
    bgColor: string;
    textColor: string;
    replies?: Message[];
}

const ChatThread = ({
    message,
    isReply = false,
}: {
    message: Message;
    isReply?: boolean;
}) => {
    return (
        <div className="mb-4">
            <ChatMessage {...message} isReply={isReply} />
            {message.replies && message.replies.length > 0 && (
                <div className="mt-2 space-y-2">
                    {message.replies.map((reply) => (
                        <div key={reply.id}>
                            <ChatThread message={reply} isReply={true} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ChatThread;
