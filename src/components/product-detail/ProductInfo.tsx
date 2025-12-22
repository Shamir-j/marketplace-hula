"use client";

import React, { useState } from "react";
import { Box, Typography, Button, Breadcrumbs, Link } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";

interface ProductInfoProps {
    title: string;
    rating: number;
    reviewCount: number;
    price: number;
    listPrice?: number;
    discount?: number;
    colors: { name: string; image: string; price: string }[];
    sizes: string[];
}

const ProductInfo: React.FC<ProductInfoProps> = ({
    title,
    rating,
    reviewCount,
    price,
    listPrice,
    discount,
    colors,
    sizes
}) => {
    const [selectedColor, setSelectedColor] = useState(0);
    const [selectedSize, setSelectedSize] = useState("10");

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {/* Breadcrumbs */}
            <Breadcrumbs
                separator={<NavigateNext fontSize="small" />}
                sx={{ fontSize: "12px", color: "#565959" }}
            >
                <Link href="/" underline="hover" color="#007185">
                    Clothing, Shoes & Jewelry
                </Link>
                <Link href="/" underline="hover" color="#007185">
                    Men
                </Link>
                <Link href="/" underline="hover" color="#007185">
                    Shoes
                </Link>
                <Typography sx={{ fontSize: "12px", color: "#565959" }}>
                    Loafers & Slip-Ons
                </Typography>
            </Breadcrumbs>

            {/* Product Title */}
            <Typography
                sx={{
                    fontSize: "24px",
                    fontWeight: "400",
                    color: "#0F1111",
                    lineHeight: "32px"
                }}
            >
                {title}
            </Typography>

            {/* Visit Store Link */}
            <Link
                href="#"
                sx={{
                    fontSize: "14px",
                    color: "#007185",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline", color: "#c45500" }
                }}
            >
                Visit the HEYDUDE Store
            </Link>

            {/* Rating */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography sx={{ color: "#FFA41C", fontSize: "16px" }}>
                    {"★".repeat(Math.floor(rating))}{"☆".repeat(5 - Math.floor(rating))}
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#007185" }}>
                    {rating}
                </Typography>
                <Link
                    href="#reviews"
                    sx={{
                        fontSize: "14px",
                        color: "#007185",
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline", color: "#c45500" }
                    }}
                >
                    {reviewCount.toLocaleString()} ratings
                </Link>
            </Box>

            <Box sx={{ borderBottom: "1px solid #ddd", paddingBottom: 2 }}>
                <Typography sx={{ fontSize: "12px", color: "#565959" }}>
                    6500+ bought in past month
                </Typography>
            </Box>

            {/* Price Section */}
            <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
                {discount && (
                    <Typography sx={{ fontSize: "14px", color: "#CC0C39", fontWeight: "400" }}>
                        -{discount}%
                    </Typography>
                )}
                <Typography sx={{ fontSize: "28px", fontWeight: "400", color: "#0F1111" }}>
                    ${price.toFixed(2)}
                </Typography>
            </Box>

            {listPrice && (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography sx={{ fontSize: "13px", color: "#565959" }}>
                        List Price:
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "13px",
                            color: "#565959",
                            textDecoration: "line-through"
                        }}
                    >
                        ${listPrice.toFixed(2)}
                    </Typography>
                </Box>
            )}

            {/* Shipping Info */}
            <Typography sx={{ fontSize: "14px", color: "#007185" }}>
                $52.05 Shipping & Import Charges to Kenya{" "}
                <Link href="#" sx={{ color: "#007185" }}>
                    Details
                </Link>
            </Typography>

            {/* Color Selection */}
            <Box>
                <Typography sx={{ fontSize: "14px", fontWeight: "700", color: "#0F1111", marginBottom: 1 }}>
                    Color: {colors[selectedColor].name}
                </Typography>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    {colors.map((color, index) => (
                        <Box
                            key={index}
                            onClick={() => setSelectedColor(index)}
                            sx={{
                                border: selectedColor === index ? "2px solid #007185" : "1px solid #ddd",
                                borderRadius: "8px",
                                padding: "4px",
                                cursor: "pointer",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                minWidth: "60px",
                                "&:hover": {
                                    boxShadow: "0 0 3px rgba(0,0,0,0.3)"
                                }
                            }}
                        >
                            <Box
                                component="img"
                                src={color.image}
                                alt={color.name}
                                sx={{
                                    width: "50px",
                                    height: "50px",
                                    objectFit: "cover",
                                    borderRadius: "4px"
                                }}
                            />
                            <Typography sx={{ fontSize: "10px", color: "#0F1111", marginTop: "4px" }}>
                                ${color.price}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Size Selection */}
            <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 1 }}>
                    <Typography sx={{ fontSize: "14px", fontWeight: "700", color: "#0F1111" }}>
                        Size: {selectedSize}
                    </Typography>
                    <Link
                        href="#"
                        sx={{
                            fontSize: "12px",
                            color: "#007185",
                            textDecoration: "none",
                            "&:hover": { textDecoration: "underline" }
                        }}
                    >
                        Size chart
                    </Link>
                </Box>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    {sizes.map((size) => (
                        <Button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            variant={selectedSize === size ? "contained" : "outlined"}
                            sx={{
                                minWidth: "45px",
                                height: "35px",
                                fontSize: "12px",
                                textTransform: "none",
                                borderColor: selectedSize === size ? "#007185" : "#ddd",
                                backgroundColor: selectedSize === size ? "#007185" : "transparent",
                                color: selectedSize === size ? "#fff" : "#0F1111",
                                "&:hover": {
                                    backgroundColor: selectedSize === size ? "#006d75" : "#f0f0f0",
                                    borderColor: "#007185"
                                }
                            }}
                        >
                            {size}
                        </Button>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default ProductInfo;
