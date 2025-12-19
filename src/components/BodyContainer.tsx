"use client";

import { Box } from "@mui/material";
import React from "react";
import CustomCard from "./CustomCard";
import { cardData } from "@/app/constants/constants";
import ExampleCarousel from "./Carousel";
import { useRouter } from 'next/navigation';

const BodyContainer: React.FC = () => {
    const router = useRouter();

    const handleLearnMore = () => {
        router.push("/results-page");
    };
    return (
        <Box sx={{ backgroundColor: "#E3E6E6", padding: "16px", minHeight: "100vh" }}>
            <Box sx={{ display: "flex", flexDirection: "column", flexWrap: "nowrap", justifyContent: "space-between", gap: 4, px: 50 }}>
                <Box sx={{ display: "flex", gap: 2, justifyContent: "center", alignItems: "center" }}>
                    {cardData.map((card, index) => (
                        <CustomCard
                            key={card.id}
                            title={card.title}
                            subtitle={card.subtitle}
                            description={card.description}
                            actionLabel={card.actionLabel}
                            onActionClick={handleLearnMore}
                            images={[
                                { src: `https://placehold.co/600x400?text=Product+${index * 4 + 1}`, alt: `Product ${index * 4 + 1}`, caption: "Classic Leather Wallet" },
                                { src: `https://placehold.co/600x400?text=Product+${index * 4 + 2}`, alt: `Product ${index * 4 + 2}`, caption: "Stylish Sunglasses" },
                                { src: `https://placehold.co/600x400?text=Product+${index * 4 + 3}`, alt: `Product ${index * 4 + 3}`, caption: "Wireless Headphones" },
                                { src: `https://placehold.co/600x400?text=Product+${index * 4 + 4}`, alt: `Product ${index * 4 + 4}`, caption: "Smartphone Stand" },
                            ]}
                        />
                    ))}
                </Box>


                <Box sx={{ display: "flex", gap: 2, justifyContent: "center", alignItems: "center" }}>
                    {cardData.map((card, index) => (
                        <CustomCard
                            key={card.id}
                            title={card.title}
                            subtitle={card.subtitle}
                            description={card.description}
                            actionLabel={card.actionLabel}
                            onActionClick={handleLearnMore}
                            images={[
                                { src: `https://placehold.co/600x400?text=Product+${index * 4 + 1}`, alt: `Product ${index * 4 + 1}`, caption: "Classic Leather Wallet" },
                                { src: `https://placehold.co/600x400?text=Product+${index * 4 + 2}`, alt: `Product ${index * 4 + 2}`, caption: "Stylish Sunglasses" },
                                { src: `https://placehold.co/600x400?text=Product+${index * 4 + 3}`, alt: `Product ${index * 4 + 3}`, caption: "Wireless Headphones" },
                                { src: `https://placehold.co/600x400?text=Product+${index * 4 + 4}`, alt: `Product ${index * 4 + 4}`, caption: "Smartphone Stand" },
                            ]}
                        />
                    ))}
                </Box>

                <ExampleCarousel />

                <ExampleCarousel />


                <Box sx={{ display: "flex", gap: 2, justifyContent: "center", alignItems: "center" }}>
                    {cardData.map((card, index) => (
                        <CustomCard
                            key={card.id}
                            title={card.title}
                            subtitle={card.subtitle}
                            description={card.description}
                            actionLabel={card.actionLabel}
                            onActionClick={handleLearnMore}
                            images={[
                                { src: `https://placehold.co/600x400?text=Product+${index * 4 + 1}`, alt: `Product ${index * 4 + 1}`, caption: "Classic Leather Wallet" },
                                { src: `https://placehold.co/600x400?text=Product+${index * 4 + 2}`, alt: `Product ${index * 4 + 2}`, caption: "Stylish Sunglasses" },
                                { src: `https://placehold.co/600x400?text=Product+${index * 4 + 3}`, alt: `Product ${index * 4 + 3}`, caption: "Wireless Headphones" },
                                { src: `https://placehold.co/600x400?text=Product+${index * 4 + 4}`, alt: `Product ${index * 4 + 4}`, caption: "Smartphone Stand" },
                            ]}
                        />
                    ))}
                </Box>




            </Box>
        </Box>
    );
};

export default BodyContainer;


