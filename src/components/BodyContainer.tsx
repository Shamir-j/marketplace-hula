"use client";

import { Box } from "@mui/material";
import React from "react";
import CustomCard from "./CustomCard";
import { cardData, carouselData } from "@/app/constants/constants";
import ExampleCarousel from "./Carousel";
import { useRouter } from 'next/navigation';

const BodyContainer: React.FC = () => {
    const router = useRouter();

    const handleLearnMore = () => {
        router.push("/results-page"); 
    };
    return (
        <Box sx={{ backgroundColor: "#E3E6E6", padding: "16px", minHeight: "100vh" }}>
            <Box sx={{ display: "flex", flexDirection: "column", flexWrap: "nowrap", justifyContent: "center", gap: 4, px: 30 }}>
                <Box sx={{ display: "flex", gap: 2, justifyContent: "center", alignItems: "center" }}>
                    {cardData.map((card) => (
                        <CustomCard
                            key={card.id}
                            title={card.title}
                            subtitle={card.subtitle}
                            description={card.description}
                            actionLabel={card.actionLabel}
                            onActionClick={handleLearnMore}
                            images={[
                                { src: "https://via.placeholder.com/150?text=Product+1", alt: "Product 1", caption: "Classic Leather Wallet" },
                                { src: "https://via.placeholder.com/150?text=Product+2", alt: "Product 2", caption: "Stylish Sunglasses" },
                                { src: "https://via.placeholder.com/150?text=Product+3", alt: "Product 3", caption: "Wireless Headphones" },
                                { src: "https://via.placeholder.com/150?text=Product+4", alt: "Product 4", caption: "Smartphone Stand" },
                            ]}
                        />
                    ))}
                </Box>


                <Box sx={{ display: "flex", gap: 2, justifyContent: "center", alignItems: "center" }}>
                    {cardData.map((card) => (
                        <CustomCard
                            key={card.id}
                            title={card.title}
                            subtitle={card.subtitle}
                            description={card.description}
                            actionLabel={card.actionLabel}
                            onActionClick={handleLearnMore}
                            images={[
                                { src: "https://via.placeholder.com/150?text=Product+1", alt: "Product 1", caption: "Classic Leather Wallet" },
                                { src: "https://via.placeholder.com/150?text=Product+2", alt: "Product 2", caption: "Stylish Sunglasses" },
                                { src: "https://via.placeholder.com/150?text=Product+3", alt: "Product 3", caption: "Wireless Headphones" },
                                { src: "https://via.placeholder.com/150?text=Product+4", alt: "Product 4", caption: "Smartphone Stand" },
                            ]}
                        />
                    ))}
                </Box>



                <ExampleCarousel />

                <ExampleCarousel />


                <Box sx={{ display: "flex", gap: 2, justifyContent: "center", alignItems: "center" }}>
                    {cardData.map((card) => (
                        <CustomCard
                            key={card.id}
                            title={card.title}
                            subtitle={card.subtitle}
                            description={card.description}
                            actionLabel={card.actionLabel}
                            onActionClick={handleLearnMore}
                            images={[
                                { src: "https://via.placeholder.com/150?text=Product+1", alt: "Product 1", caption: "Classic Leather Wallet" },
                                { src: "https://via.placeholder.com/150?text=Product+2", alt: "Product 2", caption: "Stylish Sunglasses" },
                                { src: "https://via.placeholder.com/150?text=Product+3", alt: "Product 3", caption: "Wireless Headphones" },
                                { src: "https://via.placeholder.com/150?text=Product+4", alt: "Product 4", caption: "Smartphone Stand" },
                            ]}
                        />
                    ))}
                </Box>






            </Box>
        </Box>
    );
};

export default BodyContainer;


