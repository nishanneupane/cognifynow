import HomePageDetails from "@/components/home/home-page-details";
import { Spinner } from "@/components/ui/spinner";
import { Suspense } from "react";

export default async function Home() {

  const res = await fetch("https://cognifynow.vercel.app/api/cognify/key-features", {
    cache: "no-store",
  });
  const result = await res.json();
  const features = result.features;

  return (
    <Suspense fallback={<Spinner variant="bars" />}>
      <HomePageDetails features={features} />
    </Suspense>
  );
}
