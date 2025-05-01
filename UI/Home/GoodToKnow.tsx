// import HighlightCard from "./HighlightCard";
import HighLight from "./HighLight";
import RefundCard from "./RefundCard";

export default function GoodToKnow() {
    return (
        <section className="space-y-4 py-4">
            <h2 className="text-[32px] text-[#171717] font-bold">
                Good to know
            </h2>
            <div className="flex gap-4">
                <HighLight />
                <RefundCard />
            </div>
        </section>
    );
}
