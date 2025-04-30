export default function LocationSection() {
    return (
        <section className="space-y-2 my-8">
            <h2 className="text-[32px] text-[#171717] font-bold">Location</h2>
            <div className="flex gap-8 items-center mt-4">
                <div>
                    <h3 className="font-bold text-[#4E566B] text-[24px]">
                        NDE Field
                    </h3>
                    <p className="text-sm text-[#4A4A4A]">
                        Jean Baptiste Point du Sable Lake Shore Drive, Chicago,
                        Illinois
                    </p>
                </div>
                <button className="border border-[#4E566B] px-4 py-1 rounded-full text-black text-sm">
                    Open maps
                </button>
            </div>
        </section>
    );
}
