import EventActions from "./EventActions";

export default function EventCard() {
    return (
        <div className="mx-auto  p-4 bg-neutral-50 grid grid-cols-3 gap-4 items-start mt-4">
            {/* Left section - col-span-2 */}
            <div className="col-span-2">
                <div className="flex justify-between">
                    <h2 className="text-[48px] font-bold text-gray-900">
                        Road to the Football Finals
                    </h2>
                    <EventActions />
                </div>
                <p className="text-gray-600 mt-1">Bashundhara Sports Complex</p>
                <p className="text-gray-700 mt-1">
                    Mar 14 from 7:30 PM - 9:30 PM
                </p>
            </div>

            {/* Right section - col-span-1 */}
            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center space-y-4 min-w-[220px]">
                <div className="flex justify-between items-center border border-[#E5E5E5] rounded-xl px-4 py-2 w-full">
                    <span className="text-red-500 text-sm whitespace-nowrap">
                        6 spots left
                    </span>
                    <span className="font-semibold text-base text-[#171717] text-right">
                        320<span className="lowercase">tk</span>/
                        <span className="lowercase">player</span>{" "}
                        <span className="text-sm font-normal text-gray-400">
                            (both)
                        </span>
                    </span>
                </div>

                <button className="bg-[#63CFA0] hover:bg-green-500 text-white w-full py-3 rounded-full font-semibold">
                    Join event
                </button>
            </div>
        </div>
    );
}
