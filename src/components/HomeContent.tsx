"use client";

import React from "react";
import { Box } from "@mui/material";
import AdvertisingCarousel from "@/components/AdvertisingCarousel";
import HeroSection from "@/components/home/HeroSection";
import CategoryCarousel from "@/components/home/CategoryCarousel";
import CategoryGrid from "@/components/home/CategoryGrid";
import CustomersViewed from "@/components/home/CustomersViewed";
import PersonalizedRecommendations from "@/components/home/PersonalizedRecommendations";

const HomeContent: React.FC = () => {
    const containerPadding = "1px";
    const cardGap = 1.5;
    const contentMaxWidth = "1400px";

    return (
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#f5f5f5" }}>

            {/* MAIN CONTENT */}
            <Box sx={{ flex: 1 }}>
                {/* ADVERTISING CAROUSEL */}
                <AdvertisingCarousel />

                {/* MAIN CONTENT WRAPPER */}
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    maxWidth: contentMaxWidth,
                    margin: "0 auto",
                    paddingX: containerPadding,
                    position: "relative",
                    zIndex: 1
                }}>
                    {/* HERO SECTION - OVERLAYING CAROUSEL */}
                    <HeroSection cardGap={cardGap} />

                    {/* CAROUSEL SECTION 1 */}
                    <CategoryCarousel title="Top Sellers in Toys for you" />

                    {/* SECOND ROW OF CATEGORY CARDS */}
                    <CategoryGrid cardGap={cardGap} keyPrefix="bottom" />

                    {/* CAROUSEL SECTION 2 */}
                    <CategoryCarousel title="Best Sellers in Home & Kitchen" />
                </Box>
            </Box>

            {/* CUSTOMERS WHO VIEWED - FULL WIDTH */}
            <CustomersViewed />

            {/* SEE PERSONALIZED RECOMMENDATIONS SECTION */}
            <PersonalizedRecommendations />
        </Box>
    );
};

export default HomeContent;
