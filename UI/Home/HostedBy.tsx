export default function HostedBy() {
    return (
        <section className="space-y-4 max-w-xl py-4">
            <h2 className="text-[32px] text-[#171717] font-bold">Hosted by</h2>

            <div className="bg-[#4E566B] text-white p-8 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <img
                        src="/hosted_user.png"
                        className="w-12 h-12 rounded-full object-cover"
                        alt="Host"
                    />
                    <div>
                        <h4 className="font-semibold">Alex Mercer</h4>
                        <p className="text-sm">23 activities hosted</p>
                        <p className="text-sm">4.5 host rating</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="bg-[#FDE8CD] text-black px-4 py-1 rounded-full text-sm">
                        Message
                    </button>
                    <button className=" border border-[#FDE8CD] text-[#FDE8CD] px-4 py-1 rounded-full text-sm">
                        View profile
                    </button>
                </div>
            </div>
        </section>
    );
}
