import { Metadata } from "next";
import ProductDetailContent from "./ProductDetailContent";

export const metadata: Metadata = {
  title: "HEYDUDE Men's Wally Washed Canvas Slip-on Loafers | Hula Market",
  description: "Shop HEYDUDE Men's Wally Washed Canvas Slip-on Loafers on Hula Market. Comfortable, lightweight, and stylish men's shoes with fast shipping and secure payments.",
  keywords: "HEYDUDE, men's shoes, loafers, slip-on shoes, comfortable shoes, Hula Market",
  openGraph: {
    title: "HEYDUDE Men's Wally Washed Canvas Slip-on Loafers",
    description: "The perfect blend of comfort and style. Buy now on Hula Market.",
    type: "website",
    images: ["https://placehold.co/600x600?text=Shoe+Main"],
  },
};

export default function ProductDetailPage() {
  return <ProductDetailContent />;
}
