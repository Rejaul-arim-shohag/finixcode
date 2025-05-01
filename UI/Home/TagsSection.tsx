export default function TagsSection() {
    return (
        <div className="flex justify-between my-12">
            <div className="flex gap-3">
                <span className="bg-[#E6F8F8] text-black px-6 py-2 rounded-full text-lg">
                    Football
                </span>
                <span className="bg-blue-100 text-black px-6 py-2 rounded-full text-lg">
                    Relay
                </span>
                <span className="bg-[#FFE8F0] text-black px-6 py-2 rounded-full text-lg">
                    Female
                </span>
                <span className="bg-[#EFEDFF] text-black px-6 py-2 rounded-full text-lg">
                    Age: Below 25
                </span>
            </div>
            <div className="flex  items-center">
                <svg
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="0.00292969"
                        y="18.0308"
                        width="6.00057"
                        height="7.99988"
                        fill="#63CFA0"
                    />
                    <rect
                        x="6.80347"
                        y="12.0309"
                        width="6.00057"
                        height="13.9998"
                        fill="#CFFCE8"
                    />
                    <rect
                        x="13.604"
                        y="6.03101"
                        width="6.00057"
                        height="19.9996"
                        fill="#CFFCE8"
                    />
                    <rect
                        x="20.4047"
                        y="0.0311279"
                        width="6.00057"
                        height="25.9995"
                        fill="#CFFCE8"
                    />
                </svg>
                <span className="text-black px-3 py-2 rounded-full text-lg">
                    Beginner
                </span>
            </div>
        </div>
    );
}
