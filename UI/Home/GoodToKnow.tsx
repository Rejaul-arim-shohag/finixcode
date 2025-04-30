// import HighlightCard from "./HighlightCard";
import HighLight from "./HighLight";
import RefundCard from "./RefundCard";

export default function GoodToKnow() {
    return (
        <section className="space-y-2">
            <h2 className="text-[32px] text-[#171717] font-bold">
                Good to know
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <HighLight />
                <RefundCard />
            </div>
        </section>
    );
}
