import { Metadata } from "next";
import ResultsPageContent from "./ResultsPageContent";

export const metadata: Metadata = {
  title: "Search Results | Hula Market",
  description: "Explore search results on Hula Market. Find the best deals on electronics, fashion, home goods, and more from trusted sellers in East Africa.",
  keywords: "search results, Hula Market, online shopping Kenya, e-commerce deals",
};

export default function ResultsPage() {
  return <ResultsPageContent />;
}
