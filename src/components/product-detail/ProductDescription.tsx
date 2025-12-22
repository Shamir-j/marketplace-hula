"use client";

import React from "react";
import { Box, Typography } from "@mui/material";

interface ProductDescriptionProps {
    title: string;
    features: string[];
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ title, features }) => {
    return (
        <Box sx={{ marginTop: 4 }}>
            <Typography
                sx={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#0F1111",
                    marginBottom: 2
                }}
            >
                {title}
            </Typography>
            <Box component="ul" sx={{ paddingLeft: "20px", margin: 0 }}>
                {features.map((feature, index) => (
                    <Box
                        key={index}
                        component="li"
                        sx={{
                            fontSize: "14px",
                            color: "#0F1111",
                            marginBottom: 1,
                            lineHeight: "20px"
                        }}
                    >
                        {feature}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default ProductDescription;
