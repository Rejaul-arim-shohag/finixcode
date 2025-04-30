import React from "react";
import TagsSection from "./TagsSection";
import AboutEvent from "./AboutEvent";
import LocationSection from "./LocationSection";
import GoodToKnow from "./GoodToKnow";
import HostedBy from "./HostedBy";
import Divider from "./Diveder";

export default function InformationDetails() {
    return (
        <>
            <TagsSection />
            <Divider />
            <AboutEvent />
            <Divider />
            <LocationSection />
            <Divider />
            <GoodToKnow />
            <Divider />
            <HostedBy />
        </>
    );
}
