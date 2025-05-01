"use client";

import CustomDateInput from "@/UI/Home/CustomDateInput";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-4 bg-white shadow-sm">
            <Image src="/logo.png" alt="Medal" width={28} height={28} />

            <div className="flex items-center space-x-4">
                <CustomDateInput />

                <div className="flex items-center rounded-full shadow px-4 py-2 bg-white">
                    <input
                        type="text"
                        placeholder="Search"
                        className="outline-none text-sm bg-transparent text-[#6A6A6A]"
                    />
                    <div className="ml-2 p-1 bg-[#E5E5E5] rounded-full">
                        <Image
                            src="/search.svg"
                            alt="Search"
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <button className="flex items-center bg-green-100 text-green-900 px-4 py-2 rounded-full text-sm font-medium">
                    <Image
                        src="/leaderboard.svg"
                        alt="Medal"
                        width={16}
                        height={16}
                        className="mr-2"
                    />
                    Leaderboard
                </button>

                <button className="border border-green-800 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                    Login / Sign up
                </button>

                <Image src="/menu.png" alt="Menu" width={28} height={28} />
                <div className="bg-gray-800 rounded-full p-1">
                    <Image
                        src="/profile.svg"
                        alt="User"
                        width={24}
                        height={24}
                    />
                </div>
            </div>
        </nav>
    );
}
