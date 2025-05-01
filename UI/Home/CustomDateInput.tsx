"use client"
import { useRef } from "react";
import Image from "next/image";

export default function CustomDateInput() {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleIconClick = () => {
        inputRef.current?.showPicker?.();
        inputRef.current?.focus();
    };

    return (
        <div className="flex items-center rounded-full shadow px-4 py-2 bg-white">
            <input
                type="date"
                ref={inputRef}
                className="outline-none text-sm bg-transparent w-full hide-calendar-icon text-[#6A6A6A]"
                placeholder="Select date"
            />
            <div
                onClick={handleIconClick}
                className="ml-2 p-2 bg-green-400 rounded-full cursor-pointer"
            >
                <Image
                    src="/calender.svg"
                    alt="Calendar"
                    width={20}
                    height={20}
                />
            </div>
        </div>
    );
}
