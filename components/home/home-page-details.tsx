"use client";

import { keyFeatures } from "@/lib/constants";
import { FeaturesData } from "@/lib/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Spinner } from "../ui/spinner";

const HomePageDetails = () => {
    const [data, setData] = useState<FeaturesData | null>(null);
    const [loading, setLoading] = useState(false);
    const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
    const [selectedFeature, setSelectedFeature] = useState<keyof FeaturesData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch("http://localhost:3000/api/cognify/key-features");
                const result = await response.json();
                setData(result.features);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading || !data) return (
        <div className="flex items-center justify-center w-full h-full">
            <Spinner variant="bars" />
        </div>
    );

    return (
        <div className="flex flex-col items-center text-center p-10 relative">
            <div className="mb-10">
                <span className="font-normal text-gray-500">Key Features</span>
                <h1 className="text-3xl md:text-4xl font-normal mt-2 text-gray-500">
                    CognifyNow doesn&apos;t just
                    <br />teach, it thinks with you
                </h1>
            </div>

            <div className="relative w-full max-w-5xl flex justify-between items-center">
                <div className="flex flex-col gap-10">
                    {Object.entries(data).slice(0, 2).map(([key, feature]) => {
                        const featureData = Array.isArray(feature) ? feature[0] : feature;
                        return (
                            <div
                                key={key}
                                className="relative flex flex-col items-center bg-white p-3 shadow-md rounded-lg cursor-pointer transition duration-300 hover:shadow-xl"
                                onClick={() => setSelectedFeature(key as keyof FeaturesData)}
                                onMouseEnter={() => setHoveredFeature(key)}
                                onMouseLeave={() => setHoveredFeature(null)}
                            >
                                <Image
                                    src={keyFeatures[key as keyof typeof keyFeatures] || "/default-icon.png"}
                                    width={50}
                                    height={50}
                                    alt={featureData.title}
                                />
                                <span className="mt-2 text-sm font-medium">{featureData.title}</span>

                                {hoveredFeature === key && (
                                    <div className="absolute top-full mt-2 bg-white shadow-md p-4 rounded-lg w-64 text-left text-sm z-50">
                                        <ul>
                                            {featureData.points.map((point: string, i: number) => (
                                                <li key={i} className="mb-1">- {point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="relative flex items-center justify-center">
                    <Image src={"/image.png"} width={500} height={500} alt="Cognify Now" className="z-[-1] opacity-50" />
                </div>

                <div className="flex flex-col gap-10">
                    {Object.entries(data).slice(2, 4).map(([key, feature]) => {
                        const featureData = Array.isArray(feature) ? feature[0] : feature;
                        return (
                            <div
                                key={key}
                                className="relative flex flex-col items-center bg-white p-3 shadow-md rounded-lg cursor-pointer transition duration-300 hover:shadow-xl"
                                onClick={() => setSelectedFeature(key as keyof FeaturesData)}
                                onMouseEnter={() => setHoveredFeature(key)}
                                onMouseLeave={() => setHoveredFeature(null)}
                            >
                                <Image
                                    src={keyFeatures[key as keyof typeof keyFeatures] || "/default-icon.png"}
                                    width={50}
                                    height={50}
                                    alt={featureData.title}
                                />
                                <span className="mt-2 text-sm font-medium">{featureData.title}</span>

                                {hoveredFeature === key && (
                                    <div className="absolute top-full mt-2 bg-white shadow-md p-4 rounded-lg w-64 text-left text-sm z-50">
                                        <ul>
                                            {featureData.points.map((point: string, i: number) => (
                                                <li key={i} className="mb-1">- {point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {selectedFeature && data[selectedFeature] && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-6 shadow-xl rounded-lg max-w-md opacity-90">
                    <h3 className="text-xl font-semibold mb-4">{data[selectedFeature][0].title}</h3>
                    <ul className="text-left text-sm">
                        {data[selectedFeature][0].points.map((point: string, i: number) => (
                            <li key={i} className="mb-1">- {point}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default HomePageDetails;
