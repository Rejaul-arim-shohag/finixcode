export default function RefundCard() {
    return (
        <div className="bg-green-700 text-white p-4 rounded-xl space-y-2">
            <h3 className="font-semibold">Refund & cancellation policy</h3>
            <ul className="text-sm list-disc list-inside">
                <li>Full refund if host cancels the game</li>
                <li>Full refund if you cancel 24+ hours in advance</li>
                <li>Full refund if game is cancelled due to low attendance</li>
            </ul>
            <a className="text-sm underline text-white/90">Learn more</a>
        </div>
    );
}
