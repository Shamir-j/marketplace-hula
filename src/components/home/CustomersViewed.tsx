"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import ProductCard from "./ProductCard";

const CustomersViewed: React.FC = () => {
    const products = [
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
    ];

    return (
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
                    {products.map((product, index) => (
                        <ProductCard
                            key={`product-${index}`}
                            index={index}
                            reviews={product.reviews}
                            price={product.price}
                            shipping={product.shipping}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default CustomersViewed;
