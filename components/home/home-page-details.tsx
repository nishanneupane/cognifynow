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

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://cognifynow.vercel.app/api/cognify/key-features");
                // const response = await fetch("http://localhost:3000/api/cognify/key-features");
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
                                className="relative flex flex-col items-start bg-white p-3 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-xl"
                                onMouseEnter={() => setHoveredFeature(key)}
                                onMouseLeave={() => setHoveredFeature(null)}
                            >
                                <Image
                                    src={keyFeatures[key as keyof typeof keyFeatures] || "/image.png"}
                                    width={50}
                                    height={50}
                                    alt={featureData.title}
                                />
                                <span className="mt-2 text-md font-medium flex-wrap w-30 flex text-start justify-start text-gray-700">{featureData.title}</span>

                                {hoveredFeature === key && (
                                    <div className="absolute left-full mt-2 bg-white/80 shadow-md p-4 py-8 rounded-lg w-72 text-left text-sm z-50 ml-2">
                                        <ul className="text-left list-disc pl-4">
                                            {featureData.points.map((point: string, i: number) => (
                                                <li key={i} className="mb-1"> {point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
                <div className="relative flex items-center justify-center">
                    <svg className="absolute w-[600px] h-[600px] opacity-40 z-[-1]" viewBox="0 0 600 600" fill="none">

                        <path d="M180 280 H140 Q120 270 110 250 H90" stroke="blue" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="180" cy="280" r="5" fill="blue" />
                        <circle cx="90" cy="250" r="4" fill="blue" opacity="0.5" />

                        <path d="M180 340 H130 Q110 350 100 370 H80" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="180" cy="340" r="5" fill="blue" />
                        <circle cx="80" cy="370" r="4" fill="gray" opacity="0.5" />


                        <path d="M420 280 H460 Q480 270 490 250 H510" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="420" cy="280" r="5" fill="blue" />
                        <circle cx="510" cy="250" r="4" fill="gray" opacity="0.5" />


                        <path d="M420 340 H470 Q490 350 500 370 H520" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="420" cy="340" r="5" fill="blue" />
                        <circle cx="520" cy="370" r="4" fill="gray" opacity="0.5" />

                    </svg>

                    <Image src={"/image.png"} width={500} height={500} alt="Cognify Now" className="opacity-90" />
                </div>

                <div className="flex flex-col gap-10">
                    {Object.entries(data).slice(2, 4).map(([key, feature]) => {
                        const featureData = Array.isArray(feature) ? feature[0] : feature;
                        return (
                            <div
                                key={key}
                                className="relative flex flex-col items-end bg-white/80 p-3 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-xl"
                                onMouseEnter={() => setHoveredFeature(key)}
                                onMouseLeave={() => setHoveredFeature(null)}
                            >
                                <Image
                                    src={keyFeatures[key as keyof typeof keyFeatures] || "/image.png"}
                                    width={50}
                                    height={50}
                                    alt={featureData.title}
                                />
                                <span className="mt-2 font-medium flex-wrap w-30 flex text-end justify-start text-gray-700">{featureData.title}</span>

                                {hoveredFeature === key && (
                                    <div className="absolute right-full mt-2 bg-white shadow-md p-4 py-8 rounded-lg w-72 text-left text-sm z-50 mr-2">
                                        <ul className="text-left text-sm list-disc pl-4">
                                            {featureData.points.map((point: string, i: number) => (
                                                <li key={i} className="mb-1"> {point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

        </div>
    );
};

export default HomePageDetails;
