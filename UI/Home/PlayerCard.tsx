interface PlayerCardProps {
    initials: string;
    name: string;
    isHost?: boolean;
}

export default function PlayerCard({
    initials,
    name,
    isHost = false,
}: PlayerCardProps) {
    return (
        <div className="flex items-center justify-between bg-[#34735F] text-cream px-4 py-3 rounded-2xl shadow-sm">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FDE8CD] text-green-900 flex items-center justify-center font-semibold">
                    {initials}
                </div>
                <span className="text-lg text-[#FDE8CD]">
                    {name}{" "}
                    {isHost && (
                        <span className="text-sm text-cream/70">(Host)</span>
                    )}
                </span>
            </div>
            <button className=" text-green-900 px-4 py-1 rounded-md font-medium bg-white transition">
                Message
            </button>
        </div>
    );
}
