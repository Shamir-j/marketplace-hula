import BodyContainer from "@/components/BodyContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hula Market - Shop Thousands of Products Online | East Africa",
  description: "Discover thousands of products on Hula Market. Fast shipping, secure checkout, buyer protection. Shop now and enjoy great deals from trusted sellers across East Africa.",
  keywords: "online shopping, e-commerce, Kenya marketplace, Uganda marketplace, Tanzania marketplace, Rwanda marketplace, buy online",
  openGraph: {
    title: "Hula Market - Your Trusted Online Marketplace",
    description: "Shop millions of products with fast delivery and buyer protection",
    type: "website",
    url: "https://hulamarket.co.ke",
  },
};

export default function Home() {
  return (
      <BodyContainer />
  );
}
