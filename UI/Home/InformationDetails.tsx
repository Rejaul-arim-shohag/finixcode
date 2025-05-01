import React from "react";
import TagsSection from "./TagsSection";
import AboutEvent from "./AboutEvent";
import LocationSection from "./LocationSection";
import GoodToKnow from "./GoodToKnow";
import HostedBy from "./HostedBy";
import Divider from "./Diveder";

export default function InformationDetails() {
    return (
        <div className="grid grid-cols-3 px-8 py-4">
            <div className="col-span-2">
                <TagsSection />
                <Divider />
                <AboutEvent />
                <Divider />
                <LocationSection />
                <Divider />
                <GoodToKnow />
                <Divider />
                <HostedBy />
            </div>
        </div>
    );
}
