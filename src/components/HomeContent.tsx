"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdvertisingCarousel from "@/components/AdvertisingCarousel";
import CustomCard from "@/components/CustomCard";
import ExampleCarousel from "@/components/Carousel";
import { cardData } from "@/app/constants/constants";

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
                    <Box sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(3, 1fr)",
                            lg: "repeat(4, 1fr)"
                        },
                        gap: cardGap,
                        marginTop: { xs: "-80px", sm: "-100px", md: "-140px", lg: "-120px" },
                        position: "relative",
                        zIndex: 2
                    }}>
                        {cardData.map((card) => (
                            <CustomCard
                                key={`hero-${card.id}`}
                                title={card.title}
                                subtitle={card.subtitle}
                                description={card.description}
                                actionLabel={card.actionLabel}
                                onActionClick={() => { }}
                                images={[
                                    { src: `https://placehold.co/600x400?text=${card.title}+1`, alt: `${card.title} 1`, caption: "Item 1" },
                                    { src: `https://placehold.co/600x400?text=${card.title}+2`, alt: `${card.title} 2`, caption: "Item 2" },
                                    { src: `https://placehold.co/600x400?text=${card.title}+3`, alt: `${card.title} 3`, caption: "Item 3" },
                                    { src: `https://placehold.co/600x400?text=${card.title}+4`, alt: `${card.title} 4`, caption: "Item 4" },
                                ]}
                            />
                        )).slice(0, 4)}
                    </Box>

                    {/* CAROUSEL SECTION 1 */}
                    <Box sx={{ width: "100%", marginTop: 2 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: { xs: "16px", sm: "18px", md: "20px" },
                                fontWeight: "700",
                                color: "#232f3e",
                                marginBottom: "12px"
                            }}
                        >
                            Top Sellers in Toys for you
                        </Typography>
                        <ExampleCarousel />
                    </Box>

                    {/* SECOND ROW OF CATEGORY CARDS */}
                    <Box sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(3, 1fr)",
                            lg: "repeat(4, 1fr)"
                        },
                        gap: cardGap,
                        marginTop: 2
                    }}>
                        {cardData.map((card) => (
                            <CustomCard
                                key={`bottom-${card.id}`}
                                title={card.title}
                                subtitle={card.subtitle}
                                description={card.description}
                                actionLabel={card.actionLabel}
                                onActionClick={() => { }}
                                images={[
                                    { src: `https://placehold.co/600x400?text=Deal+${card.id}+1`, alt: `Deal ${card.id} 1`, caption: "Special Offer" },
                                    { src: `https://placehold.co/600x400?text=Deal+${card.id}+2`, alt: `Deal ${card.id} 2`, caption: "Limited Time" },
                                    { src: `https://placehold.co/600x400?text=Deal+${card.id}+3`, alt: `Deal ${card.id} 3`, caption: "Save Now" },
                                    { src: `https://placehold.co/600x400?text=Deal+${card.id}+4`, alt: `Deal ${card.id} 4`, caption: "See More" },
                                ]}
                            />
                        )).slice(0, 4)}
                    </Box>

                    {/* CAROUSEL SECTION 2 */}
                    <Box sx={{ width: "100%", marginTop: 2 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: { xs: "16px", sm: "18px", md: "20px" },
                                fontWeight: "700",
                                color: "#232f3e",
                                marginBottom: "12px"
                            }}
                        >
                            Best Sellers in Home & Kitchen
                        </Typography>
                        <ExampleCarousel />
                    </Box>
                </Box>
            </Box>

            {/* CUSTOMERS WHO VIEWED - FULL WIDTH */}
            <Box sx={{ width: "100%", backgroundColor: "#ffffff", marginTop: 4, paddingY: 3 }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    maxWidth: "100%",
                    margin: "0 auto",
                    paddingX: { xs: "12px", sm: "16px", md: "20px" }
                }}>
                    <Typography
                        sx={{
                            fontSize: { xs: "18px", sm: "20px", md: "22px" },
                            fontWeight: "700",
                            color: "#0F1111",
                            marginBottom: "8px"
                        }}
                    >
                        Customers who viewed items in your browsing history also viewed
                    </Typography>

                    {/* PRODUCTS GRID - ONE ROW */}
                    <Box sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "repeat(2, 1fr)",
                            sm: "repeat(3, 1fr)",
                            md: "repeat(6, 1fr)",
                            lg: "repeat(12, 1fr)"
                        },
                        gap: 2
                    }}>
                        {[
                            { reviews: 5319, price: "19.99", shipping: "12.57" },
                            { reviews: 4106, price: "23.99", shipping: "11.25" },
                            { reviews: 1524, price: "33.99", shipping: "14.67" },
                            { reviews: 6086, price: "19.99", shipping: "12.12" },
                            { reviews: 4060, price: "53.99", shipping: "14.27" },
                            { reviews: 2659, price: "18.97", shipping: "14.67" },
                            { reviews: 637, price: "19.99", shipping: "19.79" },
                            { reviews: 171, price: "18.97", shipping: "12.25" },
                            { reviews: 2475, price: "19.99", shipping: "14.06" },
                            { reviews: 65, price: "17.99", shipping: "19.79" },
                            { reviews: 107, price: "13.99", shipping: "14.06" },
                            { reviews: 3, price: "13.99", shipping: "14.06" }
                        ].map((product, index) => (
                            <Box
                                key={`product-${index}`}
                                sx={{
                                    backgroundColor: "#fff",
                                    border: "1px solid #ddd",
                                    borderRadius: "4px",
                                    padding: "12px",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 1,
                                    cursor: "pointer",
                                    transition: "transform 0.2s, box-shadow 0.2s",
                                    "&:hover": {
                                        transform: "translateY(-4px)",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                                    }
                                }}
                            >
                                {/* Product Image */}
                                <Box
                                    component="img"
                                    src={`https://placehold.co/200x200?text=Product+${index + 1}`}
                                    alt={`Product ${index + 1}`}
                                    sx={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "contain",
                                        marginBottom: "8px"
                                    }}
                                />

                                {/* Product Title */}
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        color: "#0066c0",
                                        fontWeight: "400",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical",
                                        lineHeight: "1.4",
                                        minHeight: "40px"
                                    }}
                                >
                                    Product Name {index + 1} - High Quality Item with Great Features
                                </Typography>

                                {/* Rating */}
                                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                    <Typography sx={{ color: "#FFA41C", fontSize: "14px" }}>★★★★☆</Typography>
                                    <Typography sx={{ fontSize: "12px", color: "#007185" }}>
                                        {product.reviews}
                                    </Typography>
                                </Box>

                                {/* Price */}
                                <Typography
                                    sx={{
                                        fontSize: "18px",
                                        fontWeight: "700",
                                        color: "#0F1111"
                                    }}
                                >
                                    ${product.price}
                                </Typography>

                                {/* Delivery Info */}
                                <Typography
                                    sx={{
                                        fontSize: "12px",
                                        color: "#007600",
                                        fontWeight: "400"
                                    }}
                                >
                                    Get it as soon as Wednesday, Dec 25
                                </Typography>

                                {/* Shipping */}
                                <Typography
                                    sx={{
                                        fontSize: "12px",
                                        color: "#565959"
                                    }}
                                >
                                    ${product.shipping} shipping
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* SEE PERSONALIZED RECOMMENDATIONS SECTION */}
            <Box sx={{ width: "100%", backgroundColor: "#ffffff", marginTop: 4, paddingY: 4 }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                    maxWidth: "1400px",
                    margin: "0 auto"
                }}>
                    <Typography
                        sx={{
                            fontSize: { xs: "18px", sm: "20px", md: "22px" },
                            fontWeight: "700",
                            color: "#232f3e"
                        }}
                    >
                        See personalized recommendations
                    </Typography>
                    <Box
                        component="button"
                        sx={{
                            backgroundColor: "#FFD700",
                            color: "#000",
                            border: "none",
                            padding: "10px 80px",
                            fontSize: "16px",
                            fontWeight: "600",
                            borderRadius: "4px",
                            cursor: "pointer",
                            width: "100%",
                            maxWidth: "250px",
                            "&:hover": {
                                backgroundColor: "#FFC700"
                            }
                        }}
                    >
                        Sign in
                    </Box>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            color: "#0066c0",
                            cursor: "pointer",
                            textDecoration: "underline",
                            "&:hover": {
                                color: "#c45911"
                            }
                        }}
                    >
                        New customer? Start here.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default HomeContent;
