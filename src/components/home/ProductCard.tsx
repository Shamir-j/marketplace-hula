"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

interface ProductCardProps {
    index: number;
    reviews: number;
    price: string;
    shipping: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ index, reviews, price, shipping }) => {
    return (
        <Box
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
            <Link href="/product-detail" style={{ textDecoration: "none" }}>
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
                        minHeight: "40px",
                        cursor: "pointer",
                        "&:hover": {
                            textDecoration: "underline",
                            color: "#c45500"
                        }
                    }}
                >
                    Product Name {index + 1} - High Quality Item with Great Features
                </Typography>
            </Link>

            {/* Rating */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <Typography sx={{ color: "#FFA41C", fontSize: "14px" }}>★★★★☆</Typography>
                <Typography sx={{ fontSize: "12px", color: "#007185" }}>
                    {reviews}
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
                ${price}
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
                ${shipping} shipping
            </Typography>
        </Box>
    );
};

export default ProductCard;
