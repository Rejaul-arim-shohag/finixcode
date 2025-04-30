import EventCard from "@/UI/Home/EventCard";
import PhotoGrid from "@/UI/Home/PhotoGrid";
import TabSection from "@/UI/Home/TabSection";

export default function Home() {
    return (
        <div>
            <main>
                <PhotoGrid />
                <EventCard />
                <div className="mx-auto p-4 bg-neutral-50 grid grid-cols-3 gap-4 items-start min-h-screen">
                    <div className="col-span-2">
                        <TabSection />
                    </div>
                </div>

            </main>
        </div>
    );
}
