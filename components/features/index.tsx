import Image from "next/image";
import FeatureCard from "./feature-card";
import { FeaturesData } from "@/lib/types";
import { keyFeatures } from "@/lib/constants";
import BgLines from "../ui/bg-lines";

export default function Features({ features: data }: { features: FeaturesData }) {

    return (
        <div className="relative w-full max-w-5xl flex justify-between items-center">
            <div className="flex flex-col gap-10">
                {Object.entries(data).slice(0, 2).map(([key, feature]) => {
                    const featureData = Array.isArray(feature) ? feature[0] : feature;
                    return (
                        <FeatureCard
                            key={key}
                            id={key}
                            icon={keyFeatures[key as keyof typeof keyFeatures] || "/image.png"}
                            title={featureData.title}
                            points={featureData.points}
                            position="left"
                        />
                    );
                })}
            </div>
            <div className="relative flex items-center justify-center">
                <BgLines />

                <Image src={"/image.png"} width={500} height={500} alt="Cognify Now" className="opacity-90" />
            </div>

            <div className="flex flex-col gap-10">
                {Object.entries(data).slice(2, 4).map(([key, feature]) => {
                    const featureData = Array.isArray(feature) ? feature[0] : feature;
                    return (
                        <FeatureCard
                            key={key}
                            id={key}
                            icon={keyFeatures[key as keyof typeof keyFeatures] || "/image.png"}
                            title={featureData.title}
                            points={featureData.points}
                            position="right"
                        />
                    );
                })}
            </div>
        </div>
    );
}
