"use client";

import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

interface Product {
    id: number;
    name: string;
    image: string;
    price: string;
    rating: number;
    reviews: number;
    badge?: string;
}

interface RecommendedProductsProps {
    title: string;
    products: Product[];
    pageInfo?: string;
}

const RecommendedProducts: React.FC<RecommendedProductsProps> = ({
    title,
    products,
    pageInfo
}) => {
    return (
        <Box sx={{ marginTop: 4, backgroundColor: "#fff", padding: 3, borderRadius: "4px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
                <Typography sx={{ fontSize: "18px", fontWeight: "700", color: "#0F1111" }}>
                    {title}
                </Typography>
                {pageInfo && (
                    <Typography sx={{ fontSize: "12px", color: "#565959" }}>
                        {pageInfo}
                    </Typography>
                )}
            </Box>

            <Box sx={{ position: "relative" }}>
                {/* Left Arrow */}
                <IconButton
                    sx={{
                        position: "absolute",
                        left: "-20px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        backgroundColor: "#fff",
                        border: "1px solid #ddd",
                        zIndex: 1,
                        "&:hover": { backgroundColor: "#f0f0f0" }
                    }}
                >
                    <ChevronLeft />
                </IconButton>

                {/* Products Grid */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                        gap: 2,
                        overflowX: "auto",
                        scrollBehavior: "smooth"
                    }}
                >
                    {products.map((product) => (
                        <Box
                            key={product.id}
                            sx={{
                                border: "1px solid #ddd",
                                borderRadius: "4px",
                                padding: 2,
                                cursor: "pointer",
                                transition: "transform 0.2s, box-shadow 0.2s",
                                "&:hover": {
                                    transform: "translateY(-4px)",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                                }
                            }}
                        >
                            <Box
                                component="img"
                                src={product.image}
                                alt={product.name}
                                sx={{
                                    width: "100%",
                                    height: "150px",
                                    objectFit: "contain",
                                    marginBottom: 1
                                }}
                            />
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    color: "#007185",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    display: "-webkit-box",
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: "vertical",
                                    minHeight: "40px",
                                    marginBottom: 1,
                                    "&:hover": { textDecoration: "underline", color: "#c45500" }
                                }}
                            >
                                {product.name}
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, marginBottom: 0.5 }}>
                                <Typography sx={{ color: "#FFA41C", fontSize: "14px" }}>
                                    {"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}
                                </Typography>
                                <Typography sx={{ fontSize: "12px", color: "#007185" }}>
                                    {product.reviews.toLocaleString()}
                                </Typography>
                            </Box>
                            {product.badge && (
                                <Box
                                    sx={{
                                        backgroundColor: "#CC0C39",
                                        color: "#fff",
                                        fontSize: "10px",
                                        padding: "2px 6px",
                                        borderRadius: "2px",
                                        marginBottom: 0.5,
                                        width: "fit-content"
                                    }}
                                >
                                    {product.badge}
                                </Box>
                            )}
                            <Typography sx={{ fontSize: "16px", fontWeight: "700", color: "#0F1111" }}>
                                ${product.price}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                {/* Right Arrow */}
                <IconButton
                    sx={{
                        position: "absolute",
                        right: "-20px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        backgroundColor: "#fff",
                        border: "1px solid #ddd",
                        zIndex: 1,
                        "&:hover": { backgroundColor: "#f0f0f0" }
                    }}
                >
                    <ChevronRight />
                </IconButton>
            </Box>
        </Box>
    );
};

export default RecommendedProducts;
