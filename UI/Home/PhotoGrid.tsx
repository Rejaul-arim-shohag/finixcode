"use client";

import Image from "next/image";

const images = ["/Background1.png", "/Background2.png", "/Background3.png"];

export default function PhotoGrid() {
    return (
        <div className="grid grid-cols-3 gap-2  mx-auto rounded-xl overflow-hidden  p-3 my-4">
            {/* Left large image */}
            <div className="col-span-2 relative aspect-[3/2]">
                <Image
                    src={images[0]}
                    alt="Main photo"
                    fill
                    className="object-cover rounded-xl"
                />
            </div>

            {/* Right two stacked images */}
            <div className="flex flex-col gap-2">
                {/* Top right */}
                <div className="relative aspect-[3/2]">
                    <Image
                        src={images[1]}
                        alt="Secondary photo"
                        fill
                        className="object-cover rounded-xl"
                    />
                </div>

                {/* Bottom right with overlay */}
                <div className="relative aspect-[3/2]">
                    <Image
                        src={images[2]}
                        alt="More photos"
                        fill
                        className="object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-xl">
                        <span className="text-white text-lg font-semibold">
                            +2 photos
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
