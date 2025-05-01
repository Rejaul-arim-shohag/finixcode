
export default function HighLight() {
    return (
        <div className="bg-[#DA6049] text-white p-6 rounded-xl space-y-2">
            <h3 className="font-semibold">Highlights</h3>
            <ul className="text-sm space-y-1">
                <div className="flex gap-2">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4.88889 4.14236V1.03125M11.1111 4.14236V1.03125M4.11111 7.25347H11.8889M2.55556 15.0313H13.4444C14.3036 15.0313 15 14.3348 15 13.4757V4.14236C15 3.28325 14.3036 2.58681 13.4444 2.58681H2.55556C1.69645 2.58681 1 3.28325 1 4.14236V13.4757C1 14.3348 1.69645 15.0313 2.55556 15.0313Z"
                            stroke="#F7F7F7"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Mon, 2 Dec
                </div>
                <div className="flex gap-2">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8 4.92014V8.03125L10.3333 10.3646M15 8.03125C15 11.8972 11.866 15.0313 8 15.0313C4.13401 15.0313 1 11.8972 1 8.03125C1 4.16526 4.13401 1.03125 8 1.03125C11.866 1.03125 15 4.16526 15 8.03125Z"
                            stroke="#F7F7F7"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    7.30 AM - 8.30 AM
                </div>
                <div className="flex gap-2">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8 4.92014V8.03125L10.3333 10.3646M15 8.03125C15 11.8972 11.866 15.0313 8 15.0313C4.13401 15.0313 1 11.8972 1 8.03125C1 4.16526 4.13401 1.03125 8 1.03125C11.866 1.03125 15 4.16526 15 8.03125Z"
                            stroke="#F7F7F7"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Arrive 15 min before start
                </div>
                <div className="flex gap-2">
                    <svg
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.44242 11.3646C10.0613 11.3646 10.6547 11.1188 11.0923 10.6812C11.5299 10.2436 11.7758 9.65009 11.7758 9.03125C11.7758 8.41241 11.5299 7.81892 11.0923 7.38133C10.6547 6.94375 10.0613 6.69792 9.44242 6.69792C8.82358 6.69792 8.23009 6.94375 7.7925 7.38133C7.35492 7.81892 7.10909 8.41241 7.10909 9.03125C7.10909 9.65009 7.35492 10.2436 7.7925 10.6812C8.23009 11.1188 8.82358 11.3646 9.44242 11.3646ZM7.10909 16.0312V13.6979H11.7758V16.0312H7.10909ZM7.10909 4.36458V2.03125H11.7758V4.36458H7.10909Z"
                            stroke="white"
                            strokeWidth="0.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M4 9.03125H14.8889M5.55556 16.0312C5.143 16.0312 4.74733 15.8674 4.45561 15.5756C4.16389 15.2839 4 14.8883 4 14.4757L4 3.58681C4 3.17425 4.16389 2.77858 4.45561 2.48686C4.74733 2.19514 5.143 2.03125 5.55556 2.03125H13.3333C13.7459 2.03125 14.1416 2.19514 14.4333 2.48686C14.725 2.77858 14.8889 3.17425 14.8889 3.58681V14.4757C14.8889 14.8883 14.725 15.2839 14.4333 15.5756C14.1416 15.8674 13.7459 16.0312 13.3333 16.0312H5.55556Z"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Venue booked
                </div>
            </ul>
        </div>
    );
}
