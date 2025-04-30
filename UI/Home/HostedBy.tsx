export default function HostedBy() {
    return (
        <section className="space-y-2 max-w-2xl">
            <h2 className="text-[32px] text-[#171717] font-bold">Hosted by</h2>

            <div className="bg-gray-700 text-white p-8 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <img
                        src="/hosted_user.png"
                        className="w-12 h-12 rounded-full object-cover"
                        alt="Host"
                    />
                    <div>
                        <h4 className="font-semibold">Alex Mercer</h4>
                        <p className="text-sm">
                            23 activities hosted • 4.5 host rating
                        </p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="bg-yellow-200 text-black px-3 py-1 rounded-full text-sm">
                        Message
                    </button>
                    <button className="bg-white text-black px-3 py-1 rounded-full text-sm">
                        View profile
                    </button>
                </div>
            </div>
        </section>
    );
}
