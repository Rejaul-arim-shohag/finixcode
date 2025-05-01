import Image from "next/image";
import React from "react";

type PaymentMethod = "bkash" | "cash";

type Props = {
    selectedMethod: PaymentMethod;
    setSelectedMethod: (method: PaymentMethod) => void;
    onContinue: () => void;
};

const PaymentModalContent: React.FC<Props> = ({
    selectedMethod,
    setSelectedMethod,
    onContinue,
}) => {
    return (
        <>
            <div className="text-5xl">
                <Image
                    src="/money2.png"
                    alt="Money Icon"
                    width={100}
                    height={100}
                />
            </div>
            <h2 className="text-3xl text-[#FDE8CD] font-semibold text-center mt-4">
                Choose Payment
                <br />
                Method
            </h2>

            <div className="space-y-4 w-full mt-4">
                <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                        type="radio"
                        name="payment"
                        value="bkash"
                        checked={selectedMethod === "bkash"}
                        onChange={() => setSelectedMethod("bkash")}
                        className="mt-1 accent-white"
                    />
                    <div>
                        <div className="flex items-center gap-2">
                            <p className="font-medium">bKash </p>
                            <svg
                                width="22"
                                height="23"
                                viewBox="0 0 22 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.5319 4.48438C10.5319 4.48438 8.62391 11.2237 8.78616 11.2237C8.94841 11.2237 16.3377 12.5634 16.3377 12.5634L10.5319 4.48438Z"
                                    stroke="white"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M10.5326 4.48667L2.90039 3.35001L8.78677 11.226L9.80197 15.8946L16.3383 12.5657L18.0433 8.52596M18.0433 8.52596L13.9297 9.21392M18.0433 8.52596L19.7079 10.0889H17.3837"
                                    stroke="white"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M9.80319 15.8969L9.96544 16.77L6.29144 19.713L8.78798 11.2283M16.3395 12.568L16.0961 13.8875L10.4728 15.5559M3.87602 4.65625H2.29248L7.35431 9.30971"
                                    stroke="white"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <p className="text-sm">
                            Send the payment now via bKash to confirm your spot
                            instantly.
                        </p>
                    </div>
                </label>

                <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                        type="radio"
                        name="payment"
                        value="cash"
                        checked={selectedMethod === "cash"}
                        onChange={() => setSelectedMethod("cash")}
                        className="mt-1 accent-white"
                    />
                    <div>
                        <div className="flex items-center gap-2">
                            <p className="font-medium">Cash </p>
                            <svg
                                width="20"
                                height="15"
                                viewBox="0 0 20 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.83252 0.65625H7.02644C7.3877 0.656207 7.74543 0.727344 8.07918 0.865598C8.41294 1.00385 8.71619 1.20651 8.9716 1.462L11.8325 4.32292M3.58252 8.90625H0.83252M6.79085 3.40625L8.62419 5.23958C8.74456 5.35996 8.84005 5.50287 8.9052 5.66015C8.97035 5.81744 9.00388 5.98601 9.00388 6.15625C9.00388 6.32649 8.97035 6.49506 8.9052 6.65235C8.84005 6.80963 8.74456 6.95254 8.62419 7.07292C8.50381 7.1933 8.3609 7.28878 8.20362 7.35393C8.04633 7.41908 7.87776 7.45261 7.70752 7.45261C7.53728 7.45261 7.36871 7.41908 7.21142 7.35393C7.05414 7.28878 6.91123 7.1933 6.79085 7.07292L5.41585 5.69792C4.62752 6.48625 3.3781 6.57517 2.48527 5.906L2.20752 5.69792"
                                    stroke="white"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M3.58252 6.61747V10.7425C3.58252 12.4713 3.58252 13.3348 4.11969 13.872C4.65685 14.4091 5.52035 14.4091 7.24919 14.4091H15.4992C17.228 14.4091 18.0915 14.4091 18.6287 13.872C19.1659 13.3348 19.1659 12.4713 19.1659 10.7425V7.99247C19.1659 6.26364 19.1659 5.40014 18.6287 4.86297C18.0915 4.32581 17.228 4.32581 15.4992 4.32581H7.70752"
                                    stroke="white"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12.9784 9.36747C12.9784 9.79292 12.8093 10.201 12.5085 10.5018C12.2077 10.8026 11.7996 10.9716 11.3742 10.9716C10.9487 10.9716 10.5407 10.8026 10.2399 10.5018C9.93903 10.201 9.77002 9.79292 9.77002 9.36747C9.77002 8.94202 9.93903 8.53399 10.2399 8.23315C10.5407 7.93232 10.9487 7.76331 11.3742 7.76331C11.7996 7.76331 12.2077 7.93232 12.5085 8.23315C12.8093 8.53399 12.9784 8.94202 12.9784 9.36747Z"
                                    stroke="white"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <p className="text-sm">
                            Pay the event fee directly to the host before the
                            game starts.
                        </p>
                    </div>
                </label>
            </div>

            <button
                onClick={onContinue}
                className="mt-6 w-full bg-[#2B2B2B] text-white py-2 rounded-full font-semibold"
            >
                Continue
            </button>
        </>
    );
};

export default PaymentModalContent;
