import React from "react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 bg-opacity-50">
            <div className="bg-[#386c5f] text-white rounded-2xl p-6 w-[90%] max-w-sm relative">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white text-2xl"
                >
                    &times;
                </button>

                {/* Modal Content */}
                <div className="flex flex-col items-center space-y-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
