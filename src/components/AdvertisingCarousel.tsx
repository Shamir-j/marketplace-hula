"use client";

import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const AdvertisingCarousel: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const advertisements = [
        {
            id: 1,
            title: "Holiday deals",
            subtitle: "Wishlist-worthy holiday gifts are here",
            bgColor: "#1b6b4a",
            image: "https://placehold.co/1200x400?text=Holiday+Deals"
        },
        {
            id: 2,
            title: "New Arrivals",
            subtitle: "Check out the latest products",
            bgColor: "#0f5a3d",
            image: "https://placehold.co/1200x400?text=New+Arrivals"
        },
        {
            id: 3,
            title: "Special Offers",
            subtitle: "Save big on your favorite items",
            bgColor: "#085749",
            image: "https://placehold.co/1200x400?text=Special+Offers"
        },
    ];

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % advertisements.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + advertisements.length) % advertisements.length);
    };

    return (
        <Box
            sx={{
                position: "relative",
                width: { xs: "100%", sm: "90%", md: "80%", lg: "100%",},
                height: { xs: "200px", sm: "250px", md: "350px", lg: "400px" },
                borderRadius: "8px",
                overflow: "hidden",
                margin: "0 auto 24px"
            }}
        >
            {/* Sliding Container */}
            <Box
                sx={{
                    display: "flex",
                    width: `${advertisements.length * 100}%`,
                    height: "100%",
                    transform: `translateX(-${(currentSlide * 100) / advertisements.length}%)`,
                    transition: "transform 0.5s ease-in-out"
                }}
            >
                {advertisements.map((ad, index) => (
                    <Box
                        key={ad.id}
                        sx={{
                            width: `${100 / advertisements.length}%`,
                            height: "100%",
                            backgroundColor: ad.bgColor,
                            backgroundImage: `url(${ad.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            flexShrink: 0
                        }}
                    >
                        {/* Content Overlay */}
                        <Box
                            sx={{
                                position: "relative",
                                left: { xs: "16px", sm: "24px", md: "40px" },
                                color: "white",
                                zIndex: 2,
                                maxWidth: "50%"
                            }}
                        >
                            <Box
                                component="h2"
                                sx={{
                                    fontSize: { xs: "18px", sm: "24px", md: "32px" },
                                    fontWeight: "700",
                                    margin: "0 0 8px 0",
                                    lineHeight: "1.2"
                                }}
                            >
                                {ad.title}
                            </Box>
                            <Box
                                component="p"
                                sx={{
                                    fontSize: { xs: "14px", sm: "16px", md: "20px" },
                                    fontWeight: "400",
                                    margin: "0",
                                    opacity: "0.9"
                                }}
                            >
                                {ad.subtitle}
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>

            {/* Navigation Arrows */}
            <IconButton
                onClick={handlePrev}
                sx={{
                    position: "absolute",
                    left: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 3,
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    color: "#036A47",
                    "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 1)",
                    }
                }}
            >
                <ChevronLeft />
            </IconButton>

            <IconButton
                onClick={handleNext}
                sx={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 3,
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    color: "#036A47",
                    "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 1)",
                    }
                }}
            >
                <ChevronRight />
            </IconButton>

            {/* Slide Indicators */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: "16px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    gap: "8px",
                    zIndex: 3
                }}
            >
                {advertisements.map((ad, idx) => (
                    <Box
                        key={ad.id}
                        onClick={() => setCurrentSlide(idx)}
                        sx={{
                            width: "12px",
                            height: "12px",
                            borderRadius: "50%",
                            backgroundColor: currentSlide === idx ? "white" : "rgba(255, 255, 255, 0.5)",
                            cursor: "pointer",
                            transition: "all 0.3s ease"
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default AdvertisingCarousel;
