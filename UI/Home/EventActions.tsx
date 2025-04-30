
const EventActions = () => {
    return (
        <div className="flex items-center justify-end space-x-3">
            {/* Share Button */}
            <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                <svg
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M3.8999 17.5812L3.8999 18.7187C3.8999 20.6034 5.42773 22.1312 7.3124 22.1312L18.6874 22.1312C20.5721 22.1312 22.0999 20.6034 22.0999 18.7187L22.0999 17.5812M17.5499 8.48123L12.9999 3.93123M12.9999 3.93123L8.4499 8.48123M12.9999 3.93123L12.9999 17.5812"
                        stroke="#171717"
                        stroke-width="1.41176"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>

            {/* Heart Button */}
            <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                <svg
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_d_1_750)">
                        <path
                            d="M5.23257 6.59658C3.45568 8.37347 3.45568 11.2544 5.23257 13.0313L13 20.7986L20.7672 13.0312C22.5441 11.2544 22.5441 8.37346 20.7672 6.59658C18.9904 4.81969 16.1095 4.81969 14.3326 6.59658L13 7.9293L11.6672 6.59658C9.89035 4.81969 7.00945 4.81969 5.23257 6.59658Z"
                            fill="#4A4A4A"
                        />
                        <path
                            d="M5.23257 6.59658C3.45568 8.37347 3.45568 11.2544 5.23257 13.0313L13 20.7986L20.7672 13.0312C22.5441 11.2544 22.5441 8.37346 20.7672 6.59658C18.9904 4.81969 16.1095 4.81969 14.3326 6.59658L13 7.9293L11.6672 6.59658C9.89035 4.81969 7.00945 4.81969 5.23257 6.59658Z"
                            stroke="white"
                            stroke-width="1.17647"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_d_1_750"
                            x="0.958826"
                            y="3.49919"
                            width="24.0823"
                            height="21.4171"
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
                            <feOffset dy="1.17647" />
                            <feGaussianBlur stdDeviation="1.17647" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_1_750"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_1_750"
                                result="shape"
                            />
                        </filter>
                    </defs>
                </svg>
            </button>

            {/* More Options (3 dots) */}
            <button className="ml-2">
                <svg
                    width="4"
                    height="20"
                    viewBox="0 0 4 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2.00005 17.9937L2.00005 17.9824M2.00005 10.0312L2.00005 10.0198M2.00005 2.06872L2.00005 2.05735M2.00005 16.8562C2.62827 16.8562 3.13755 17.3655 3.13755 17.9937C3.13755 18.6219 2.62827 19.1312 2.00005 19.1312C1.37182 19.1312 0.862549 18.6219 0.862549 17.9937C0.862549 17.3655 1.37182 16.8562 2.00005 16.8562ZM2.00005 8.89373C2.62827 8.89373 3.13755 9.403 3.13755 10.0312C3.13755 10.6594 2.62827 11.1687 2.00005 11.1687C1.37182 11.1687 0.862548 10.6594 0.862548 10.0312C0.862548 9.403 1.37182 8.89373 2.00005 8.89373ZM2.00005 0.931225C2.62827 0.931225 3.13755 1.4405 3.13755 2.06872C3.13755 2.69695 2.62827 3.20622 2.00005 3.20622C1.37182 3.20622 0.862548 2.69695 0.862548 2.06872C0.862548 1.4405 1.37182 0.931225 2.00005 0.931225Z"
                        stroke="#171717"
                        stroke-width="1.67"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
        </div>
    );
};

export default EventActions;
