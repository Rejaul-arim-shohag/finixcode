// components/EventCard.tsx
import Image from "next/image";

export interface EventCardProps {
    title: string;
    date: string;
    time: string;
    location: string;
    image: string;
    price: string;
    spotsLeft: string;
    level: string;
    attendees: string;
    tags: string[];
}

const OtherEventCard: React.FC<EventCardProps> = ({
    title,
    date,
    time,
    location,
    image,
    price,
    spotsLeft,
    // level,
    attendees,
    tags,
}) => {
    return (
        <div className="rounded-3xl overflow-hidden border border-neutral-200  flex-shrink-0">
            <div className="relative w-full h-[160px]">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-3xl"
                />
                <div className="absolute top-3 right-6 text-white  p-1 rounded-full w-6 h-6">
                    <svg
                        width="28"
                        height="25"
                        viewBox="0 0 28 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#filter0_d_190_142)">
                            <path
                                d="M5.03781 3.60654C2.98756 5.65679 2.98756 8.9809 5.03781 11.0312L14.0002 19.9935L22.9624 11.0312C25.0127 8.9809 25.0127 5.65679 22.9624 3.60654C20.9122 1.55628 17.5881 1.55628 15.5378 3.60654L14.0002 5.14429L12.4624 3.60654C10.4122 1.55628 7.08806 1.55628 5.03781 3.60654Z"
                                fill="#4A4A4A"
                            />
                            <path
                                d="M5.03781 3.60654C2.98756 5.65679 2.98756 8.9809 5.03781 11.0312L14.0002 19.9935L22.9624 11.0312C25.0127 8.9809 25.0127 5.65679 22.9624 3.60654C20.9122 1.55628 17.5881 1.55628 15.5378 3.60654L14.0002 5.14429L12.4624 3.60654C10.4122 1.55628 7.08806 1.55628 5.03781 3.60654Z"
                                stroke="white"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_d_190_142"
                                x="0.500122"
                                y="0.318848"
                                width="27"
                                height="23.9246"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                            >
                                <feFlood
                                    flood-opacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dy="1.25" />
                                <feGaussianBlur stdDeviation="1.25" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_190_142"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_190_142"
                                    result="shape"
                                />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>

            <div className="px-4 py-3 space-y-3">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className={`px-2 py-0.5 rounded-full ${
                                tag.toLowerCase().includes("below")
                                    ? "bg-purple-100 text-purple-700"
                                    : "bg-green-100 text-green-700"
                            }`}
                        >
                            {tag}
                        </span>
                    ))}
                    <span className="ml-auto flex items-center gap-1 text-xs text-gray-600">
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                x="0.668121"
                                y="9.53174"
                                width="3.00028"
                                height="3.99994"
                                fill="#63CFA0"
                            />
                            <rect
                                x="4.06839"
                                y="6.53174"
                                width="3.00028"
                                height="6.99988"
                                fill="#63CFA0"
                            />
                            <rect
                                x="7.46869"
                                y="3.53198"
                                width="3.00028"
                                height="9.99982"
                                fill="#63CFA0"
                            />
                            <rect
                                x="10.869"
                                y="0.531982"
                                width="3.00028"
                                height="12.9998"
                                fill="#63CFA0"
                            />
                        </svg>
                    </span>
                </div>

                <h3 className="text-xl font-semibold text-emerald-900 leading-snug">
                    {title}
                </h3>

                <div className="text-sm text-gray-700">
                    {date} ・ {time}
                </div>

                <div className="flex items-center gap-1 text-sm text-gray-700">
                    <svg
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.7498 16.8231C8.57966 16.8231 8.43382 16.7745 8.3123 16.6772C8.19077 16.58 8.09962 16.4524 8.03886 16.2944C7.80796 15.6139 7.51629 14.9759 7.16386 14.3804C6.82358 13.7849 6.34355 13.0861 5.72375 12.284C5.10396 11.4819 4.59962 10.7163 4.21073 9.98714C3.834 9.25798 3.64563 8.3769 3.64563 7.34391C3.64563 5.92204 4.13782 4.71891 5.12219 3.73454C6.11872 2.73801 7.32792 2.23975 8.7498 2.23975C10.1717 2.23975 11.3748 2.73801 12.3592 3.73454C13.3557 4.71891 13.854 5.92204 13.854 7.34391C13.854 8.44982 13.6413 9.37343 13.2159 10.1147C12.8027 10.8439 12.3227 11.567 11.7758 12.284C11.1196 13.159 10.6213 13.8882 10.281 14.4715C9.95292 15.0427 9.67948 15.6503 9.46073 16.2944C9.39997 16.4646 9.30275 16.5983 9.16907 16.6955C9.04754 16.7805 8.90778 16.8231 8.7498 16.8231ZM8.7498 9.16683C9.26021 9.16683 9.69164 8.99061 10.0441 8.63818C10.3965 8.28575 10.5727 7.85433 10.5727 7.34391C10.5727 6.8335 10.3965 6.40207 10.0441 6.04964C9.69164 5.69721 9.26021 5.521 8.7498 5.521C8.23938 5.521 7.80796 5.69721 7.45553 6.04964C7.10309 6.40207 6.92688 6.8335 6.92688 7.34391C6.92688 7.85433 7.10309 8.28575 7.45553 8.63818C7.80796 8.99061 8.23938 9.16683 8.7498 9.16683Z"
                            fill="#FF0000"
                        />
                    </svg>

                    {location}
                </div>

                <div className="flex justify-between items-center pt-2">
                    <span className="text-sm text-red-600">{spotsLeft}</span>
                    <div className="flex items-end gap-1 text-gray-900 font-semibold text-lg">
                        <span className="text-black">৳</span> {price}
                        <span className="text-sm text-gray-400 font-normal">
                            /person
                        </span>
                    </div>
                </div>

                <p className="text-sm text-gray-500">{attendees} attending</p>
            </div>
        </div>
    );
};

export default OtherEventCard;

// components/EventsSection.tsx
