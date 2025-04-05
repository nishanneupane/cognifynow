"use client";

import Image from "next/image";
import { useState } from "react";

export default function FeatureCard({
    id,
    icon,
    title,
    points,
    position = "left",
}: {
    id: string;
    icon: string;
    title: string;
    points: string[];
    position?: "left" | "right";
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`relative flex flex-col items-${position === "left" ? "start" : "end  "} text-${position === "left" ? "start" : "end  "} p-3 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-xl bg-white/80`}
        >
            <Image src={icon || "/image.png"} width={70} height={70} alt={title} />
            <h3 className="mt-2 font-medium w-30 text-gray-700">{title}</h3>

            {hovered && (
                <div
                    className={`absolute ${position === "left" ? "left-full ml-2" : "right-full mr-2"
                        } mt-2 bg-white shadow-md p-4 py-8 rounded-lg w-72 text-sm z-50`}
                >
                    <ul className="list-disc pl-4 text-gray-700">
                        {points.map((point, i) => (
                            <li key={i} className="mb-1 text-start">
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
