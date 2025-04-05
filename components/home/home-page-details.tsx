"use client";
import { FeaturesData } from "@/lib/types";
import Features from "../features";

const HomePageDetails = ({ features: data }: { features: FeaturesData }) => {

    return (
        <div className="flex flex-col items-center text-center p-10 relative">
            <div className="p-0">
                <span className="font-normal text-gray-500">Key Features</span>
                <h1 className="text-3xl md:text-4xl font-normal mt-2 text-gray-500">
                    CognifyNow doesn&apos;t just
                    <br />teach, it thinks with you
                </h1>
            </div>
            <Features features={data} />
        </div>
    );
};

export default HomePageDetails;
