import EventCard from "@/UI/Home/EventCard";
import PhotoGrid from "@/UI/Home/PhotoGrid";
import TabSection from "@/UI/Home/TabSection";

export default function Home() {
    return (
        <div>
            <main>
                <PhotoGrid />
                <EventCard />
            </main>
        </div>
    );
}
