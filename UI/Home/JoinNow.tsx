"use client"
import React, { useState } from "react";
import PaymentModalContent from "./PaymentModalContent";
import Modal from "@/components/Modal";

const JoinNow = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState<"bkash" | "cash">(
        "bkash"
    );

    const handleContinue = () => {
        console.log("Selected:", paymentMethod);
        setIsOpen(false);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="bg-[#63CFA0] hover:bg-green-500 text-white w-full py-3 rounded-full font-semibold"
            >
                Join event
            </button>
            {/* <button
                onClick={() => setIsOpen(true)}
                className="bg-green-600 px-6 py-3 rounded-lg text-white"
            >
                Open Modal
            </button> */}

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <PaymentModalContent
                    selectedMethod={paymentMethod}
                    setSelectedMethod={setPaymentMethod}
                    onContinue={handleContinue}
                />
            </Modal>
        </>
    );
};

export default JoinNow;
